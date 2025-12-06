<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def idea = logic.param('idea').getReal()
def remaining = logic.param('remaining').getReal()

def remaining_workload = (idea.get('estimated_workload') ?: 0) + _default.get('duration') - (idea.get('actual_workload') ?: 0)
remaining_workload = (remaining_workload < 0) ? 0 : remaining_workload
remaining.set('decimal_value', remaining_workload)
```
