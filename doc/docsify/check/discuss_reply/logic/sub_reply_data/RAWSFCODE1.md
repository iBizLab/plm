<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def sub_replys = logic.param("subreply_page").getReal();

entity.set('sub_replys', sub_replys.getContent());
```
