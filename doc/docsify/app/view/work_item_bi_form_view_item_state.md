# 工作项(work_item_bi_form_view_item_state)  <!-- {docsify-ignore-all} -->


该视图不使用，只是为了使代码表在表单中能够正常使用



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [BI报表_工作项状态默认值](module/ProjMgmt/work_item/uilogic/bi_form_state_default)
#### 工具栏(toolbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [编辑界面_保存并退出操作](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [BI报表_工作项状态默认值](module/ProjMgmt/work_item/uilogic/bi_form_state_default)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>