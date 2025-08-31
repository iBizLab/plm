# 工作项(work_item_dyna_main_view)  <!-- {docsify-ignore-all} -->


工作项主视图（动态）



## 控件
#### 编辑表单(_form_hybrid_bug)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_epic)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_feature)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_issue)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_milestone)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_requirement)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_stage)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_story)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_hybrid_task)

##### 部件逻辑
* `onChange`
```
console.log('执行人发生变化!', ctrl)
var assignee_id = ctrl.details.assignee_id;
var assignee_name = ctrl.details.assignee_name;
var estimated_workload = ctrl.details.estimated_workload;
var executors = ctrl.state.data.executors;
var total_estimated_workload = 0;
if(executors != null && executors != undefined && executors.length > 0){
    var first_executor = executors[0];
    console.log('执行人1', first_executor)
    if(first_executor.user_id != null){
        assignee_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        assignee_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        console.log('执行人', executors[i]);
        var executor_estimated_workload = executors[i].estimated_workload;
        
        console.log('执行人工时b', Number(executor_estimated_workload));
        if(executor_estimated_workload != null && executor_estimated_workload != undefined){
            total_estimated_workload =  total_estimated_workload + Number(executor_estimated_workload);
        }
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否负责人按钮，进行设置。只会有一个
            assignee_id.setDataValue(executors[i].user_id)
            assignee_name.setDataValue(executors[i].user_name)
        }
    }
    console.log('合计工时', total_estimated_workload);
    estimated_workload.setDataValue(total_estimated_workload)
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
#### 编辑表单(_form_kanban_bug)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_kanban_epic)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_kanban_feature)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_kanban_issue)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_kanban_story)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_kanban_task)

##### 部件逻辑
* `onChange`
```
console.log('执行人发生变化!', ctrl)
var assignee_id = ctrl.details.assignee_id;
var assignee_name = ctrl.details.assignee_name;
var estimated_workload = ctrl.details.estimated_workload;
var executors = ctrl.state.data.executors;
var total_estimated_workload = 0;
if(executors != null && executors != undefined && executors.length > 0){
    var first_executor = executors[0];
    console.log('执行人1', first_executor)
    if(first_executor.user_id != null){
        assignee_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        assignee_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        console.log('执行人', executors[i]);
        var executor_estimated_workload = executors[i].estimated_workload;
        
        console.log('执行人工时b', Number(executor_estimated_workload));
        if(executor_estimated_workload != null && executor_estimated_workload != undefined){
            total_estimated_workload =  total_estimated_workload + Number(executor_estimated_workload);
        }
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否负责人按钮，进行设置。只会有一个
            assignee_id.setDataValue(executors[i].user_id)
            assignee_name.setDataValue(executors[i].user_name)
        }
    }
    console.log('合计工时', total_estimated_workload);
    estimated_workload.setDataValue(total_estimated_workload)
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
#### 编辑表单(_form_scrum_bug)

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
#### 编辑表单(_form_scrum_epic)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
* `onChange`
```
console.log('执行人发生变化!', ctrl)
var assignee_id = ctrl.details.assignee_id;
var assignee_name = ctrl.details.assignee_name;
var estimated_workload = ctrl.details.estimated_workload;
var executors = ctrl.state.data.executors;
var total_estimated_workload = 0;
if(executors != null && executors != undefined && executors.length > 0){
    var first_executor = executors[0];
    console.log('执行人1', first_executor)
    if(first_executor.user_id != null){
        assignee_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        assignee_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        console.log('执行人', executors[i]);
        var executor_estimated_workload = executors[i].estimated_workload;
        
        console.log('执行人工时b', Number(executor_estimated_workload));
        if(executor_estimated_workload != null && executor_estimated_workload != undefined){
            total_estimated_workload =  total_estimated_workload + Number(executor_estimated_workload);
        }
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否负责人按钮，进行设置。只会有一个
            assignee_id.setDataValue(executors[i].user_id)
            assignee_name.setDataValue(executors[i].user_name)
        }
    }
    console.log('合计工时', total_estimated_workload);
    estimated_workload.setDataValue(total_estimated_workload)
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
#### 编辑表单(_form_waterfall_bug)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_waterfall_milestone)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_waterfall_requirement)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_waterfall_stage)

##### 部件逻辑

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
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
#### 编辑表单(_form_waterfall_task)

##### 部件逻辑
* `onChange`
```
console.log('执行人发生变化!', ctrl)
var assignee_id = ctrl.details.assignee_id;
var assignee_name = ctrl.details.assignee_name;
var estimated_workload = ctrl.details.estimated_workload;
var executors = ctrl.state.data.executors;
var total_estimated_workload = 0;
if(executors != null && executors != undefined && executors.length > 0){
    var first_executor = executors[0];
    console.log('执行人1', first_executor)
    if(first_executor.user_id != null){
        assignee_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        assignee_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        console.log('执行人', executors[i]);
        var executor_estimated_workload = executors[i].estimated_workload;
        
        console.log('执行人工时b', Number(executor_estimated_workload));
        if(executor_estimated_workload != null && executor_estimated_workload != undefined){
            total_estimated_workload =  total_estimated_workload + Number(executor_estimated_workload);
        }
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否负责人按钮，进行设置。只会有一个
            assignee_id.setDataValue(executors[i].user_id)
            assignee_name.setDataValue(executors[i].user_name)
        }
    }
    console.log('合计工时', total_estimated_workload);
    estimated_workload.setDataValue(total_estimated_workload)
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
* `onLoadSuccess` : [获取工作项工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)

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
#### 工具栏(toolbar)

## 视图界面逻辑
* `onViewMounted`
```javascript
console.log("控制评论框显隐");
const form = view.getController('form');
if (form) {
    form.evt.on('onFormDetailEvent', event =>{
        const panelItems = view.layoutPanel.panelItems;
        if (!panelItems.container_comment) {
            return;
        }
        if (form.details.tabpanel1) {
            const activeTab = form.details.tabpanel1.state.activeTab;
            panelItems.container_comment.state.visible = activeTab === 'tabpage1';
        }
    });
}
```
  * [已归档或已删除工作项显示隐藏](module/ProjMgmt/work_item/uilogic/archived_or_deleted_visible)
  * [显示表单侧边栏](module/ProjMgmt/work_item/uilogic/show_form_sidebar)
  * [获取工作项工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [工具栏上传附件](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联工单（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联需求（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联工作项（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开项目主视图](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [移动（表单中）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [删除（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联测试用例（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [最小化](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [编辑界面_上一个记录](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [复制工作项](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [编辑界面_下一个记录](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [添加实际工时](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [发送评论](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [清空评论](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [激活（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [归档(工具栏)](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [获取工作项工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)

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
  * [复制工作项(work_item_copy_view)](app/view/work_item_copy_view)
  * [移动工作项(work_item_move_view)](app/view/work_item_move_view)
  * [工时(workload_list_view)](app/view/workload_list_view)
  * [登记工时(workload_quick_create_view)](app/view/workload_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>