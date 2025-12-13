# 关联(relation_depend_on_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [依赖列表视图加载完成](module/Base/relation/uilogic/dependency_load_success)
* `onMounted`
```javascript
view.layoutPanel.panelItems.choose_data.state.visible = false;
// 依赖类型 设置默认值
view.layoutPanel.panelItems.choose_type.setDataValue('front');
// 初始化默认隐藏列表
view.layoutPanel.panelItems.list.state.keepAlive = true;
view.layoutPanel.panelItems.list.state.visible = false;
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [关联(RELATION)](module/Base/relation) : [添加依赖关系](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [取消依赖](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [依赖类型变更](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [添加关联](module/Base/relation#界面行为)

### 关联界面逻辑
  * [关联(RELATION)](module/Base/relation) : [打开依赖工作项](module/Base/relation/uilogic/open_dependency)
  * [关联(RELATION)](module/Base/relation) : [依赖类型值变更](module/Base/relation/uilogic/dependency_onchange)

### 关联视图
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