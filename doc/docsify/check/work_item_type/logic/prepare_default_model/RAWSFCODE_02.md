<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default_main_form = logic.param('default_main_form').getReal();
def _default =  logic.param('default').getReal(); 
def code_name=_default.id

_default_main_form.id="ProjMgmt.work_item."+code_name
_default_main_form.psdeid="ProjMgmt.work_item"
_default_main_form.name=_default.name
_default_main_form.codename=code_name
_default_main_form.datatype=code_name
```
