<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def _map = logic.param('map').getReal()
def key = _default.get("id")
def token = "credential-${sys.getDeploySystemId()}-ai--${key}".toString()
_map.set("embeddingtoken",token)
```
