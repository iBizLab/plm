# 工单(ticket_mob_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [打开评论列表](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [打开工单关注列表（移动端）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单归档（工具栏）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单删除（工具栏）](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [工单关注(attention_mob_ticket_md_view)](app/view/attention_mob_ticket_md_view)
  * [评论(comment_mob_comment_md_view)](app/view/comment_mob_comment_md_view)
  * [人员选择(product_member_mob_product_member_selected)](app/view/product_member_mob_product_member_selected)
  * [关联(relation_mob_ticket_re_idea_md_view)](app/view/relation_mob_ticket_re_idea_md_view)
  * [关联(relation_mob_ticket_re_self_md_view)](app/view/relation_mob_ticket_re_self_md_view)
  * [关联(relation_mob_ticket_re_work_item_md_view)](app/view/relation_mob_ticket_re_work_item_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>