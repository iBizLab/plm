# 工作项(work_item_idea_re_work_item_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.layoutPanel.panelItems.choose_data.state.visible = view.context.srfshowchoose || false;

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
view.layoutPanel.panelItems.button_calluilogic1.state.visible = false
view.layoutPanel.panelItems.button_calluilogic.state.visible = false
```
  * [获取需求总条数](module/ProdMgmt/idea/uilogic/get_idea_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [添加控件显示](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [取消关联](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [需求关联工作项](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)

### 关联视图
  * [工作项(work_item_edit_view)](app/view/work_item_edit_view)
  * [工作项(work_item_main_view)](app/view/work_item_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>