<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_obj = logic.param('for_obj').getReal()
// 工作项类型统计
def work_item_type = for_obj.get('work_item_type_id')
// scrum_story scrum_task scrum_bug 用户故事/任务/缺陷 使用rep_value统计字段
for_obj.set('rep_value1', 0)
for_obj.set('rep_value2', 0)
for_obj.set('rep_value3', 0)
if(work_item_type == 'scrum_story'){
    for_obj.set('rep_value1', 1)
}
if(work_item_type == 'scrum_task'){
    for_obj.set('rep_value2', 1)
}
if(work_item_type == 'scrum_bug'){
    for_obj.set('rep_value3', 1)
}
// 工作项工时统计
if(for_obj.get('estimated_workload') == null ){
    for_obj.set('estimated_workload', 0)
}
if(for_obj.get('actual_workload') == null ){
    for_obj.set('actual_workload', 0)
}
// 统计结果列表变量
def result_list = logic.param('result_list').getReal()
def assignee_id = for_obj.get('assignee_id')
if(assignee_id != null){
    def exists = result_list.any { it.assignee_id == assignee_id }
    if(exists){
        result_list.each { item ->
            if(item.get('assignee_id') == assignee_id){
                item.set('rep_num', item.get('rep_num') + for_obj.get('rep_num'))
                item.set('estimated_workload', item.get('estimated_workload') + for_obj.get('estimated_workload'))
                item.set('actual_workload', item.get('actual_workload') + for_obj.get('actual_workload'))
                item.set('rep_value1', item.get('rep_value1') + for_obj.get('rep_value1'))
                item.set('rep_value2', item.get('rep_value2') + for_obj.get('rep_value2'))
                item.set('rep_value3', item.get('rep_value3') + for_obj.get('rep_value3'))
            }
        }
    } else {
        result_list.add(for_obj)
    }
}
```
