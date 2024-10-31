# 关联(relation_mob_idea_re_customer_md_view)  <!-- {docsify-ignore-all} -->



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
  * [关联(RELATION)](module/Base/relation) : [关联客户未知（移动端）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [关联客户重要（移动端）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [关联客户一般（移动端）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [关联客户不重要（移动端）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [关联客户非常重要（移动端）](module/Base/relation#界面行为)

### 关联视图
  * [选择客户(customer_mob_mpick_up_view)](app/view/customer_mob_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>