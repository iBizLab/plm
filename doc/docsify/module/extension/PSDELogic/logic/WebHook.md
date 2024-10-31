## WebHook地址 <!-- {docsify-ignore-all} -->

   WebHook地址

### 逻辑处理脚本

```
var urlObject = new URL(window.location.href);  
var webhookurl = urlObject.origin+ibiz.env.baseUrl+"/"+ibiz.env.appId+"/webhooks/"+data.psdynainstid;
data.webhookurl =  webhookurl;
return data;
```
