## 获取概览基本信息统计数字 <!-- {docsify-ignore-all} -->

   获取概览基本信息统计数字

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./overview_num#begin {"开始"}]]
state "获取迭代信息" as DEACTION1  [[$./overview_num#deaction1 {"获取迭代信息"}]]
state "计算迭代结束日期距离今天的天数" as RAWSFCODE1  [[$./overview_num#rawsfcode1 {"计算迭代结束日期距离今天的天数"}]]
state "结束" as END1 <<end>> [[$./overview_num#end1 {"结束"}]]


Begin --> DEACTION1
DEACTION1 --> RAWSFCODE1
RAWSFCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取迭代信息 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [迭代(SPRINT)](module/ProjMgmt/sprint.md) 行为 [Get](module/ProjMgmt/sprint#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 计算迭代结束日期距离今天的天数 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



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

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[迭代(SPRINT)](module/ProjMgmt/sprint.md)||
