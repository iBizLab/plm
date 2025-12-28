# 知识库文档导入方式字典(dictionary_data_import_method_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onSelectionChange`
```javascript
view.evt.emit('onSelectionChange', { data });
```
* `onLoadSuccess`
```javascript
let list = view.layoutPanel.panelItems.list.control.state.items;
let select_list = view.layoutPanel.panelItems.list.control.state.selectedData;

return (async function() {
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.ai_kb_document_wizard');
    const data_list = service.local.getList();
    // 遍历临时数据
    data_list.forEach(item => {
      if (item.import_method == undefined) {
        for (let i = 0; i < list.length; i++) {
          const it = list[i];
          if (it.id == 'space_manual' && select_list.length == 0) {
            view.layoutPanel.panelItems.list.control.state.selectedData.push(it);
            view.evt.emit('onSelectionChange', { data });
            break;
          }
        }
      } else {
        for (let j = 0; j < list.length; j++) {
          const it = list[j];
          if (it.id == item.import_method) {
            item.import_method = undefined;
            view.layoutPanel.panelItems.list.control.state.selectedData.push(it);
            view.evt.emit('onSelectionChange', { data });
            break;
          }
        }
      }
    })
})();  


```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [数据字典(dictionary_data_edit_view)](app/view/dictionary_data_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>