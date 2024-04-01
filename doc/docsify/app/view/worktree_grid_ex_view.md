# 工作(worktree_grid_ex_view)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)
  * 搜索栏(searchbar)
  * 树表格（增强）(treegridex)


### 关联界面行为
  * [工作(WORK)](module/Base/Work) : [选择项目](module/Base/Work#界面行为)
  * [工作(WORK)](module/Base/Work) : [选择项目集](module/Base/Work#界面行为)

### 关联视图
  * [工作(workEditView)](app/view/workEditView)
  * [项目(projectMPickupView)](app/view/projectMPickupView)
  * [工作(workRedirectView)](app/view/workRedirectView)
  * [文件夹(portfolioMPickupView)](app/view/portfolioMPickupView)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>