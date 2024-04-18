## 工作类别维度管理工时日历查询 <!-- {docsify-ignore-all} -->

   工时管理菜单中工时日历：工作类型维度查询数据使用

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
state "开始" as Begin <<start>> [[$./type_of_management_dimension#begin {"开始"}]]
state "重置分页参数" as PREPAREPARAM1  [[$./type_of_management_dimension#prepareparam1 {"重置分页参数"}]]
state "查询工作类别工时" as DEDATASET1  [[$./type_of_management_dimension#dedataset1 {"查询工作类别工时"}]]
state "结束" as END1 <<end>> [[$./type_of_management_dimension#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./type_of_management_dimension#loopsubcall1 {"循环子调用"}]] #green {
state "填充工作类别为无" as PREPAREPARAM2  [[$./type_of_management_dimension#prepareparam2 {"填充工作类别为无"}]]
}


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2 : [[$./type_of_management_dimension#loopsubcall1-prepareparam2{如果工作类别为空} 如果工作类别为空]]
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 重置分页参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1000` 设置给  `Default(传入变量).size`

#### 填充工作类别为无 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`无` 设置给  `for_temp(循环临时变量).TYPE_NAME(名称)`

#### 查询工作类别工时 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工时(WORKLOAD)](module/Base/workload.md) 数据集合 [工作类别记录(type_of)](module/Base/workload#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`page(分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page(分页查询结果变量)`，子循环参数使用`for_temp(循环临时变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `page(分页查询结果变量)`


### 连接条件说明
#### 如果工作类别为空 :id=LOOPSUBCALL1-PREPAREPARAM2

`for_temp(循环临时变量).TYPE_ID(类别)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|循环临时变量|for_temp|数据对象|[工时(WORKLOAD)](module/Base/workload.md)||
|分页查询结果变量|page|分页查询|||
