<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()

def list = []
if (_default.get('executors') != null) {
    _default.set('executor_name', null)
    _default.set('executor_id', null)
    list = _default.get('executors')
    if (list.size != 0) {
        if (list[0].get('is_assignee') == null) {
            list[0].set('is_assignee', 1)
            _default.set('executor_name', list[0].get('user_name'))
            _default.set('executor_id', list[0].get('user_id'))
        }
    }
}
```
