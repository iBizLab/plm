<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def user_filter = logic.param('user_filter').getReal()
user_filter.setPageable(_default.getPageable())

```
