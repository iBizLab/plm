# 迭代(sprintPickupGridView)  <!-- {docsify-ignore-all} -->

系统自动添加




## 控件
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 数据表格(grid)
  * 搜索表单(searchform)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [开始迭代](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [结束迭代](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [编辑](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [删除](module/ProjMgmt/Sprint#界面行为)

### 关联视图
  * [确认完成(sprintconfirm_finish_view)](app/view/sprintconfirm_finish_view)
  * [编辑迭代(sprintupdate_view)](app/view/sprintupdate_view)

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