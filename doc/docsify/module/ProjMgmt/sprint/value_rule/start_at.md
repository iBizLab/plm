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
state "[条件组]OR" as dcfb4d1d3a1e13e9cf250362ebb2e31d [[$./start_at#adcfb4d1d3a1e13e9cf250362ebb2e31d {"[条件组]OR"}]] {
state " " as dcfb4d1d3a1e13e9cf250362ebb2e31d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 5f3821a5a6c87cf985451109523c25e4 [[$./start_at#a5f3821a5a6c87cf985451109523c25e4 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 28e34b06765df42bfe547f59adbbdc78 [[$./start_at#a28e34b06765df42bfe547f59adbbdc78 {"[条件组]OR"}]] {
state " " as 28e34b06765df42bfe547f59adbbdc78_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c7af35c6c4787b52247f8f7df6494c89 [[$./start_at#ac7af35c6c4787b52247f8f7df6494c89 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 5f1e530e05661d5ce9016d64beadd0eb [[$./start_at#a5f1e530e05661d5ce9016d64beadd0eb {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 28e34b06765df42bfe547f59adbbdc78_exit  <<exitPoint>>
}
state " " as dcfb4d1d3a1e13e9cf250362ebb2e31d_exit  <<exitPoint>>
}


start --> dcfb4d1d3a1e13e9cf250362ebb2e31d_entry 
dcfb4d1d3a1e13e9cf250362ebb2e31d_entry --> 5f3821a5a6c87cf985451109523c25e4 
5f3821a5a6c87cf985451109523c25e4 --> dcfb4d1d3a1e13e9cf250362ebb2e31d_exit  : yes
5f3821a5a6c87cf985451109523c25e4 -[#red]-> 28e34b06765df42bfe547f59adbbdc78_entry  : no

28e34b06765df42bfe547f59adbbdc78_entry --> c7af35c6c4787b52247f8f7df6494c89 
c7af35c6c4787b52247f8f7df6494c89 --> 28e34b06765df42bfe547f59adbbdc78_exit  : yes
c7af35c6c4787b52247f8f7df6494c89 -[#red]-> 5f1e530e05661d5ce9016d64beadd0eb  : no

5f1e530e05661d5ce9016d64beadd0eb --> 28e34b06765df42bfe547f59adbbdc78_exit  : yes
5f1e530e05661d5ce9016d64beadd0eb -[#red]-> end  : no
28e34b06765df42bfe547f59adbbdc78_exit --> dcfb4d1d3a1e13e9cf250362ebb2e31d_exit 
dcfb4d1d3a1e13e9cf250362ebb2e31d_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac7af35c6c4787b52247f8f7df6494c89



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a5f3821a5a6c87cf985451109523c25e4



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a5f1e530e05661d5ce9016d64beadd0eb



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







