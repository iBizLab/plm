/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 声明合并，扩展 Editor 的类型定义
declare module '@wangeditor/editor-for-vue' {
  const Editor = import('vue').DefineComponent<
    {
      /** 编辑器模式 */
      mode: {
        type: StringConstructor;
        default: string;
      };
      /** 编辑器默认内容 */
      defaultContent: {
        type: PropType<SlateDescendant[]>;
        default: never[];
      };
      defaultHtml: {
        type: StringConstructor;
        default: string;
      };
      /** 编辑器默认配置 */
      defaultConfig: {
        type: PropType<Partial<IEditorConfig>>;
        default: {};
      };
      modelValue: {
        type: StringConstructor;
        default: string;
      };
    },
    {
      box: import('vue').Ref<null>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    Record<string, any>,
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      {
        mode?: unknown;
        defaultContent?: unknown;
        defaultHtml?: unknown;
        defaultConfig?: unknown;
        modelValue?: unknown;
      } & {
        mode: string;
        defaultContent: SlateDescendant[];
        defaultHtml: string;
        defaultConfig: Partial<IEditorConfig>;
        modelValue: string;
      } & {}
    >,
    {
      mode: string;
      defaultContent: SlateDescendant[];
      defaultHtml: string;
      defaultConfig: Partial<IEditorConfig>;
      modelValue: string;
    }
  >;

  const Toolbar = import('vue').DefineComponent<
    {
      editor: {
        type: PropType<IDomEditor>;
      };
      /** 编辑器模式 */
      mode: {
        type: StringConstructor;
        default: string;
      };
      /** 编辑器默认配置 */
      defaultConfig: {
        type: PropType<Partial<IToolbarConfig>>;
        default: {};
      };
    },
    {
      selector: import('vue').Ref<null>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    Record<string, any>,
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      {
        editor?: unknown;
        mode?: unknown;
        defaultConfig?: unknown;
      } & {
        mode: string;
        defaultConfig: Partial<IToolbarConfig>;
      } & {
        editor?: IDomEditor | undefined;
      }
    >,
    {
      mode: string;
      defaultConfig: Partial<IToolbarConfig>;
    }
  >;
}
