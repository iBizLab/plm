<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def addon_resource = logic.param('addon_resource').getReal()
// 获取查询过滤器对象
def filter = logic.param('default').getReal()
def setting_model = addon_resource.get('setting_model')
if(!setting_model.isEmpty()){
    // JSON字符串转换
    def json = new groovy.json.JsonSlurper().parseText(setting_model)
    // 获取members属性
    def members = json.members
    // 循环members，将user_id拼至过滤器的n_assignee_id_in过滤项中
    members.each { item ->
        def user_id = item.user_id
        if(!user_id.isEmpty()){
            def assignee_ids = filter.get('n_assignee_id_in')
            if(assignee_ids.isEmpty()){
                filter.set('n_assignee_id_in', user_id)
            } else {
                filter.set('n_assignee_id_in', assignee_ids + ',' + user_id)
            }
        }
    }
}

```
