# 版本(version_idea_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
// 初始化默认隐藏表格
view.layoutPanel.panelItems.grid.state.keepAlive = true;
view.layoutPanel.panelItems.grid.state.visible = false;
```
  * [获取版本总条数](module/Base/version/uilogic/get_version_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [版本(VERSION)](module/Base/version) : [编辑版本](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [需求版本对比](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [建立版本](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [恢复版本](module/Base/version#界面行为)

### 关联视图
  * [需求(idea_main_view)](app/view/idea_main_view)
  * [版本对比(idea_version_comparison_view)](app/view/idea_version_comparison_view)
  * [编辑版本(version_edit_version_view)](app/view/version_edit_version_view)
  * [版本(version_edit_view)](app/view/version_edit_view)
  * [建立版本(version_quick_create_view)](app/view/version_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>