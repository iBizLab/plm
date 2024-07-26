<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def resource_member = logic.param('resource_member').getReal()
def day_capacity = logic.param('day_capacity').getReal()
resource_member.set('day_capacity', day_capacity)
```
