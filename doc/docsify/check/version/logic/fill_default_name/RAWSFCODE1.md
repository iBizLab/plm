<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def default_obj = logic.param('default').getReal()
def cur_version = logic.param('cur_version').getReal()
def cur_version_identifier = cur_version.get('identifier') // 当前版本编号
if(cur_version_identifier){
    def new_version_name = 'v' + (cur_version_identifier + 1)
    default_obj.set('name', new_version_name) // 新版本名称
    default_obj.set('cur_version_name', cur_version.get('name')) // 当前版本名称
} else {
    default_obj.set('name', 'v2') // 新版本名称
    default_obj.set('cur_version_name', 'v1') // 当前版本名称
}


```
