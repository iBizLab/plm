# 仪表盘模板列表(dyna_dashboard_list_exp_view2)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 列表视图导航栏(listexpbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [列表导航加载完成](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [使用此模板](module/Base/dyna_dashboard#界面行为)

### 关联界面逻辑
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [获取选中模板名称](module/Base/dyna_dashboard/uilogic/fill_choosed_board_name)

### 关联视图
  * [仪表盘(dyna_dashboard_show_edit_view)](app/view/dyna_dashboard_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>