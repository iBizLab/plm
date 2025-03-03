<p class="panel-title"><b>执行代码</b></p>

```javascript
var { httpurltorepo } = uiLogic.default;

var aux = document.createElement("textarea");
// aux.setAttribute("value", info); 
aux.value='git clone ' + httpurltorepo;
document.body.appendChild(aux); 
aux.select(); 
document.execCommand("copy"); 
document.body.removeChild(aux); 

util.message.success('复制成功!');
```
