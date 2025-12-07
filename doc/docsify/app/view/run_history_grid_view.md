# 执行用例(run_history_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

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


### 关联视图
  * [执行用例(run_main_view)](app/view/run_main_view)
  * [执行用例(run_redirect_view)](app/view/run_redirect_view)
  * [选择用例(test_case_mpick_up_view2_review)](app/view/test_case_mpick_up_view2_review)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>