import { resource } from './global';

export class MathJax {
  /**
   * @description 获取Luckysheet对象
   * @static
   * @return {*}  {*}
   * @memberof MathJax
   */
  public static getMathJax(): IParams {
    return (window as IParams).MathJax;
  }

  /**
   * 动态加载脚本
   *
   * @static
   * @return {*}
   * @memberof MathJax
   */
  public static loadScript(url: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * 配置全局 MathJax
   * @param {FnType} callback Mathjax 加载完成的回调
   */
  public static initMathJax(callback?: FnType<void>): void {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$']],
        processEnvironments: true,
        processRefs: true,
      },
      options: {
        skipHtmlTags: ['noscript', 'style', 'textarea', 'pre', 'code'],
        ignoreHtmlClass: 'tex2jax_ignore',
      },
      startup: {
        pageReady: () => callback && callback(),
      },
      svg: {
        fontCache: 'global',
      },
    };
  }

  /**
   * 手动渲染公式
   * @param {HTMLElement} el 需要触发渲染的节点
   * @returns Promise
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static renderFormula(el?: HTMLElement | HTMLElement[]): Promise<any> {
    if (!window.MathJax || !window.MathJax.typesetPromise)
      return Promise.reject();

    if (el && !Array.isArray(el)) {
      // eslint-disable-next-line no-param-reassign
      el = [el];
    }

    return window.MathJax.typesetPromise(el);
  }

  /**
   * 加载MathJax
   *
   * @static
   * @return {*}
   * @memberof MathJax
   */
  public static loadMathJax(): Promise<unknown> {
    return new Promise<void>((resolve, reject) => {
      const mathJax = this.getMathJax();
      if (!mathJax) {
        this.initMathJax();
        const loadResource = [
          this.loadScript(
            // 插件中使用 resource.dir
            resource.dir('assets/mathjax/plugins/js/tex-svg.js'),
            // 模板中使用
            // '/assets/mathjax/plugins/js/tex-svg.js',
          ),
        ];
        Promise.all(loadResource)
          .then(() => {
            resolve();
          })
          .catch(() => {
            ibiz.message.error(
              '加载mathJax静态资源失败,请确认静态资源是否存在！',
            );
            reject();
          });
      } else {
        resolve();
      }
    });
  }
}
