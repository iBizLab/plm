# 职位(position_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [类别(CATEGORY)](module/Base/category) : [删除](module/Base/category#界面行为)
  * [职位(POSITION)](module/Base/position) : [新建分组](module/Base/position#界面行为)
  * [职位(POSITION)](module/Base/position) : [新建职位](module/Base/position#界面行为)
  * [职位(POSITION)](module/Base/position) : [删除](module/Base/position#界面行为)
  * [职位(POSITION)](module/Base/position) : [删除](module/Base/position#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [编辑](module/Base/category#界面行为)
  * [职位(POSITION)](module/Base/position) : [编辑](module/Base/position#界面行为)
  * [职位(POSITION)](module/Base/position) : [树界面_刷新全部操作](module/Base/position#界面行为)
  * [职位(POSITION)](module/Base/position) : [编辑](module/Base/position#界面行为)

### 关联视图
  * [成员管理(user_grid_view)](app/view/user_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>