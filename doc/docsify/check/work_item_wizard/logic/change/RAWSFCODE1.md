<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp = logic.param('for_temp').getReal()
def child_work_item_types = for_temp.get('child_work_item_types')
//获取实体运行对象 参数实体名
def work_item_runtime = sys.dataentity('work_item')

child_work_item_types.each { it ->
    def target_parent = it.get('target_parent')
    if(it.get('influence_child_ids') != null){
        def work_item_filter = work_item_runtime.filter()
        work_item_filter.in('id', it.get('influence_child_ids'))
        def childs = work_item_filter.select('')
        childs.each { item ->
            def update_entity = work_item_runtime.entity()
            update_entity.set('id', item.get('id'))
            if (target_parent != null) {
               update_entity.set('pid', target_parent) 
            } else {
               update_entity.set('pid', null)
            }
            //更新子工作项的所属父级
            work_item_runtime.update(update_entity)
        }       
    }   
}
```
