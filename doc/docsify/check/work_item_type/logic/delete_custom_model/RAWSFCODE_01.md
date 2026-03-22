<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def _new_deform = logic.param('new_deform').getReal()
def _main_deform = logic.param('main_deform').getReal()
def _default_ms_logic = logic.param('default_ms_logic').getReal()

_new_deform.id="ProjMgmt.work_item."+_default.id
_main_deform.id="ProjMgmt.work_item.new_"+_default.id
_default_ms_logic.id="ProjMgmt.work_item."+_default.id

```
