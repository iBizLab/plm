/**
 * 多语言中文配置
 */
const CHINESE: Record<string, string> = {
  'fe.a': '箭头符号',
  'fe.am': '高数',
  'fe.lg': '线代',
  'fe.gl': '希腊字母',
  'fe.i': '不等式',
  'fe.o': '运算符',
  'fe.p': '预设公式',
  'fe.t': '三角函数',
  'fe.l': '资源加载中...',
  'fe.pt': '勾股定理',
  'fe.h': '双曲线',
  'fe.tfr': '三角函数关系',
  'fe.d': '导数',
  'fe.nl': '牛莱公式',
};

/**
 * 多语言转换函数（对应 i18n 的 t ）
 * @param key 对应的多语言配置key
 */
export function t(key: string): string {
  return CHINESE[key] || key;
}
