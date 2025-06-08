# 交付物(deliverable_target_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态](module/Base/deliverable/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.layoutPanel.panelItems.container1.state.visible = false;

// 初始化默认隐藏表格
view.layoutPanel.panelItems.grid.state.keepAlive = true;
view.layoutPanel.panelItems.grid.state.visible = false;


```
  * [获取交付目标总条数](module/Base/deliverable/uilogic/get_deliverable_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [取消](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [交付物下载](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [确定](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [添加控件显示](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [提交（表单中）](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [删除（表单中）](module/Base/deliverable#界面行为)

### 关联界面逻辑
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [新建交付目标](module/Base/deliverable/uilogic/create_deliverable)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [计算表格列行为状态](module/Base/deliverable/uilogic/calc_column_action_state)

### 关联视图
  * [交付物(deliverable_edit_view)](app/view/deliverable_edit_view)
  * [交付物(deliverable_redirect_view)](app/view/deliverable_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>