<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def system_id = sys.deploySystemId
//合成当前系统AI工厂reload信号标识
def reload_tag = "reloadsignal-$system_id-sysaifactory-ai-ibizplmintelligence"
def config = [:]
config.reload_time = net.ibizsys.runtime.util.DateUtils.getCurTimeString()
//发布配置
net.ibizsys.central.cloud.core.spring.rt.ServiceHub.getInstance().publishConfig(reload_tag, config)

```
