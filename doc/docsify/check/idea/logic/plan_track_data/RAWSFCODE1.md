<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def base_filter = logic.param('base_filter').getReal()
String principal_id = _default.get("principal_id")
base_filter.set("principal_id", "'" + principal_id + "'")
base_filter.all()
```
