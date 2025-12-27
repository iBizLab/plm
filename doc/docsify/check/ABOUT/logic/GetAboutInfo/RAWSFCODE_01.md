<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
entity.set("name", sys.getPSSystem().getLogicName());
entity.set("version", sys.getPSSystem().getDefaultPSSysSFPub().getVersionString());
entity.set("id", sys.getDeploySystemId());
entity.set("description", sys.getPSSystem().getMemo());
entity.set("license", "MIT");
```
