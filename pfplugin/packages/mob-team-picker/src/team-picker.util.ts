// 获取主题色
export const getThemeVar = (): string | null => {
  const root = document.documentElement;
  if (!root) {
    return null;
  }
  const style = getComputedStyle(root);

  const primary = style.getPropertyValue('--ibiz-color-primary');
  return primary;
};

// 判断是不是汉字
export const isChineseCharacter = (char: string): boolean => {
  return /[\u4E00-\u9FA5]/.test(char);
};

// 判断字符串是否同时存在英文和中文
export const hasChineseAndEnglish = (str: string): boolean => {
  const regex = /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/;
  return regex.test(str);
};

// 字符串转16进制颜色
export const stringToHexColor = (textVal: string): string => {
  if (!textVal) return '';
  // 计算字符串的哈希值
  let hash = 0;
  for (let i = 0; i < textVal.length; i++) {
    if (isChineseCharacter(textVal)) {
      // eslint-disable-next-line no-bitwise
      hash = textVal.charCodeAt(i) + ((hash << 5) - hash);
      // eslint-disable-next-line operator-assignment, no-bitwise
      hash = hash & hash;
    } else {
      const charCode = textVal.charCodeAt(i);
      hash += charCode.toString(16) as unknown as number;
    }
  }

  // 将哈希值转换为16进制颜色代码
  const trimmedHash = String(hash).substring(0, 6);

  let r = parseInt(trimmedHash.substring(0, 2), 16);
  let g = parseInt(trimmedHash.substring(2, 4), 16);
  let b = parseInt(trimmedHash.substring(4, 6), 16);
  if (r < 0) {
    r = 10;
  }
  if (g < 0) {
    g = 10;
  }
  if (b < 0) {
    b = 10;
  }

  const colorCode = `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  if (colorCode === '#FFFFFF') {
    return getThemeVar() || colorCode;
  }
  return colorCode;
};

// 绘制文本标志头
export const renderTextPhoto = (textVal: string): string | void => {
  if (textVal && textVal.toString().length < 2) {
    return textVal;
  }
  if (textVal && textVal.toString().length >= 2) {
    // 大于两个字符
    const tag = hasChineseAndEnglish(textVal);
    // 存在中英文混合情况，按顺序取第一个英文与第一个中文
    if (tag) {
      const engChar: string =
        textVal.split('').find((char: string) => {
          return /[a-zA-Z]/.test(char);
        }) || '';
      const chineseStr: string =
        textVal.split('').find((char: string) => {
          return /[\u4E00-\u9FA5]/.test(char);
        }) || '';
      return `${engChar}${chineseStr}`.toLowerCase();
    }
    // 只存在英文，取前两个
    const engTag = /[a-zA-Z]/.test(textVal);
    if (engTag) {
      return textVal
        .split('')
        .filter((char: string) => {
          return /[a-zA-Z]/.test(char);
        })
        .slice(0, 2)
        .join('')
        .toUpperCase();
    }
    // 只存在中文，取最后两个
    const chineseTag = /[\u4E00-\u9FA5]/.test(textVal);
    if (chineseTag) {
      return textVal
        .split('')
        .filter((char: string) => {
          return /[\u4E00-\u9FA5]/.test(char);
        })
        .slice(-2)
        .join('');
    }
    return textVal.replaceAll(' ', '').substring(0, 2);
  }
};
