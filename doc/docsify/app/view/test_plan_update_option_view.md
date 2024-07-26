# 编辑测试计划(test_plan_update_option_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
* `计划开始` 注入属性 `disabledDate`

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

* `计划结束` 注入属性 `disabledDate`

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


### 关联视图
  * [测试库(library_pick_up_view)](app/view/library_pick_up_view)
  * [选择项目(project_pick_up_view)](app/view/project_pick_up_view)
  * [项目发布(release_pick_up_view)](app/view/release_pick_up_view)
  * [迭代(sprint_pick_up_view)](app/view/sprint_pick_up_view)
  * [选择类别(test_plan_categories_pick_up_tree_view)](app/view/test_plan_categories_pick_up_tree_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>