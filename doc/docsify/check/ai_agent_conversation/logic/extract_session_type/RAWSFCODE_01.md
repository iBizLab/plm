<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
// 获取sessionid参数
def _default = logic.param("default").getReal()
def sessionId = _default.get("session_id")

// 提取前缀
def prefix = ""
if(sessionId && sessionId.contains("@")) {
    prefix = sessionId.split("@")[0]
}

// 存储到conversation_type参数
_default.set("type",prefix)
```
