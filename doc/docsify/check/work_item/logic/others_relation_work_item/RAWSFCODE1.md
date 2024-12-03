<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def reverse_relation_obj = logic.param('reverse_relation_obj').getReal()

def forward_relation_obj = logic.param('forward_relation_obj').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('owner_id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('owner_id'))
}



```
