<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def deCodeName = _default.get('source_type')
def dstEntityKey = _default.get('source_id')
if (deCodeName && dstEntityKey) {
    def dstEntityRuntime = sys.dataentity(deCodeName)
    def bos = new java.io.ByteArrayOutputStream()
    def dePrintCodeName = "chat_resource"
    def keys = [dstEntityKey] as Object[]
    net.ibizsys.central.cloud.core.security.IEmployeeContext lastEmployeeContext = net.ibizsys.central.cloud.core.security.EmployeeContext.getCurrent();
    try {
        net.ibizsys.central.cloud.core.security.EmployeeContext.setCurrent(sys.createSuperUserContext());
        dstEntityRuntime.outputPrint(
            dePrintCodeName,
            bos,
            keys,
            null,
            false
        )
    }
    finally {
        net.ibizsys.central.cloud.core.security.EmployeeContext.setCurrent(lastEmployeeContext);
    }

    _default.set("parsed_content", bos.toString("utf-8"))
}
```
