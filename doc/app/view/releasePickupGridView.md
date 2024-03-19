# 项目发布(releasePickupGridView)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)
  * 搜索栏(searchbar)
  * 数据表格(grid)


### 关联界面行为
  * [项目发布(RELEASE)](module/ProjMgmt/Release) : [删除](module/ProjMgmt/Release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/Release) : [编辑](module/ProjMgmt/Release#界面行为)

### 关联视图
  * [编辑发布(releaseupdate_view)](app/view/releaseupdate_view)

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