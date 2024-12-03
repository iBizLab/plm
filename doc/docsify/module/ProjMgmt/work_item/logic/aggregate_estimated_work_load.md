## 汇聚预估工时 <!-- {docsify-ignore-all} -->

   预估工时属性变更触发

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
state "开始" as Begin <<start>> [[$./aggregate_estimated_work_load#begin {"开始"}]]
state "设置父工作项过滤条件" as PREPAREPARAM1  [[$./aggregate_estimated_work_load#prepareparam1 {"设置父工作项过滤条件"}]]
state "获取父工作项" as DEDATASET1  [[$./aggregate_estimated_work_load#dedataset1 {"获取父工作项"}]]
state "设置父工作项" as PREPAREPARAM2  [[$./aggregate_estimated_work_load#prepareparam2 {"设置父工作项"}]]
state "设置当前同级工作项过滤条件" as PREPAREPARAM3  [[$./aggregate_estimated_work_load#prepareparam3 {"设置当前同级工作项过滤条件"}]]
state "获取同级数据" as DEDATASET2  [[$./aggregate_estimated_work_load#dedataset2 {"获取同级数据"}]]
state "准备参数" as PREPAREPARAM4  [[$./aggregate_estimated_work_load#prepareparam4 {"准备参数"}]]
state "更新父工作项" as DEACTION1  [[$./aggregate_estimated_work_load#deaction1 {"更新父工作项"}]]
state "执行脚本代码" as RAWSFCODE2  [[$./aggregate_estimated_work_load#rawsfcode2 {"执行脚本代码"}]]
state "结束" as END1 <<end>> [[$./aggregate_estimated_work_load#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./aggregate_estimated_work_load#loopsubcall1 {"循环子调用"}]] #green {
state "获取当前级的工时，赋值给父" as RAWSFCODE1  [[$./aggregate_estimated_work_load#rawsfcode1 {"获取当前级的工时，赋值给父"}]]
}


Begin --> PREPAREPARAM1 : [[$./aggregate_estimated_work_load#begin-prepareparam1{连接名称} 连接名称]]
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM2 : [[$./aggregate_estimated_work_load#dedataset1-prepareparam2{连接名称} 连接名称]]
PREPAREPARAM2 --> PREPAREPARAM3
PREPAREPARAM3 --> DEDATASET2
DEDATASET2 --> LOOPSUBCALL1
LOOPSUBCALL1 --> RAWSFCODE1
LOOPSUBCALL1 --> RAWSFCODE2
RAWSFCODE2 --> PREPAREPARAM4
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



1. 将`workload_data(工时数据).actual_workload(实际工时)` 设置给  `p_work_item(父工作项).ACTUAL_WORKLOAD(实际工时)`
2. 将`workload_data(工时数据).REMAINING_WORKLOAD(剩余工时)` 设置给  `p_work_item(父工作项).REMAINING_WORKLOAD(剩余工时)`
3. 将`workload_data(工时数据).estimated_workload(预估工时)` 设置给  `p_work_item(父工作项).ESTIMATED_WORKLOAD(预估工时)`

#### 更新父工作项 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`p_work_item(父工作项)`

#### 获取当前级的工时，赋值给父 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var workload_data = logic.getParam("workload_data");
var cur_estimated_workload = parseFloat(work_item_temp && work_item_temp.get("estimated_workload")) || 0;
var cur_actual_workload = parseFloat(work_item_temp && work_item_temp.get("actual_workload")) || 0;

workload_data.set("estimated_workload", cur_estimated_workload + workload_data.get("estimated_workload"));

workload_data.set("actual_workload",cur_actual_workload + workload_data.get("actual_workload")) ;


```

#### 执行脚本代码 :id=RAWSFCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var workload_data = logic.getParam("workload_data");
var actual_workload = workload_data.get("actual_workload");
var estimated_workload =workload_data.get("estimated_workload");
var remaining_workload = null;
if(estimated_workload){
    if(actual_workload){
        remaining_workload = estimated_workload-actual_workload;
        if(remaining_workload>0){
            workload_data.set("remaining_workload",remaining_workload);
        }
    }else{
        workload_data.set("remaining_workload",estimated_workload);
    }
}


```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 连接名称 :id=Begin-PREPAREPARAM1

`Default(传入变量).PID(父标识)` ISNOTNULL
#### 连接名称 :id=DEDATASET1-PREPAREPARAM2

`p_work_item_page(父工作项分页).size` GT `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|实际工时|actual_workload|简单数据|||
|当前级子工作项过滤器|cur_child_work_item_filter|过滤器|||
|当前级子工作项|cur_child_work_item_page|分页查询|||
|当前级工作项临时对象|cur_work_item_temp|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|预估工时|estimated_workload|简单数据|||
|父工作项|p_work_item|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|父工作项过滤器|p_work_item_filter|过滤器|||
|父工作项分页|p_work_item_page|分页查询|||
|工时数据|workload_data|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
