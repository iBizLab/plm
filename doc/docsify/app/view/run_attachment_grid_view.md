# 执行用例结果附件(run_attachment_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
// 初始化默认隐藏表格
view.layoutPanel.panelItems.grid.state.keepAlive = true;
view.layoutPanel.panelItems.grid.state.visible = false;


```
  * [获取结果附件总条数](module/TestMgmt/run_attachment/uilogic/get_run_attachment_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment) : [添加附件](module/TestMgmt/run_attachment#界面行为)
  * [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment) : [删除](module/TestMgmt/run_attachment#界面行为)
  * [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment) : [附件下载](module/TestMgmt/run_attachment#界面行为)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>