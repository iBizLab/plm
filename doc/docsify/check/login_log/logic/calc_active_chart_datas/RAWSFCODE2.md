<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var echart_obj = logic.getParam('echart_obj');
//活跃总人数
var user_total = logic.getParam('user_total');
var total = user_total.get('total');
//活跃人数
var active_members = echart_obj.get('active_members');
//计算活跃率
var active_rate = ((active_members / total) * 100).toFixed(2); 
//补充活跃率
echart_obj.set("active_rate",active_rate);

//处理authtime
var newdate = String(echart_obj.get('auth_time')).split(' ')[0]; 
echart_obj.set("auth_time",newdate);
```
