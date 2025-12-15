<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param("default").getReal()

def old_work_item_type_id = _default?.get("work_item_type_id")

if (old_work_item_type_id) {
    def first_value = old_work_item_type_id.split(',')[0]

    _default?.set("work_item_type_id", first_value)
}
```
