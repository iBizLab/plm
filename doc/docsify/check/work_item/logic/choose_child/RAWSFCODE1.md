<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def update_obj = logic.param('update_obj').getReal()


// PC端 使用target_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    update_obj.set('id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('target_id') != null){
    update_obj.set('id', for_temp_obj.get('target_id'))
}



```
