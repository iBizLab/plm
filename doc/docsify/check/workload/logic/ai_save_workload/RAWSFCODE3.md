<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def test_case = logic.param('test_case').getReal()
def remaining = logic.param('remaining').getReal()

def remaining_workload = (test_case.get('estimated_workload') ?: 0) + _default.get('duration') - (test_case.get('actual_workload') ?: 0)
remaining_workload = (remaining_workload < 0) ? 0 : remaining_workload
remaining.set('decimal_value', remaining_workload)
```
