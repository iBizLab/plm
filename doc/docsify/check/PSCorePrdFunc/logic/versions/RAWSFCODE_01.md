<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
        def versions = logic.getParam("versions");
        if(entity.get("versions")  && entity.get("versions") instanceof List && ((List)entity.get("versions")).size()>0) {
            List list = ((List)entity.get("versions"));
            if(!"latest".equalsIgnoreCase(list.get(0).getOrDefault("version",""))) {
                Map latest = new HashMap();
                entity.copyTo(latest);
                versions.add(latest)
            }
            for(def ver:list) {
                Map item = new HashMap();
                entity.copyTo(item);
                item.putAll(ver);
                versions.add(item);
            }
        }
```
