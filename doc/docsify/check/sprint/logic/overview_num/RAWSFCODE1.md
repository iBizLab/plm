<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def daysDifference = 0
if(_default.get('end_at') != null){
    // 将 java.sql.Timestamp 转换为 java.time.LocalDateTime
    java.time.LocalDateTime endDateTime = _default.get('end_at').toLocalDateTime();
    java.time.LocalDateTime startDateTime = _default.get('start_at').toLocalDateTime();

     // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def endDate = endDateTime.toLocalDate()
    def startDate = startDateTime.toLocalDate()
    def currentDate = currentDateTime.toLocalDate()
    // 计算结束日期与今天的天数差
    def enddaysDifference = endDate.toEpochDay() - currentDate.toEpochDay()
    // 计算开始日期与今天的天数差
    def startdaysDifference = currentDate.toEpochDay() - startDate.toEpochDay()
    // 计算开始日期与结束日期的天数差
    def betweenDifference = endDate.toEpochDay() - startDate.toEpochDay()
    if(enddaysDifference < 0){
        enddaysDifference = 0
    }
    if(startdaysDifference < 0){
        startdaysDifference = 0
    }
    if(betweenDifference == 0){
        betweenDifference = 1
    }
    if(enddaysDifference == 0){
        // 日期已过比例
        _default.set("past_days", 1)
    } else {
        if(startdaysDifference > 0 && betweenDifference > 0){
            _default.set("past_days", startdaysDifference / betweenDifference)
        }
    }
    // 剩余天数
    _default.set("remaining_days", enddaysDifference)
}
def total_num = _default.get('all_work_items')
def completed_num = _default.get('completed_work_items')
def work_item_counts = completed_num + '/' + total_num
_default.set('work_item_counts', work_item_counts)
if(completed_num == 0 || total_num == 0){
    // 工作项完成率
    _default.set('work_item_complete_percent', 0)
} else {
    _default.set('work_item_complete_percent', completed_num / total_num)
}
```
