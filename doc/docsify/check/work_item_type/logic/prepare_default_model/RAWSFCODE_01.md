<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default_create_form = logic.param('default_create_form').getReal()
def _default_main_form = logic.param('default_main_form').getReal()
def _default =  logic.param('default').getReal()
def project_type=_default.project_type

_default_create_form.id="ProjMgmt.work_item.new_"+project_type+"_task"
_default_main_form.id="ProjMgmt.work_item."+project_type+"_task"
```
