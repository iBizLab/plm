# 关联(relation_idea_re_customer_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.layoutPanel.panelItems.choose_level.setDataValue('50');
```
  * [获取客户分数(初始化使用)](module/ProdMgmt/customer/uilogic/get_customer_score_2)
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
  * [获取表格总条数](module/ProdMgmt/idea/uilogic/get_grid_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [关联(RELATION)](module/Base/relation) : [添加关联](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [取消关联](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [查看客户统计信息](module/Base/relation#界面行为)

### 关联界面逻辑
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [需求关联客户](module/ProdMgmt/customer/uilogic/idea_relation_customer)
  * [关联(RELATION)](module/Base/relation) : [触发计数器刷新及表格刷新](module/Base/relation/uilogic/refresh_counter)

### 关联视图
  * [客户(customer_main_view)](app/view/customer_main_view)
  * [关联(relation_edit_view)](app/view/relation_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>