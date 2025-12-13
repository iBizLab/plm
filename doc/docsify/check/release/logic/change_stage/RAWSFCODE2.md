<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def stage_transitions = logic.param('stage_transitions').getReal()
def stages = logic.param('stages').getReal()
def update_obj = logic.param('update_obj').getReal()

def first_stage = logic.param('first_stage').getReal()
def last_stage = logic.param('last_stage').getReal()
def current_stage = logic.param('current_stage').getReal()
def target_stage = logic.param('target_stage').getReal()

first_stage = stages.min { it.get('p_sequence') }
last_stage = stages.max { it.get('p_sequence') }
//首阶段标识
def first_stage_id = first_stage.get('id')
//末阶段标识
def last_stage_id = last_stage.get('id')
//获取实体运行对象
def stage_runtime = sys.dataentity('stage')
def release_runtime = sys.dataentity('release')
//循环处理
stage_transitions.each { it ->
    def stage_id = it.get('id')
    if(it.get('target') == 1){
        it.set('is_current', 1)
        target_stage = it
        if(first_stage_id != null){
            if(first_stage_id == stage_id){
                update_obj.set('start_at', it.get('operated_time'))
            }
        }
        if(last_stage_id != null){
            if(last_stage_id == stage_id){
                update_obj.set('end_at', it.get('operated_time'))
            }
        }
        update_obj.set('status', stage_id) 
    }
    if(it.get('current') == 1){
        it.set('is_current', 0)
        current_stage = it
    }
    //更新阶段
    stage_runtime.update(it)
}
// 向前变动阶段时, 从当前阶段 -> 目标阶段 的中间阶段将操作时间置空
if(target_stage.get('p_sequence') < current_stage.get('p_sequence')){
    stages.each { it ->
        if(it.get('p_sequence') > target_stage.get('p_sequence')){
            // 构造阶段更新对象
            def update_stage = stage_runtime.entity()
            update_stage.set('id', it.get('id'))
            if(current_stage.get('id') == last_stage_id){
                if(it.get('p_sequence') < current_stage.get('p_sequence')){
                    update_stage.set('operated_time', null)
                    stage_runtime.update(update_stage)
                }
            } else {
                if(it.get('p_sequence') <= current_stage.get('p_sequence')){
                    update_stage.set('operated_time', null)
                    stage_runtime.update(update_stage)
                }
            }
        }
    }
}
release_runtime.update(update_obj)

```
