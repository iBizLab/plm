# 版本(version_work_item_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态（version）](module/Base/version/uilogic/calc_column_button_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
console.log("VIEWMOUNTED");
const choose_data = view.layoutPanel.panelItems.choose_data;
if(choose_data){
  	choose_data.state.visible = view.context.srfshowchoose || false;
}
// 初始化默认隐藏表格
view.layoutPanel.panelItems.grid.state.keepAlive = true;
view.layoutPanel.panelItems.grid.state.visible = false;
const form = view.getController('form');
if (form) {
    form.evt.on('onFormDetailEvent', event =>{
        const panelItems = view.layoutPanel.panelItems;
        if (!panelItems.comment) {
            return;
        }
        if (event.formDetailName === 'tabpage1') {
            panelItems.comment.state.visible = true;
        } else {
            panelItems.comment.state.visible = false;
        }
    });
}
// 初始化隐藏发送和清空按钮
const  button_calluilogic1 = view.layoutPanel.panelItems.button_calluilogic1;
if(button_calluilogic1){
  button_calluilogic1.state.visible = false;
}
const button_calluilogic = view.layoutPanel.panelItems.button_calluilogic;
if(button_calluilogic){
  button_calluilogic.state.visible = false;
}
```
  * [获取表格总条数](module/ProdMgmt/idea/uilogic/get_grid_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [版本(VERSION)](module/Base/version) : [工作项版本对比](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [建立版本](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [编辑版本](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [恢复版本](module/Base/version#界面行为)

### 关联界面逻辑
  * [版本(VERSION)](module/Base/version) : [计算表格列行为状态（version）](module/Base/version/uilogic/calc_column_button_state)

### 关联视图
  * [编辑版本(version_edit_version_view)](app/view/version_edit_version_view)
  * [版本(version_edit_view)](app/view/version_edit_view)
  * [建立版本(version_quick_create_view)](app/view/version_quick_create_view)
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)
  * [版本对比(work_item_version_comparison_view)](app/view/work_item_version_comparison_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>