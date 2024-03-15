/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent, ref, watch } from 'vue';
import {
  getEditorEmits,
  getRawProps,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { CodeListItem } from '@ibiz-template/runtime';
import { IAppCodeList } from '@ibiz/model-core';
import { IconRawItemEditorController } from './icon-rawitem-editor.controller';
import './icon-rawitem.scss';

export const IconRawItem = defineComponent({
  name: 'IBizIconRawItem',
  props: getRawProps<IconRawItemEditorController>(),
  emits: getEditorEmits(),
  setup(props) {
    const ns = useNamespace('icon-rawitem');
    const c = props.controller;
    const editorModel = c.model;
    // 传入内容
    const content: IParams = ref('');

    // 代码表
    let codeList: undefined | IAppCodeList;

    // 类型
    let type = 'TEXT';
    // handlerBars模版
    let template = '';
    if (editorModel.contentType) {
      type = editorModel.contentType;
    }
    if (editorModel.editorParams?.contenttype) {
      type = editorModel.editorParams?.contenttype;
    }
    if (editorModel.editorParams?.template) {
      template = editorModel.editorParams.template.replaceAll('//n', '\n');
    }
    if (editorModel.editorParams?.TEMPLATE) {
      template = editorModel.editorParams.TEMPLATE.replaceAll('//n', '\n');
    }
    if (editorModel.editorParams?.codeListId) {
      const app = ibiz.hub.getApp(c.context.srfappid);
      codeList = app.codeList.getCodeList(editorModel.editorParams?.codeListId);
    }

    const findCodeListItem = (
      codelist: CodeListItem[] | undefined,
      value: string | number,
    ) => {
      if (codelist) {
        // eslint-disable-next-line eqeqeq
        const findItem = codelist.find(item => item.value == value);
        if (findItem) {
          return findItem;
        }
        for (let i = 0; i < codelist.length; i++) {
          const childrenItem = findCodeListItem(
            codelist[i].children,
            value,
          ) as CodeListItem;
          if (childrenItem) {
            return childrenItem;
          }
        }
      }
    };

    watch(
      () => props.value,
      async (newVal, oldVal) => {
        if (newVal !== oldVal) {
          let tempValue = null;
          if (typeof newVal === 'string' || typeof newVal === 'number') {
            tempValue = newVal;
          }
          if (template && newVal) {
            let obj = null;
            if (typeof newVal === 'string') {
              try {
                obj = JSON.parse(newVal);
              } catch (error) {
                ibiz.log.error('JSON字符串转换错误');
              }
            }
            tempValue = await ibiz.util.hbs.render(
              template,
              (obj || newVal) as IData,
            );
          }
          if (tempValue && codeList) {
            const findItem = findCodeListItem(
              (codeList as IParams).codeItems,
              `${String(tempValue)?.toLowerCase()}`,
            );
            content.value = findItem?.sysImage;
          } else {
            content.value = tempValue;
          }
        }
      },
      {
        immediate: true,
      },
    );

    return {
      ns,
      content,
      type,
      template,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
        ]}
      >
        {this.content && (
          <iBizRawItem
            class={this.ns.b('content')}
            content={this.content}
            type={this.type}
          ></iBizRawItem>
        )}
      </div>
    );
  },
});
