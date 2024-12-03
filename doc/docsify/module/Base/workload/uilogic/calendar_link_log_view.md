## 工时日历打开工时日志视图 <!-- {docsify-ignore-all} -->

   获取搜索表单时间范围条件，并打开工时日志表格

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./calendar_link_log_view#begin {开始}]]
state "结束" as END1 <<end>> [[$./calendar_link_log_view#end1 {结束}]]
state "工作项维度链接日志表格视图" as DEUIACTION1  [[$./calendar_link_log_view#deuiaction1 {工作项维度链接日志表格视图}]]
state "获取搜索表单的日期范围条件" as RAWJSCODE1  [[$./calendar_link_log_view#rawjscode1 {获取搜索表单的日期范围条件}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> DEUIACTION1
DEUIACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取搜索表单的日期范围条件 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```

#### 工作项维度链接日志表格视图 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [工时(WORKLOAD)](module/Base/workload.md) 界面行为 [工时日历链接日志表格视图](module/Base/workload#界面行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
