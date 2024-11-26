# 交付物(deliverable_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [编辑](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [提交](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [删除](module/Base/deliverable#界面行为)

### 关联视图
  * [交付物(deliverable_edit_view)](app/view/deliverable_edit_view)
  * [编辑交付目标(deliverable_target_edit_view)](app/view/deliverable_target_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>