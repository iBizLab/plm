<p class="panel-title"><b>执行代码</b></p>

```javascript
var file_name = uiLogic.default.name;
var file_id = uiLogic.default.id;

var filedownloadurl='http://172.16.220.130:30510/api/ibizplm__plmweb/ibizutil/download/plm/'+file_id+'?fullfilename='+file_name;

console.log("文件下载路径"+filedownloadurl);
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/js-base64@3.7.2/base64.min.js';
script.onload = function() {
    var b64Encoded = Base64.encode(filedownloadurl);
    var url = 'http://172.16.121.242:28012/onlinePreview?url='+encodeURIComponent(b64Encoded);
    console.log("最终目标地址"+url);
    window.open(url);
};
document.head.appendChild(script);

```
