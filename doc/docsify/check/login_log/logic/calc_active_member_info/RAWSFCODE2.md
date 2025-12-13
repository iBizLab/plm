<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var datas = logic.getParam('datas');
var last_active_members = logic.getParam('last_active_members');
var seven_active_members = logic.getParam('seven_active_members');
//活跃总人数
var active_count = datas.get('active_count');
//昨日活跃人数
var lastday_count = last_active_members.get('ACTIVE_MEMBERS');
//昨日活跃率
var lastday_rate = ((lastday_count / active_count) * 100).toFixed(2);
//设置昨日活跃人数和活跃率
datas.set("lastday_active_count",lastday_count);
datas.set("lastday_active_rate",lastday_rate);
//近七日活跃人数
var sevenday_count = seven_active_members.get('ACTIVE_MEMBERS');
//近七日活跃率
var sevenday_rate = ((sevenday_count / active_count) * 100).toFixed(2);
//设置近七日活跃人数和活跃率
datas.set("sevenday_active_count",sevenday_count);
datas.set("sevenday_active_rate",sevenday_rate);

```
