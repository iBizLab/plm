# 关联(relation_mob_ticket_re_self_md_view)  <!-- {docsify-ignore-all} -->



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
  * [关联(RELATION)](module/Base/relation) : [关联工单（移动端）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [产品移动端新建工单（新建后关联）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [新建执行后（建立双向关联数据)](module/Base/relation#界面行为)

### 关联视图
  * [工单(ticket_mob_edit_view)](app/view/ticket_mob_edit_view)
  * [选择工单(ticket_mob_mpick_up_view)](app/view/ticket_mob_mpick_up_view)
  * [新建工单(ticket_mob_ticket_create_option_view)](app/view/ticket_mob_ticket_create_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>