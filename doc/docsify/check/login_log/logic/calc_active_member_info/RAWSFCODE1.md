<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 创建一个新的 Date 对象，包含当前的日期和时间  
var lastday = new Date();  
// 获取昨天的日期  
lastday.setDate(lastday.getDate() - 1);  
// 获取年、月、日信息  
var year = lastday.getFullYear();  
var month = lastday.getMonth() + 1;  
var day = lastday.getDate();  
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}

// 生成日期字符串，格式为 YYYY-MM-DD
var dateStr = year + '-' + month + '-' + day;
var lastdayFirst = dateStr + ' 00:00:00';
var lastdayLast =  dateStr + ' 23:59:59';

logic.setParam('last_day_starttime',lastdayFirst);
logic.setParam('last_day_endtime',lastdayLast)


```
