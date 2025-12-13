<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
//获取当前用户
def user = sys.user()
def _default = logic.param('Default').getReal()
if(_default.get('user_id') == user.getUserid()){
    _default.set('is_current_user', '1')
}
```
