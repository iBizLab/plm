# 新建项目(project_mob_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [设置默认项目成员（移动端）](module/ProjMgmt/project/uilogic/mob_set_default_project_member)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑界面_保存并退出操作](module/ProjMgmt/project#界面行为)

### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置默认项目成员（移动端）](module/ProjMgmt/project/uilogic/mob_set_default_project_member)

### 关联视图
  * [项目成员(project_member_mob_add_mpickup_view)](app/view/project_member_mob_add_mpickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>