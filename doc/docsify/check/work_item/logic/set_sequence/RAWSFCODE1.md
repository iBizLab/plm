<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal() 
def _sequence = _default.get('sequence')
_default.set('sequence', _sequence*100)
```
