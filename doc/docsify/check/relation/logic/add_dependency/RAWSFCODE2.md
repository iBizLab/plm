<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def dependency = logic.param('dependency').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    dependency.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    dependency.set('target_id', for_temp_obj.get('owner_id'))
}



```
