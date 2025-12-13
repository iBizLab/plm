<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def release_page_result = logic.param('release_page_result').getReal()
release_page_result.each { release ->
    def all_work_items = release.get('all_work_items')
    def completed_work_items = release.get('completed_work_items')
    def schedule = 0
    if (all_work_items != 0 && completed_work_items != 0) {
        schedule = Math.round(completed_work_items / all_work_items * 100)
    }
    release.set('schedule', schedule)
    release.set('schedule_text', schedule + "%")
}

```
