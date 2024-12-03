<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def choose_member = _default.get('choose_member')
def choose_member_ids = _default.get('choose_member_ids')
def member_ids = choose_member_ids.split(',')
def member_names = choose_member.split(',')
def member_runtime = sys.dataentity('member')
if(_default.get('shared_page') != null){
    member_ids.eachWithIndex { item, index ->
        def newMember = member_runtime.entity()
        newMember.set('owner_type', 'PAGE')
        newMember.set('role_id', _default.get('check_type', 'reader'))
        newMember.set('owner_subtype', 'SHARED')
        newMember.set('owner_id', _default.get('shared_page'))
        newMember.set('user_id', item) 
        newMember.set('name', member_names[index])
        member_runtime.save(newMember)
    }

}

```
