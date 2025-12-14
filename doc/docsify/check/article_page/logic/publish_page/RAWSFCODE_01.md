<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal() 
def _identifier= _default.get('identifier')

try{
    _default.set('sequence', _identifier.toInteger()*100)
} catch (Exception e)  {
    _default.set('sequence', 1)
}
```
