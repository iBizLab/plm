# 空间分类(space_category_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [类别(CATEGORY)](module/Base/category) : [删除](module/Base/category#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [新建目录](module/Wiki/space#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [删除](module/Base/category#界面行为)

### 关联视图
  * [全部空间(space_category_grid_view)](app/view/space_category_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>