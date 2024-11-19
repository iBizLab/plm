# 发布模块(release_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [新建类别](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [新建分组](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [树界面_刷新全部操作](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)

### 关联视图
  * [全部发布(release_all_grid_view)](app/view/release_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>