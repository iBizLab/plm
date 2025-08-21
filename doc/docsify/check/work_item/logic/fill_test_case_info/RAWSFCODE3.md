<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal();
def attachments = logic.param('attachments').getReal();

def _default_list = _default.get('attachments');
def list = new ArrayList();

attachments.each { item ->
    println item;
    item.set('owner_id',null);
    item.set('owner_type',null);
    item.set('id',null);
    list.add(item);
}

_default_list.each { item ->
    println item;
    list.add(item);
}
println list;
_default.set('attachments', list);
```
