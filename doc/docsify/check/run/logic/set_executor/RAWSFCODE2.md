<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def for_temp_obj = logic.param('for_temp_obj').getReal()

def list = []
list = for_temp_obj.get('executors')


if (list ==null){
    for_temp_obj.set('multiple_people', -1)
}
else{
    if (list.size > 1) {
        for_temp_obj.set('multiple_people', 1)
    } else {
        for_temp_obj.set('multiple_people', 0)
    } 
}

```
