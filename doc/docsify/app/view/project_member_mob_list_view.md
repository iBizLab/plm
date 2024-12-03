# 项目成员(project_member_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member) : [添加成员（移动端）](module/ProjMgmt/project_member#界面行为)

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