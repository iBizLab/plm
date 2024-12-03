<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def addon_resource = logic.param('addon_resource').getReal()
addon_resource.set('members', insert_members)
```
