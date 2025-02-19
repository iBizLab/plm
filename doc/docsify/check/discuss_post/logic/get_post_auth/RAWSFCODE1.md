<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').real;
def userid = sys.user().getUserid();
if (userid == _default.get('create_man')) {
    _default.set('srfreadonly', false);
}

```
