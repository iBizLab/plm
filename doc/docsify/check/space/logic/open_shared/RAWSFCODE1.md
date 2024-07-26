<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _shared_space = logic.param('shared_space').getReal()
if(_shared_space.get('shared_time') == null){
    _shared_space.set('shared_time', new java.sql.Timestamp(System.currentTimeMillis()))
}
```
