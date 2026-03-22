<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def _document = logic.param('document').getReal()
// def _type = _default.get('type')
// if (_type == 'file'){
//     def iCloudOSSClient = sys.getSysUtilRuntime(net.ibizsys.central.cloud.core.sysutil.ISysCloudClientUtilRuntime.class, false).getServiceClient("cloud-oss", net.ibizsys.central.cloud.core.cloudutil.client.ICloudOSSClient.class, true)
//     def fileJson = _default.get("file")
//     if (fileJson){
//         def file = new groovy.json.JsonSlurper().parseText(fileJson)
//         if (file.size() > 0){
//             println("输出file"+file[0])
//             def fileId = file[0].id
//             def folder = file[0].folder
//             def fileText = iCloudOSSClient.downloadText(folder, fileId)
//             _default.set("parsed_content", fileText)
//         }
//     }
// }
_default.set("parsed_content", _document.get("original_content"))
```
