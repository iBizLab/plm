<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def sprint_page_result = logic.param('sprint_page_result').getReal()
sprint_page_result.each { sprint ->
    def all_work_items = sprint.get('all_work_items')
    def completed_work_items = sprint.get('completed_work_items')
    def schedule = 0
    if (all_work_items != 0 && completed_work_items != 0) {
        schedule = Math.round(completed_work_items / all_work_items * 100)
    }
    sprint.set('schedule', schedule)
    sprint.set('schedule_text', "${schedule}%")
}

```
