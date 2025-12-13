<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
// 父工作项的下级工作项范围
def parent_work_item = logic.param('parent_work_item').getReal()
def work_item_sub_type = parent_work_item.get('work_item_sub_type')
// 新建工作项的类型
def _default = logic.param('default').getReal()
_default.set('check_type', 0)
def child_type = _default.get('work_item_type_id')
if(work_item_sub_type != null && child_type != null){
    if(work_item_sub_type.contains(child_type)){
        _default.set('check_type', 1)
    }
}

```
