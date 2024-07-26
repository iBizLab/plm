export class HtmlUtil {
  /**
   * 获取主题
   * @returns
   */
  public static getThemeVar(): string | null {
    const root = document.documentElement;
    if (!root) {
      return null;
    }
    const style = getComputedStyle(root);

    const primary = style.getPropertyValue('--ibiz-color-primary');
    return primary;
  }

  /**
   * 是否包含中文字符
   * @param inputString
   * @returns
   */
  public static isChineseCharacter(inputString: string): boolean {
    const chinesePattern = /[\u4e00-\u9fa5]/;
    return chinesePattern.test(inputString);
  }

  /**
   * 判断字符串是否同时存在英文和中文
   * @param str
   * @returns
   */
  public static hasChineseAndEnglish(str: string): boolean {
    const regex = /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/;
    return regex.test(str);
  }

  /**
   * 字符串转16进制颜色
   * @param text
   * @returns
   */
  public static stringToHexColor(text: string): string {
    if (!text) return '';
    // 计算字符串的哈希值
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.isChineseCharacter(text)) {
        // eslint-disable-next-line no-bitwise
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
        // eslint-disable-next-line operator-assignment, no-bitwise
        hash = hash & hash;
      } else {
        const charCode = text.charCodeAt(i);
        hash += charCode.toString(16) as unknown as number;
      }
    }

    // 将哈希值转换为16进制颜色代码
    const trimmedHash = String(hash).substring(0, 6);

    const r = parseInt(trimmedHash.substring(0, 2), 16);
    const g = parseInt(trimmedHash.substring(2, 4), 16);
    const b = parseInt(trimmedHash.substring(4, 6), 16);

    const colorCode = `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    if (colorCode === '#FFFFFF') {
      return this.getThemeVar() || colorCode;
    }
    return colorCode;
  }

  /**
   * 缩写名字
   * @param text
   * @returns
   */
  public static avatarName(text: string): string | void {
    if (text && text.toString().length < 2) {
      return text;
    }
    if (text && text.toString().length >= 2) {
      // 大于两个字符
      const tag = this.hasChineseAndEnglish(text);
      // 存在中英文混合情况，按顺序取第一个英文与第一个中文
      if (tag) {
        const engChar: string =
          text.split('').find((char: string) => {
            return /[a-zA-Z]/.test(char);
          }) || '';
        const chineseStr: string =
          text.split('').find((char: string) => {
            return /[\u4E00-\u9FA5]/.test(char);
          }) || '';
        return `${engChar}${chineseStr}`.toLowerCase();
      }
      // 只存在英文，取前两个
      const engTag = /[a-zA-Z]/.test(text);
      if (engTag) {
        return text
          .split('')
          .filter((char: string) => {
            return /[a-zA-Z]/.test(char);
          })
          .slice(0, 2)
          .join('')
          .toUpperCase();
      }
      // 只存在中文，取最后两个
      const chineseTag = /[\u4E00-\u9FA5]/.test(text);
      if (chineseTag) {
        return text
          .split('')
          .filter((char: string) => {
            return /[\u4E00-\u9FA5]/.test(char);
          })
          .slice(-2)
          .join('');
      }
      return text.replaceAll(' ', '').substring(0, 2);
    }
  }

  /**
   * 解析emoji表情
   *
   * @param {string} value
   * @return {*}  {string}
   */
  public static getEmojiCustomHtml(value: string): string {
    return value
      .replaceAll(/{"emoji":"(.+?)"}/g, (x, emoji) => {
        const tempVal = decodeURIComponent(atob(emoji));
        return `<span class="emoji-tag">${tempVal}</span>`;
      })
      .replaceAll(
        /<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g,
        (x, emoji) => {
          const tempVal = decodeURIComponent(atob(emoji));
          return `<span data-w-e-type="emoji" class='emoji'>${tempVal}</span>`;
        },
      );
  }
}
