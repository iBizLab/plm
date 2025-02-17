## 工单关注（移动端） <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./mob_ticket_attention#begin {"开始"}]]
state "获取列表" as BINDPARAM1  [[$./mob_ticket_attention#bindparam1 {"获取列表"}]]
state "结束" as END1 <<end>> [[$./mob_ticket_attention#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./mob_ticket_attention#loopsubcall1 {"循环子调用"}]] #green {
state "设置参数" as PREPAREPARAM1  [[$./mob_ticket_attention#prepareparam1 {"设置参数"}]]
state "创建关注人" as DEACTION1  [[$./mob_ticket_attention#deaction1 {"创建关注人"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取列表 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam`，子循环参数使用`for_obj(循环临时变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 设置参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `attention(关注人).OWNER_ID(所属数据标识)`
2. 将`TICKET` 设置给  `attention(关注人).OWNER_SUBTYPE(所属对象子类型)`
3. 将`TICKET` 设置给  `attention(关注人).OWNER_TYPE(所属数据对象)`
4. 将`40` 设置给  `attention(关注人).TYPE(关注类型)`
5. 将`for_obj(循环临时变量).USER_ID(登录名)` 设置给  `attention(关注人).USER_ID(关注人)`
6. 将`for_obj(循环临时变量).NAME(姓名)` 设置给  `attention(关注人).NAME(名称)`

#### 创建关注人 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关注(ATTENTION)](module/Base/attention.md) 行为 [Create](module/Base/attention#行为) ，行为参数为`attention(关注人)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|关注人|attention|数据对象|[关注(ATTENTION)](module/Base/attention.md)||
|循环临时变量|for_obj|数据对象|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md)||
|srfactionparam|srfactionparam|数据对象列表|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md)||
|ticket|ticket|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
