<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def project = logic.param('project').getReal()
project.id = null
project.identifier = 'PROJ' + UUID.randomUUID().toString().replaceAll('-', '').toUpperCase().take(11)
logic.param('project').getDataEntityRuntime().fillEntityKeyValue(project)
```
