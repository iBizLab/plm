# 缺陷(work_item_bug_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
* `负责人` 注入属性 `teleported`

```javascript
false
```

* `状态` 注入属性 `clearable`

```javascript
false
```

* `开始时间` 注入属性 `disabledDate`

```javascript
(time) => {
    if (!data.end_at) {
        return false;
    }
    const end_at = new Date(data.end_at);
    // 比对天
    time.setHours(0, 0, 0, 0);
    end_at.setHours(0, 0, 0, 0);
    return time.getTime() > end_at.getTime();
}
```

* `开始时间` 注入属性 `teleported`

```javascript
false
```

* `结束时间` 注入属性 `disabledDate`

```javascript
(time) => {
    if (!data.start_at) {
        return false;
    }
    const start_at = new Date(data.start_at);
    // 比对天
    start_at.setHours(0, 0, 0, 0);
    time.setHours(0, 0, 0, 0);
    return time.getTime() < start_at.getTime();
}
```

* `结束时间` 注入属性 `teleported`

```javascript
false
```


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开项目主视图](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [基线工作项(baseline_work_item_realtion_version_list_view)](app/view/baseline_work_item_realtion_version_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [交付物(deliverable_target_grid_view)](app/view/deliverable_target_grid_view)
  * [关联(relation_depend_on_list_view)](app/view/relation_depend_on_list_view)
  * [关联(relation_work_item_re_idea_grid_view)](app/view/relation_work_item_re_idea_grid_view)
  * [关联(relation_work_item_re_self_grid_view)](app/view/relation_work_item_re_self_grid_view)
  * [关联(relation_work_item_re_test_case_grid_view)](app/view/relation_work_item_re_test_case_grid_view)
  * [关联(relation_work_item_re_ticket_grid_view)](app/view/relation_work_item_re_ticket_grid_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)
  * [版本(version_work_item_grid_view)](app/view/version_work_item_grid_view)
  * [工作项(work_item_child_grid_view)](app/view/work_item_child_grid_view)
  * [工时(workload_list_view)](app/view/workload_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>