# 工单(ticket_edit_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 属性注入
* `状态` 注入属性 `clearable`

```javascript
false
```
#### 工具栏(toolbar)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [编辑界面_保存并退出操作](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [客户沟通(comment_customer_connect_list_view)](app/view/comment_customer_connect_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [客户(customer_pick_up_view)](app/view/customer_pick_up_view)
  * [关联(relation_ticket_re_idea_grid_view)](app/view/relation_ticket_re_idea_grid_view)
  * [关联(relation_ticket_re_self_grid_view)](app/view/relation_ticket_re_self_grid_view)
  * [关联(relation_ticket_re_work_item_grid_view)](app/view/relation_ticket_re_work_item_grid_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>