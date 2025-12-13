<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def for_choose_obj = logic.param('for_choose_obj').getReal()
insert_members.each { item ->
    def user_id = item.user_id
    if(user_id == for_choose_obj.get('user_id')){
       for_choose_obj.set('already_exist', '1') 
    }
}


```
