/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import { diff_match_patch } from 'diff-match-patch';

/**
 * 封装字符串比对方法
 *
 * @memberof Util
 */
export class Util {
  /**
   * diff-match-patch 实例
   *
   * @memberof Util
   */
  public dmp!: IParams;

  /**
   * 比对标签的集合
   *
   * @memberof Util
   */
  public tagMap: IParams = {};

  /**
   * unicode初始值
   *
   * @memberof Util
   */
  public unicodeRangeStart = 0xe000;

  /**
   * 标签集合的长度
   *
   * @memberof Util
   */
  public mapLength = 0;

  constructor() {
    this.init();
  }

  public init(): void {
    // eslint-disable-next-line new-cap
    this.dmp = new diff_match_patch();
  }

  /**
   * 字符串比对方法
   *
   * @param {string} oldValue 旧值
   * @param {string} newValue 新值
   * @returns {string} 比对结果字符串
   * @memberof Util
   */
  public doDiff(oldValue: string, newValue: string): string {
    // 将旧值和新值转换为可比较的字符串
    const diffOldVal = this.convertHtmlToDiffString(oldValue);
    const diffNewVal = this.convertHtmlToDiffString(newValue);
    // 使用差异算法比较两个可比较的字符串
    const diffs = this.dmp.diff_main(diffOldVal, diffNewVal);
    this.dmp.diff_cleanupSemantic(diffs);
    let diffOutput = '';
    for (let x = 0; x < diffs.length; x++) {
      diffs[x][1] = this.insertTagsForOperation(diffs[x][1], diffs[x][0]);
      diffOutput += this.convertDiffBackToHtml(diffs[x][1]);
    }
    return diffOutput;
  }

  /**
   * 将 HTML 字符串转换为可比较的字符串
   *
   * @param {string} htmlString 输入的 HTML 字符串
   * @returns {string} 转换后的可比较字符串
   * @memberof Util
   */
  public convertHtmlToDiffString(htmlString: string): string {
    let diffableString = ''; // 用于存储转换后的可比较字符串
    if (htmlString == null || htmlString.length === 0) {
      return diffableString; // 如果输入字符串为空，则直接返回空字符串
    }
    let offset = 0; // 初始化偏移量
    while (offset < htmlString.length) {
      // 查找下一个标签的起始位置
      const tagStart = htmlString.indexOf('<', offset);
      // 如果找不到起始标签，则直接将剩余部分添加到结果中并结束循环
      if (tagStart < 0) {
        diffableString += htmlString.substr(offset);
        break;
      } else {
        // 查找当前标签的结束位置
        const tagEnd = htmlString.indexOf('>', tagStart);
        // 如果找不到结束标签，则直接将起始标签之间的内容添加到结果中并结束循环
        if (tagEnd < 0) {
          diffableString += htmlString.substr(offset, tagStart - offset);
          break;
        }

        // // 提取当前标签的字符串
        const tagString = htmlString.substr(tagStart, tagEnd + 1 - tagStart);

        // 在映射表中查找当前标签对应的 Unicode 字符
        let unicodeCharacter = this.tagMap[tagString];
        // 如果未找到对应的 Unicode 字符，则创建一个新的 Unicode 字符并更新映射表
        if (!unicodeCharacter) {
          unicodeCharacter = String.fromCharCode(
            this.mapLength + this.unicodeRangeStart,
          );
          this.tagMap[tagString] = unicodeCharacter;
          this.tagMap[unicodeCharacter] = tagString;
          this.mapLength++;
        }
        // 将起始标签之前的内容和对应的 Unicode 字符添加到结果中
        diffableString += htmlString.substr(offset, tagStart - offset);
        diffableString += unicodeCharacter;

        offset = tagEnd + 1; // 更新偏移量，准备处理下一个标签
      }
    }

    return diffableString;
  }

  /**
   * 插入标签操作符
   *
   * @param {string} diffableString
   * @param {number} [operation=0 | 1 | -1]
   * @return {*}
   * @memberof Util
   */
  insertTagsForOperation(
    diffableString: string,
    // eslint-disable-next-line no-bitwise
    operation: number = 0 | 1 | -1,
  ): string {
    let openTag = '';
    const closeTag = '</span>';
    if (operation === 1) {
      openTag = "<span class='add-text'>";
    } else if (operation === -1) {
      openTag = "<span class='remove-text'>";
    } else {
      return diffableString;
    }
    let n = -1;
    do {
      n++;
    } while (diffableString.charCodeAt(n) >= this.unicodeRangeStart);
    if (n >= diffableString.length) {
      // 所有字符都是映射字符时
      return `${openTag}${diffableString}${closeTag}`;
    }
    let outputString = '';
    let isOpen = false;
    for (let x = 0; x < diffableString.length; x++) {
      const str = diffableString[x];
      if (!this.tagMap[str]) {
        if (!isOpen) {
          outputString += openTag;
          isOpen = true;
        }
        outputString += str;
      } else {
        if (isOpen) {
          outputString += closeTag;
          isOpen = false;
        }
        outputString += str;
      }
    }
    if (isOpen) outputString += closeTag;
    return outputString;
  }

  /**
   * 将可比较的字符串转换回 HTML 字符串
   *
   * @param {string} diffString 可比较的字符串
   * @returns {string} 转换后的 HTML 字符串
   * @memberof Util
   */
  public convertDiffBackToHtml(diffString: string): string {
    let htmlString = '';
    for (let x = 0; x < diffString.length; x++) {
      // 获取当前字符的 Unicode 编码
      const charCode = diffString.charCodeAt(x);
      // 在映射表中查找当前字符对应的 HTML 标签
      const tagString = this.tagMap[diffString[x]];
      if (charCode < this.unicodeRangeStart) {
        // 如果字符编码小于起始 Unicode 编码，则直接添加到结果中
        htmlString += diffString[x];
        continue;
      } else if (tagString === undefined) {
        // 如果找不到对应的 HTML 标签，则将字符添加到结果中
        htmlString += diffString[x];
      } else {
        // 如果找到对应的 HTML 标签，则将标签添加到结果中
        htmlString += tagString;
      }
    }
    return htmlString; // 返回转换后的 HTML 字符串
  }
}
