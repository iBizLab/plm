# 需求关注(attention_mob_idea_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [关注(ATTENTION)](module/Base/attention) : [添加需求关注（移动端）](module/Base/attention#界面行为)
  * [关注(ATTENTION)](module/Base/attention) : [取消关注](module/Base/attention#界面行为)

### 关联视图
  * [人员选择(product_member_mob_more_mem_selected)](app/view/product_member_mob_more_mem_selected)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>