<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def _delogic = logic.param('delogic').getReal()
_delogic.id=_default.code_name+ "@ai.AI_AGENT_CONTEXT.agent_flow_templ"

```
