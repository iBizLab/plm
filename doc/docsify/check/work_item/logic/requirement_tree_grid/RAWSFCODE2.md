<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
logic.param('list_searchconds').bind(_default.getSearchConds())
```
