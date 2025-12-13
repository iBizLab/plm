<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
if(_default.get('shared_by') == null){
    _default.set('shared_by', sys.user.getUserid())
}
if(_default.get('shared_time') == null){
    _default.set('shared_time', new java.sql.Timestamp(System.currentTimeMillis()))
}
```
