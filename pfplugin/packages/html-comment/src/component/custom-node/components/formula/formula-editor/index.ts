// 样式植入
import './style/common.scss';
import FormulaEditor from './editor';

export * from './mathjax';

// 检验是否浏览器环境
try {
  // eslint-disable-next-line no-unused-expressions
  document;
} catch (ex) {
  throw new Error('Please run in the browser environment!');
}

export default FormulaEditor;
