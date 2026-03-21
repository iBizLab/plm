<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def page = logic.param('page').getReal()

def maxValue = 0
if (page[0] != null) {
    maxValue = page[0].get('sequence')
    _default.set('sequence', maxValue + 10)
}
```
