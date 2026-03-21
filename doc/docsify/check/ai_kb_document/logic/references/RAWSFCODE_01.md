<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def meta_data_str = _default.get('meta_data')
if (meta_data_str) {
    try {
        def meta_data = new groovy.json.JsonSlurper().parseText(meta_data_str)
        def references = meta_data.references
        _default.set('references', references)
    }catch (e){
        println "Error parsing meta_data: ${e}"
    }
}
```
