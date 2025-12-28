<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def for_temp_obj = logic.param('for_temp_obj').getReal()

def list = []
list = for_temp_obj.get('executors')

if (list.size != 0) {
    list[0].set('is_assignee', 1)
    _default.set('executor_name', list[0].get('user_name'))
    _default.set('executor_id', list[0].get('user_id'))
}
```
