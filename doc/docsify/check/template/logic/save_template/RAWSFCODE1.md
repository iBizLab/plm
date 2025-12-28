<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal() 
def user = sys.user()

if (_default.get('visibility') == '10') {
    _default.set('owner_id', user.getUserid())
}
if (_default.get('visibility') == '30') {
    _default.set('owner_id', user.getOrgid())
}
```
