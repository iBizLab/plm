<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 创建一个新的 Date 对象，包含当前的日期和时间  
var sevenday = new Date();  
// 获取前6天的日期  
sevenday.setDate(sevenday.getDate() - 6);  
// 获取年、月、日信息  
var year = sevenday.getFullYear();  
var month = sevenday.getMonth() + 1;  
var day = sevenday.getDate();  
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}
// 生成日期字符串，格式为 YYYY-MM-DD
var dateStr = year + '-' + month + '-' + day;
var sevendayFirst = dateStr + ' 00:00:00';




// 创建一个新的 Date 对象，包含当前的日期和时间  
var today = new Date();  
// 获取年、月、日信息  
var todayyear = today.getFullYear();  
var todaymonth = today.getMonth() + 1;  
var todayday = today.getDate();  
if (todaymonth < 10) {
    todaymonth = '0' + todaymonth;
}
if (todayday < 10) {
    todayday = '0' + todayday;
}
// 生成日期字符串，格式为 YYYY-MM-DD
var enddate = todayyear + '-' + todaymonth + '-' + todayday + ' 23:59:59';

logic.setParam('seven_day_starttime',sevendayFirst);
logic.setParam('seven_day_endtime',enddate)


```
