## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

### 开始时间 :id=START_AT

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "start" as start  <<start>>
state "end" as end <<end>>
state "[条件组]OR" as ef2c338b56b972bd3d5cc7f4718e9c92 [[$./start_at#aef2c338b56b972bd3d5cc7f4718e9c92 {"[条件组]OR"}]] {
state " " as ef2c338b56b972bd3d5cc7f4718e9c92_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 893aab4a0d3ca26514c8a1cb251127b7 [[$./start_at#a893aab4a0d3ca26514c8a1cb251127b7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 645649c775a1d6cdf90db25eb46a5b78 [[$./start_at#a645649c775a1d6cdf90db25eb46a5b78 {"[条件组]OR"}]] {
state " " as 645649c775a1d6cdf90db25eb46a5b78_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 651d6263bf8a062e6f8793b1a53feee1 [[$./start_at#a651d6263bf8a062e6f8793b1a53feee1 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as cc399acdbeaa2c5984f278a13a67cc48 [[$./start_at#acc399acdbeaa2c5984f278a13a67cc48 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 645649c775a1d6cdf90db25eb46a5b78_exit  <<exitPoint>>
}
state " " as ef2c338b56b972bd3d5cc7f4718e9c92_exit  <<exitPoint>>
}


start --> ef2c338b56b972bd3d5cc7f4718e9c92_entry 
ef2c338b56b972bd3d5cc7f4718e9c92_entry --> 893aab4a0d3ca26514c8a1cb251127b7 
893aab4a0d3ca26514c8a1cb251127b7 --> ef2c338b56b972bd3d5cc7f4718e9c92_exit  : yes
893aab4a0d3ca26514c8a1cb251127b7 -[#red]-> 645649c775a1d6cdf90db25eb46a5b78_entry  : no

645649c775a1d6cdf90db25eb46a5b78_entry --> 651d6263bf8a062e6f8793b1a53feee1 
651d6263bf8a062e6f8793b1a53feee1 --> 645649c775a1d6cdf90db25eb46a5b78_exit  : yes
651d6263bf8a062e6f8793b1a53feee1 -[#red]-> cc399acdbeaa2c5984f278a13a67cc48  : no

cc399acdbeaa2c5984f278a13a67cc48 --> 645649c775a1d6cdf90db25eb46a5b78_exit  : yes
cc399acdbeaa2c5984f278a13a67cc48 -[#red]-> end  : no
645649c775a1d6cdf90db25eb46a5b78_exit --> ef2c338b56b972bd3d5cc7f4718e9c92_exit 
ef2c338b56b972bd3d5cc7f4718e9c92_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a651d6263bf8a062e6f8793b1a53feee1



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a893aab4a0d3ca26514c8a1cb251127b7



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=acc399acdbeaa2c5984f278a13a67cc48



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







