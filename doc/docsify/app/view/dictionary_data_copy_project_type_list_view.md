# 项目类型字典(dictionary_data_copy_project_type_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onLoadSuccess`
```javascript
let list = view.layoutPanel.panelItems.list.control.state.items;
let select_list = view.layoutPanel.panelItems.list.control.state.selectedData;

return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.project');
    const data_list = service.local.getList();
    // 遍历临时数据
    data_list.forEach(item => {
      list.forEach(it => {
        if (it.id == item.type) {
          view.layoutPanel.panelItems.list.control.state.selectedData.push(it);
          view.evt.emit('onSelectionChange', { data });
        }
      });
    })
    } 
)();
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