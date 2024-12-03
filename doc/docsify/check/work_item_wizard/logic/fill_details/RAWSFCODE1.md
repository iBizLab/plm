<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def project_id = _default.get('project_id')
def project_runtime = sys.dataentity('project')
def entity_runtime = sys.dataentity('work_item_wizard_detail')
def work_item_runtime = sys.dataentity('work_item')
def work_item_type_runtime = sys.dataentity('work_item_type')
def project = project_runtime.get(project_id);
def details = entity_runtime.list()
def work_items = logic.param('work_items').getReal()
def influence_ids = ''

work_items.each { item ->
    if(influence_ids != ''){
        influence_ids = influence_ids + ',' + item.get('id')
    } else {
        influence_ids = item.get('id')
    }
    def work_item_wizard_detail = sys.entity('work_item_wizard_detail')
    work_item_wizard_detail.set('origin_type', item.get('work_item_type_id'))
    def work_item_type_filter = work_item_type_runtime.filter()
    work_item_type_filter.eq('project_type', project.get('type'))
    work_item_type_filter.ne('id', item.get('work_item_type_id'))
    def choose_types = work_item_type_filter.select('')
    if(choose_types.size() > 0){
        work_item_wizard_detail.set('target_type', choose_types.get(0).get('id'))
    }
    work_item_wizard_detail.set('id', item.get('id'))
    work_item_wizard_detail.set('wizard_id', _default.get('id'))
    work_item_wizard_detail.set('origin_state', item.get('state'))
    work_item_wizard_detail.set('target_state', '10')
    work_item_wizard_detail.set('project_id', item.get('project_id'))
    work_item_wizard_detail.set('title', item.get('title'))
    work_item_wizard_detail.set('assignee_name', item.get('assignee_name'))
    work_item_wizard_detail.set('priority', item.get('priority'))
    work_item_wizard_detail.set('influence', 1)
    // 子工作项
    def child_filter = sys.filter('work_item')
    child_filter.eq('pid', item.get('id'))
    def childs = child_filter.select('')
    work_item_wizard_detail.set('influence_childs', 0)
    if(childs.size() > 0){
        work_item_wizard_detail.set('influence_childs', childs.size())
        def child_work_item_types = work_item_runtime.list()
        def childItems = childs.groupBy { it.get('work_item_type_id') }
        childItems.each { work_item_type_id, itemList ->
            def child_work_item = sys.entity('work_item')
            def influence_child_ids = ''
            child_work_item.set('child_work_item_type', work_item_type_id)
            itemList.each { it ->
                if(influence_child_ids != ''){
                    influence_child_ids = influence_child_ids + ',' + it.get('id')
                } else {
                    influence_child_ids = it.get('id')
                }
            }
            child_work_item.set('influence_child_ids', influence_child_ids)
            child_work_item.set('parent_title', work_item_wizard_detail.get('title'))
            child_work_item.set('influence', itemList.size())
            child_work_item.set('id', work_item_type_id)
            child_work_item.set('parent_origin_type', item.get('work_item_type_id'))
            child_work_item_types.add(child_work_item)
        }
        work_item_wizard_detail.set('child_work_item_types', child_work_item_types)
    }
    details.add(work_item_wizard_detail)
}
_default.set('details', details)
_default.set('influence_ids', influence_ids)
```
