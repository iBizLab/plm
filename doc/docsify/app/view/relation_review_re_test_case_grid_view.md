# 关联(relation_review_re_test_case_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [取消关联行为是否启用](module/Base/relation/uilogic/del_relation_disabled)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [关联(RELATION)](module/Base/relation) : [取消关联](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [添加关联](module/Base/relation#界面行为)

### 关联界面逻辑
  * [关联(RELATION)](module/Base/relation) : [取消关联行为是否启用](module/Base/relation/uilogic/del_relation_disabled)

### 关联视图
  * [关联(relation_edit_view)](app/view/relation_edit_view)
  * [关联(relation_redirect_view)](app/view/relation_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>