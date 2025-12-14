<p class="panel-title"><b>执行代码</b></p>

```javascript
const url = window.location;
var file_name = uiLogic.default.name;
var file_id = uiLogic.default.file_id;
var file_preview_address = ibiz.env.customParams.file_preview_address;

if (file_preview_address !== null && file_preview_address !== undefined && file_preview_address !== '') {
    const windowInfo = getCurrentWindowInfo(url);

    let uploadUrl = `${ibiz.env.baseUrl}/${ibiz.env.appId}${ibiz.env.downloadFileUrl}`;
    const app = ibiz.hub.getApp(context.srfappid);
    const OSSCat = app.model.userParam?.DefaultOSSCat;
    uploadUrl = uploadUrl.replace('/{cat}', OSSCat ? `/${OSSCat}` : '');

    var filedownloadurl = windowInfo + uploadUrl + '/'+file_id+'?fullfilename='+file_name;

    var b64Encoded = ibiz.util.base64.encode(filedownloadurl);
    var previewUrl = file_preview_address + '/onlinePreview?url='+encodeURIComponent(b64Encoded);

    window.open(previewUrl);
} else {
  util.message.error('无附件预览服务，请联系管理员添加!');
}

function getCurrentWindowInfo(url) {
    const protocol = url.protocol;
    const host = url.hostname; 
    const port = url.port || (protocol === "https:" ? "443" : "80"); 
    const isIPAddress = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(host);
    if (isIPAddress) {
        return  protocol +"//" + host + ":" + port ;
    } else {
        return  protocol +"//" + host + ":" + port ;
    }
}
```
