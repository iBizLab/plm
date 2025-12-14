<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def _extend_schedule = logic.param('extend_schedule').getReal()
def sync_frequency = _default.sync_frequency
def frequencyMap = [
    'daily': '0 0 * * *',
    'weekly': '0 0 * * 1', 
    'monthly': '0 0 1 * *'
]
_extend_schedule.timer_policy = frequencyMap[sync_frequency]
_extend_schedule.name="["+_default.name+"]空间执行计划"
```
