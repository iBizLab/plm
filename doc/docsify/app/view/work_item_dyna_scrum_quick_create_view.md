# 工作项(work_item_dyna_scrum_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### 编辑表单(_form_scrum_bug)

##### 部件逻辑
* `onLoadSuccess` : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_scrum_epic)

##### 部件逻辑
* `onLoadSuccess` : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_scrum_feature)

##### 部件逻辑
* `onLoadSuccess` : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_scrum_story)

##### 部件逻辑
* `onLoadSuccess` : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_scrum_task)

##### 部件逻辑
* `onLoadSuccess` : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)
* `onChange`
```
// console.log('执行人发生变化!', ctrl)
var assignee_id = ctrl.details.assignee_id;
var assignee_name = ctrl.details.assignee_name;
var estimated_workload = ctrl.details.estimated_workload;
var remaining_workload = ctrl.details.remaining_workload;
var executors = ctrl.details.executors.value;
var total_estimated_workload = 0;
if(executors != null && executors != undefined && executors.length > 0){
    // 默认取第一个执行人作为负责人
    var first_executor = executors[0];
    if(first_executor.user_id != null){
        assignee_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        assignee_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        var executor_estimated_workload = executors[i].estimated_workload;
        if(executor_estimated_workload != null && executor_estimated_workload != undefined){
            total_estimated_workload =  total_estimated_workload + Number(executor_estimated_workload)
        }
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否负责人按钮，进行设置。只会有一个
            assignee_id.setDataValue(executors[i].user_id)
            assignee_name.setDataValue(executors[i].user_name)
        }
    }
    estimated_workload.setDataValue(total_estimated_workload)
    remaining_workload.setDataValue(total_estimated_workload)
} else {
    assignee_id.setDataValue(null)
    assignee_name.setDataValue(null)
    estimated_workload.setDataValue(null)
}

```

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onChange` : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)
* `onChange`
```
console.log('执行人发生变化!', ctrl)
var assignee_id = ctrl.details.assignee_id;
var assignee_name = ctrl.details.assignee_name;
var estimated_workload = ctrl.details.estimated_workload;
var remaining_workload = ctrl.details.remaining_workload;
var executors = ctrl.details.executors.value;
var total_estimated_workload = 0;
if(executors != null && executors != undefined && executors.length > 0){
    // 默认取第一个执行人作为负责人
    var first_executor = executors[0];
    if(first_executor.user_id != null){
        assignee_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        assignee_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        var executor_estimated_workload = executors[i].estimated_workload;
        if(executor_estimated_workload != null && executor_estimated_workload != undefined){
            total_estimated_workload =  total_estimated_workload + Number(executor_estimated_workload)
        }
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否负责人按钮，进行设置。只会有一个
            assignee_id.setDataValue(executors[i].user_id)
            assignee_name.setDataValue(executors[i].user_name)
        }
    }
    estimated_workload.setDataValue(total_estimated_workload)
    remaining_workload.setDataValue(total_estimated_workload)
} else {
    assignee_id.setDataValue(null)
    assignee_name.setDataValue(null)
    estimated_workload.setDataValue(null)
}

```

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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

## 视图界面逻辑
  * [设置默认关注人](module/ProjMgmt/work_item/uilogic/set_default_attention)
* `onCreated`
```javascript
ctrl.evt.on('onFormDataChange', evt => {
  const { name } = evt;
  const data = ctrl.state.data;
  if (['project_id', 'work_item_type_id'].includes(name) && data.work_item_type_id) {
	view.redrawView({
	  context: { project: data.project_id, dynamicnew: true },
	  params: { srfdatatype: data.work_item_type_id, work_item_type_id: data.work_item_type_id },
	  isReloadModel: true,
	});
  }
});
```


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [视图_确定](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [视图_取消](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

### 关联视图
  * [看板(board_pick_up_view)](app/view/board_pick_up_view)
  * [选择工作项(work_item_change_parent_pick_up_view)](app/view/work_item_change_parent_pick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>