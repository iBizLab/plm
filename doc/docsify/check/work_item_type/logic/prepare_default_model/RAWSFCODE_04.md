<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def default_ms_logic = logic.param('default_ms_logic').getReal()
def _default =  logic.param('default').getReal()
def project_type=_default.project_type

default_ms_logic.id="ProjMgmt.work_item."+project_type+"_task"
```
