<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def stages = logic.param('stages').getReal()
def _default = logic.param('Default').getReal()
def first_stage_id = _default.get('first_stage_id')
def last_stage_id = _default.get('last_stage_id')
//获取实体运行对象 参数实体名
def stage_runtime = sys.dataentity('stage')
def release_runtime = sys.dataentity('release')
stages.each { it ->
    //构造阶段对象
    def new_stage = stage_runtime.entity()
    new_stage.set('release_id', _default.get('id'))
    new_stage.set('pid', it.get('id'))
    new_stage.set('name', it.get('name'))
    new_stage.set('type', it.get('type'))
    new_stage.set('sequence', it.get('sequence'))
    new_stage.set('is_current', 0)
    if(it.get('id') == first_stage_id){
        new_stage.set('is_current', 1)
        new_stage.set('operated_time', _default.get('start_at'))
    }
    if(it.get('id') == last_stage_id){
        new_stage.set('operated_time', _default.get('end_at'))
    }
    //新建发布
    stage_runtime.create(new_stage)
}




```
