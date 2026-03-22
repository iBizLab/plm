<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def de_tag = _default.get("de_tag")
if (de_tag != null){
    def de_runtime = sys.dataentity(de_tag)
    def fullUniqueTag = de_runtime.getFullUniqueTag().replace(".", "-").toLowerCase()
    def system_id = sys.deploySystemId
    //合成当前系统AI工厂reload信号标识
    def reload_signal_prefix = "reloadsignal"
    def reload_signal_id = "${reload_signal_prefix}-${system_id}-deprint-${fullUniqueTag}-dynamic_chat_resource"
    println "发布动态聊天资源配置:${reload_signal_id}"
    def config = [:]
    config.reload_time = net.ibizsys.runtime.util.DateUtils.getCurTimeString()
    //发布配置
    net.ibizsys.central.cloud.core.spring.rt.ServiceHub.getInstance().publishConfig(reload_signal_id, config)
}


```
