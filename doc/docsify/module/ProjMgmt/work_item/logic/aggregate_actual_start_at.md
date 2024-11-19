## 汇聚实际开始时间 <!-- {docsify-ignore-all} -->

   实际开始时间变更时触发

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
state "开始" as Begin <<start>> [[$./aggregate_actual_start_at#begin {"开始"}]]
state "设置父工作项过滤条件" as PREPAREPARAM1  [[$./aggregate_actual_start_at#prepareparam1 {"设置父工作项过滤条件"}]]
state "获取父工作项" as DEDATASET1  [[$./aggregate_actual_start_at#dedataset1 {"获取父工作项"}]]
state "设置父工作项" as PREPAREPARAM2  [[$./aggregate_actual_start_at#prepareparam2 {"设置父工作项"}]]
state "设置当前同级工作项过滤条件" as PREPAREPARAM3  [[$./aggregate_actual_start_at#prepareparam3 {"设置当前同级工作项过滤条件"}]]
state "获取同级数据" as DEDATASET2  [[$./aggregate_actual_start_at#dedataset2 {"获取同级数据"}]]
state "准备参数" as PREPAREPARAM4  [[$./aggregate_actual_start_at#prepareparam4 {"准备参数"}]]
state "更新父工作项" as DEACTION1  [[$./aggregate_actual_start_at#deaction1 {"更新父工作项"}]]
state "结束" as END1 <<end>> [[$./aggregate_actual_start_at#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./aggregate_actual_start_at#loopsubcall1 {"循环子调用"}]] #green {
state "调试当前级子数据" as DEBUGPARAM4  [[$./aggregate_actual_start_at#debugparam4 {"调试当前级子数据"}]]
state "获取当前级的最小开始时间，赋值给父" as RAWSFCODE1  [[$./aggregate_actual_start_at#rawsfcode1 {"获取当前级的最小开始时间，赋值给父"}]]
}


Begin --> PREPAREPARAM1 : [[$./aggregate_actual_start_at#begin-prepareparam1{连接名称} 连接名称]]
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM2 : [[$./aggregate_actual_start_at#dedataset1-prepareparam2{连接名称} 连接名称]]
PREPAREPARAM2 --> PREPAREPARAM3
PREPAREPARAM3 --> DEDATASET2
DEDATASET2 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM4
DEBUGPARAM4 --> RAWSFCODE1
LOOPSUBCALL1 --> PREPAREPARAM4
PREPAREPARAM4 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置父工作项过滤条件 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).PID(父标识)` 设置给  `p_work_item_filter(父工作项过滤器).N_ID_EQ`

#### 获取父工作项 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [正常状态(normal)](module/ProjMgmt/work_item#数据集合) ，查询参数为`p_work_item_filter(父工作项过滤器)`

将执行结果返回给参数`p_work_item_page(父工作项分页)`

#### 设置父工作项 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`p_work_item_page(父工作项分页).0` 绑定给  `p_work_item(父工作项)`

#### 设置当前同级工作项过滤条件 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`p_work_item(父工作项).ID(标识)` 设置给  `cur_child_work_item_filter(当前级子工作项过滤器).N_PID_EQ`

#### 获取同级数据 :id=DEDATASET2<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [正常状态(normal)](module/ProjMgmt/work_item#数据集合) ，查询参数为`cur_child_work_item_filter(当前级子工作项过滤器)`

将执行结果返回给参数`cur_child_work_item_page(当前级子工作项)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`cur_child_work_item_page(当前级子工作项)`，子循环参数使用`cur_work_item_temp(当前级工作项临时对象)`
#### 准备参数 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`work_item_data(工作项数据).ACTUAL_START_AT(实际开始时间)` 设置给  `p_work_item(父工作项).ACTUAL_START_AT(实际开始时间)`

#### 更新父工作项 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`p_work_item(父工作项)`

#### 调试当前级子数据 :id=DEBUGPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`cur_work_item_temp(当前级工作项临时对象)`的详细信息


#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 获取当前级的最小开始时间，赋值给父 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");
var p_actual_start_time = work_item_data.get("actual_start_at");
var c_actual_start_time = work_item_temp.get("actual_start_at");
if (c_actual_start_time) {
    if (p_actual_start_time) {
        if (p_actual_start_time > c_actual_start_time) {
            work_item_data.set("actual_start_at", c_actual_start_time);
        }
    } else {
        work_item_data.set("actual_start_at", c_actual_start_time);
    }
}
```


### 连接条件说明
#### 连接名称 :id=Begin-PREPAREPARAM1

`Default(传入变量).PID(父标识)` ISNOTNULL
#### 连接名称 :id=DEDATASET1-PREPAREPARAM2

`p_work_item_page(父工作项分页).size` GT `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|当前级子工作项过滤器|cur_child_work_item_filter|过滤器|||
|当前级子工作项|cur_child_work_item_page|分页查询|||
|当前级工作项临时对象|cur_work_item_temp|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|父工作项|p_work_item|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|父工作项过滤器|p_work_item_filter|过滤器|||
|父工作项分页|p_work_item_page|分页查询|||
|工作项数据|work_item_data|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
