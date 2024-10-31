# 新建(work_item_mob_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [编辑界面_保存并退出操作](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [项目成员(project_member_mob_attention_mpickup_view)](app/view/project_member_mob_attention_mpickup_view)
  * [项目成员(project_member_mob_pickup_view)](app/view/project_member_mob_pickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>