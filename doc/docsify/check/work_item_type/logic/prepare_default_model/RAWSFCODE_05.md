<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def default_ms_logic = logic.param('default_ms_logic').getReal();
def _default =  logic.param('default').getReal(); 
def code_name=_default.id

default_ms_logic.id="ProjMgmt.work_item."+code_name
default_ms_logic.psdeid="ProjMgmt.work_item"
default_ms_logic.name=_default.name
default_ms_logic.codename=code_name
default_ms_logic.logictag=code_name
```
