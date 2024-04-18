## 获取产品成员 <!-- {docsify-ignore-all} -->

   获取产品成员信息，用于判断当前登陆者权限

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
state "开始" as Begin <<start>> [[$./get_product_member#begin {"开始"}]]
state "获取产品ID" as PREPAREPARAM2  [[$./get_product_member#prepareparam2 {"获取产品ID"}]]
state "根据产品ID获取产品成员" as DEDATASET2  [[$./get_product_member#dedataset2 {"根据产品ID获取产品成员"}]]
state "获取工单详情" as DEACTION1  [[$./get_product_member#deaction1 {"获取工单详情"}]]
state "获取产品ID" as PREPAREPARAM1  [[$./get_product_member#prepareparam1 {"获取产品ID"}]]
state "根据产品ID获取产品成员" as DEDATASET1  [[$./get_product_member#dedataset1 {"根据产品ID获取产品成员"}]]
state "准备参数" as PREPAREPARAM3  [[$./get_product_member#prepareparam3 {"准备参数"}]]
state "结束" as END3 <<end>> [[$./get_product_member#end3 {"结束"}]]
state "结束" as END2 <<end>> [[$./get_product_member#end2 {"结束"}]]
state "跳出循环" as END1 <<end>> [[$./get_product_member#end1 {"跳出循环"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./get_product_member#loopsubcall1 {"循环子调用"}]] #green {
state "循环for_obj" as DEBUGPARAM5  [[$./get_product_member#debugparam5 {"循环for_obj"}]]
state "准备参数" as PREPAREPARAM4  [[$./get_product_member#prepareparam4 {"准备参数"}]]
}


Begin --> DEACTION1 : [[$./get_product_member#begin-deaction1{上下文中无product} 上下文中无product]]
DEACTION1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM3
PREPAREPARAM3 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM5
DEBUGPARAM5 --> PREPAREPARAM4 : [[$./get_product_member#debugparam5-prepareparam4{当前用户为只读权限} 当前用户为只读权限]]
PREPAREPARAM4 --> END1
DEBUGPARAM5 --> END3 : [[$./get_product_member#debugparam5-end3{当前用户非只读权限} 当前用户非只读权限]]
LOOPSUBCALL1 --> END2
Begin --> PREPAREPARAM2 : [[$./get_product_member#begin-prepareparam2{上下文携带了product} 上下文携带了product]]
PREPAREPARAM2 --> DEDATASET2
DEDATASET2 --> PREPAREPARAM3


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取产品ID :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).PRODUCT` 设置给  `filter(过滤器).N_PRODUCT_ID_EQ`

#### 根据产品ID获取产品成员 :id=DEDATASET2<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) 数据集合 [数据集(DEFAULT)](module/ProdMgmt/product_member#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`members(成员)`

#### 获取工单详情 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/ticket.md) 行为 [Get](module/ProdMgmt/ticket#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`ticket(工单)`

#### 获取产品ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ticket(工单).PRODUCT_ID(产品标识)` 设置给  `filter(过滤器).N_PRODUCT_ID_EQ`

#### 根据产品ID获取产品成员 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) 数据集合 [数据集(DEFAULT)](module/ProdMgmt/product_member#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`members(成员)`

#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`用户全局对象.srfpersonid` 设置给  `user(当前登录人).ID`

#### 结束 :id=END3<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `跳出循环（BREAK）`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`members(成员)`，子循环参数使用`for_obj(循环临时变量)`
#### 循环for_obj :id=DEBUGPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`for_obj(循环临时变量)`的详细信息


#### 准备参数 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`true` 设置给  `user(当前登录人).readonly`

#### 结束 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `user(当前登录人)`

#### 跳出循环 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `跳出循环（BREAK）`


### 连接条件说明
#### 上下文中无product :id=Begin-DEACTION1

`Default(传入变量).product` ISNULL
#### 当前用户为只读权限 :id=DEBUGPARAM5-PREPAREPARAM4

`for_obj(循环临时变量).ROLE_ID` EQ `reader` AND 
#### 当前用户非只读权限 :id=DEBUGPARAM5-END3

 AND `for_obj(循环临时变量).role_id` NOTEQ `reader`
#### 上下文携带了product :id=Begin-PREPAREPARAM2

`Default(传入变量).product` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|过滤器|filter|过滤器|||
|循环临时变量|for_obj|数据对象|||
|成员|members|分页查询|||
|工单|ticket|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|当前登录人|user|数据对象|||
|viewctx|viewctx||||
