<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _original_delogic = logic.param('original_delogic').getReal();
def _clone_ag_context2 = logic.param('clone_ag_context2').getReal()
_original_delogic.id=_clone_ag_context2.code_name+ "@ai.AI_AGENT_CONTEXT.agent_flow_templ"
_original_delogic.psdeid=_clone_ag_context2.code_name+ "@ai.AI_AGENT_CONTEXT";
_original_delogic.name=_clone_ag_context2.name;
println("最终_original_delogic："+_original_delogic);

```
