# 编辑(run_mob_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)


### 关联界面行为
  * [执行用例(RUN)](module/TestMgmt/run) : [打开关注列表](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [移出（移动端）](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [重置为未测](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [打开评论列表](module/TestMgmt/run#界面行为)

### 关联界面逻辑
  * [执行用例(RUN)](module/TestMgmt/run) : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)

### 关联视图
  * [关注(attention_mob_md_view)](app/view/attention_mob_md_view)
  * [评论(comment_mob_comment_md_view)](app/view/comment_mob_comment_md_view)
  * [关联(relation_mob_run_re_bug_view)](app/view/relation_mob_run_re_bug_view)
  * [关联(relation_mob_run_re_idea_view)](app/view/relation_mob_run_re_idea_view)
  * [关联(relation_mob_run_re_item_view)](app/view/relation_mob_run_re_item_view)
  * [执行用例结果附件(run_attachment_mob_md_view)](app/view/run_attachment_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>