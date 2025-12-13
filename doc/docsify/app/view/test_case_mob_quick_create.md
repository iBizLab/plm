# 新建用例(test_case_mob_quick_create)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取用例工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)

##### 属性注入
* `状态` 注入属性 `clearable`

```javascript
false
```


### 关联界面逻辑
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [获取用例工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)

### 关联视图
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [测试库成员(library_member_mob_pickup_view)](app/view/library_member_mob_pickup_view)
  * [关联(relation_mob_test_case_re_bug_view)](app/view/relation_mob_test_case_re_bug_view)
  * [关联(relation_mob_test_case_re_idea_view)](app/view/relation_mob_test_case_re_idea_view)
  * [关联(relation_mob_test_case_re_item_view)](app/view/relation_mob_test_case_re_item_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>