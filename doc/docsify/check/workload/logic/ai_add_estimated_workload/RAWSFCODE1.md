<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def work_item = logic.param('work_item').getReal()
def temp = logic.param('temp').getReal()
def workload_type_page = logic.param('workload_type_page').getReal()

def remaining_workload = (work_item.get('estimated_workload') ?: 0) + temp.get('duration') - (work_item.get('actual_workload') ?: 0)
remaining_workload = (remaining_workload < 0) ? 0 : remaining_workload
temp.set('remaining_workload', remaining_workload)

workload_type_page.each { i ->
    if (i.get('name') == temp.get('type_name')) {
        temp.set('type_id', i.get('id'))
    }
}
```
