<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _tasks = logic.param('tasks').getReal(); 
def _default = logic.param('default').getReal(); 
def task = _tasks.first()
_default.started_at=task.started_at
_default.finished_at=task.finished_at
_default.result_message=task.result_message
def durationMillis = _default.finished_at.getTime() - _default.started_at.getTime()
_default.set("execution_time",String.format("%.2f", durationMillis/ 1000.0))
```
