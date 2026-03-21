<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _all_pages = logic.param('all_pages')?.getReal() ?: []
def _docs = logic.param('docs')?.getReal() ?: []
def _doc_sync = logic.param('doc_sync')?.getReal() ?: []
def doc_pageids_in_space = (_docs?.collect { it?.source_id }?.findAll { it != null } ?: []) as Set
def doc_runtime = sys.dataentity('ai_kb_document')

println "已有pageId: $doc_pageids_in_space"  

def pages_without_doc = _all_pages.findAll { !doc_pageids_in_space.contains(it.id)}

println "未存在pageId: ${pages_without_doc*.id}"  

pages_without_doc.each { page ->
    println "页面ID: ${page.id}, 页面: ${page.name}"
    def new_doc = doc_runtime.entity()
    new_doc.set('custom_chunk',0)
    new_doc.set('source_id',page.id)
    new_doc.set('name',page.name)
    new_doc.set('sync_frequency',_doc_sync.sync_frequency)
    new_doc.set('status',0)
    new_doc.set('sync_id',_doc_sync.id)
    new_doc.set('type','space')
    new_doc.set('source_type','page')
    new_doc.set('kb_id',_doc_sync.ai_knowledge_base_id)
    doc_runtime.create(new_doc)
}


```
