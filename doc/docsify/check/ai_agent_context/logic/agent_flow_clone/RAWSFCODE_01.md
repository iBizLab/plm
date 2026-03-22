<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _clone_ag_context1 = logic.param('clone_ag_context1').getReal();
def choose_logic_id=_clone_ag_context1.code_name+ "@ai.AI_AGENT_CONTEXT.agent_flow_templ"
def _original_delogic = logic.param('original_delogic').getReal()
_original_delogic.id=choose_logic_id
println("选择的choose_logic_id："+choose_logic_id);
```
