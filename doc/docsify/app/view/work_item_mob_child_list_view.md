# 工作项(work_item_mob_child_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * [获取关联列表总条数](module/Base/relation/uilogic/get_list_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建并添加子工作项（移动端）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [添加子工作项（移动端）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [刷新子工作项列表（移动端）](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [选择子工作项(work_item_mob_child_mpick_up_view)](app/view/work_item_mob_child_mpick_up_view)
  * [工作项(work_item_mob_common_edit_view)](app/view/work_item_mob_common_edit_view)
  * [新建工作项(work_item_mob_create_option_view)](app/view/work_item_mob_create_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>