<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _original_delogic = logic.param('original_delogic').getReal();
def _default = logic.param('Default').getReal()
_original_delogic.id=_default.code_name+ "@ai.AI_AGENT_CONTEXT.agent_flow_templ"
_original_delogic.psdeid=_default.code_name+ "@ai.AI_AGENT_CONTEXT"
_original_delogic.psdelogicname=_default.name

```
