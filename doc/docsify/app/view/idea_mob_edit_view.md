# 需求(idea_mob_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取工单数量](module/ProdMgmt/idea/uilogic/get_ticket_num)
* `onLoadSuccess` : [获取客户分数](module/ProdMgmt/idea/uilogic/get_customer_score)
* `onLoadSuccess` : [获取需求工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求归档（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [打开评论列表](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [打开需求关注列表（移动端）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [删除（工具栏）](module/ProdMgmt/idea#界面行为)

### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取工单数量](module/ProdMgmt/idea/uilogic/get_ticket_num)
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取客户分数](module/ProdMgmt/idea/uilogic/get_customer_score)
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取需求工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)

### 关联视图
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [需求关注(attention_mob_idea_md_view)](app/view/attention_mob_idea_md_view)
  * [评论(comment_mob_comment_md_view)](app/view/comment_mob_comment_md_view)
  * [人员选择(product_member_mob_product_member_selected)](app/view/product_member_mob_product_member_selected)
  * [关联(relation_mob_idea_re_customer_md_view)](app/view/relation_mob_idea_re_customer_md_view)
  * [关联(relation_mob_idea_re_self_md_view)](app/view/relation_mob_idea_re_self_md_view)
  * [关联(relation_mob_idea_re_ticket_md_view)](app/view/relation_mob_idea_re_ticket_md_view)
  * [关联(relation_mob_idea_re_work_item_md_view)](app/view/relation_mob_idea_re_work_item_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>