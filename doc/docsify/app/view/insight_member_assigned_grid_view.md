# 视图成员(insight_member_assigned_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [新建视图默认临时成员](module/Insight/insight_member/uilogic/create_default_temp_members)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能成员(INSIGHT_MEMBER)](module/Insight/insight_member) : [表格界面_新建操作](module/Insight/insight_member#界面行为)
  * [效能成员(INSIGHT_MEMBER)](module/Insight/insight_member) : [移除成员](module/Insight/insight_member#界面行为)

### 关联界面逻辑
  * [效能成员(INSIGHT_MEMBER)](module/Insight/insight_member) : [新建视图默认临时成员](module/Insight/insight_member/uilogic/create_default_temp_members)

### 关联视图
  * [效能成员(insight_member_edit_view)](app/view/insight_member_edit_view)
  * [效能成员(insight_member_redirect_view)](app/view/insight_member_redirect_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>