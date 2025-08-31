# 团队(group_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [团队(GROUP)](module/Base/group) : [树界面_刷新全部操作](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [新建团队](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [新建分组](module/Base/group#界面行为)

### 关联视图
  * [新建团队(group_quick_create_view)](app/view/group_quick_create_view)
  * [编辑团队(group_update_view)](app/view/group_update_view)
  * [成员(member_grid_view)](app/view/member_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>