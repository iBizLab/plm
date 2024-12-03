<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def first_stage = logic.param('first_stage').getReal()
def last_stage = logic.param('last_stage').getReal()
def current_stage = logic.param('current_stage').getReal()
def target_stage = logic.param('target_stage').getReal()
def stages = logic.param('stages').getReal()
def stage_transitions = logic.param('stage_transitions').getReal()

def current = _default.get('current_stage')
def target = _default.get('target_stage')
first_stage = stages.min { it.get('p_sequence') }
last_stage = stages.max { it.get('p_sequence') }
stages.each { it ->
    if(it.get('id') == current){
        it.set('current', 1)
        current_stage = it
    }
    if(it.get('id') == target){
        it.set('target', 1)
        target_stage = it
    }
}

// 向后变动阶段
if(target_stage.get('p_sequence') > current_stage.get('p_sequence')){
    target_stage.set('date_gt', current_stage.get('operated_time'))
    // 若当前阶段未存在操作时间，目标阶段时间需大于首阶段时间
    if(current_stage.get('operated_time') == null){
        target_stage.set('date_gt', first_stage.get('operated_time'))
    }
    if(target_stage.get('id') != last_stage.get('id')){
        target_stage.set('date_lt', last_stage.get('operated_time'))
    }
}
// 向前变动阶段
if(target_stage.get('p_sequence') < current_stage.get('p_sequence')){
    target_stage.set('date_lt', last_stage.get('operated_time'))
    if(target_stage.get('id') != first_stage.get('id')){
        target_stage.set('date_gt', first_stage.get('operated_time'))
    }
}
stage_transitions.add(current_stage)
stage_transitions.add(target_stage)
_default.set('stage_transitions', stage_transitions)

```
