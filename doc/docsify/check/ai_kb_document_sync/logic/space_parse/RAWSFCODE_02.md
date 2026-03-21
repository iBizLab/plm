<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _all_pages = logic.param('all_pages')?.getReal() ?: []
def _docs = logic.param('docs')?.getReal() ?: []
def all_pages_in_space = _all_pages*.id.toSet()
def no_exist_pages_doc = _docs.findAll { !all_pages_in_space.contains(it.source_id) }
println "已删除page的doc: ${no_exist_pages_doc*.source_id}"  

if(no_exist_pages_doc){
    def doc_runtime = sys.dataentity('ai_kb_document')
    no_exist_pages_doc.each { doc ->
        doc_runtime.remove(doc)
    }
}


```
