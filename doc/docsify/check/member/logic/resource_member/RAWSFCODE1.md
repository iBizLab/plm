<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal();
def member_list = logic.param('member_list').getReal();

def id = _default.get('addon_resource');

def runtime = sys.dataentity('addon_resource');
def addon_resource = runtime.get(id)
def members = addon_resource.get('members');
if (members != null ) {
    members.each { item ->
        member_list.add(item)
    }
}
```
