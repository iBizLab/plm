<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 创建一个新的 Date 对象，获取前15天的日期 
var fifty = new Date();  
// 获取前15天的日期  
fifty.setDate(fifty.getDate() - 15);  
// 获取年、月、日信息  
var year = fifty.getFullYear();  
var month = fifty.getMonth() + 1;  
var day = fifty.getDate();  
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}
// 创建一个新的 Date 对象，获取今天的日期 
var today = new Date();  
// 获取年、月、日信息  
var todayYear = today.getFullYear();  
var todayMonth = today.getMonth() + 1;  
var todayDay = today.getDate();  
if (todayMonth < 10) {
    todayMonth = '0' + todayMonth;
}
if (todayDay < 10) {
    todayDay = '0' + todayDay;
}
// 生成日期字符串，格式为 YYYY-MM-DD
var dateStr = year + '-' + month + '-' + day;
var todayDateStr = todayYear + '-' + todayMonth + '-' + todayDay;

var beforefiftyday = dateStr + ' 00:00:00';
var todays =  todayDateStr + ' 23:59:59';


logic.setParam('starttime',beforefiftyday);
logic.setParam('endtime',todays)
```
