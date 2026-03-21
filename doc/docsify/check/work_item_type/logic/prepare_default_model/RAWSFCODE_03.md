<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default_create_form = logic.param('default_create_form').getReal();
def _default =  logic.param('default').getReal(); 
def code_name=_default.id

_default_create_form.id="ProjMgmt.work_item.new_"+code_name
_default_create_form.psdeid="ProjMgmt.work_item"
_default_create_form.name="新建"+_default.name
_default_create_form.codename="new_"+code_name
_default_create_form.datatype=code_name


```
