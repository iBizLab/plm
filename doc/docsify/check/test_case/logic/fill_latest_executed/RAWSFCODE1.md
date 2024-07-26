<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param("Default").real;
def _id = _default.get("id");
def cur_version_id = _default.get("cur_version_id");
def runDERuntime = sys.dataentity("RUN");
def searchContextDTO = runDERuntime.createSearchContext();
searchContextDTO.limit(1).count(false).eq("case_id",_id).nn("status").sort("executed_at,desc");
def args = [searchContextDTO,"SRFVERSIONID",cur_version_id] as Object[];
def page = runDERuntime.fetchDataSet("Default", null, args);
_default.set("latest_executed", page.getContent());
```
