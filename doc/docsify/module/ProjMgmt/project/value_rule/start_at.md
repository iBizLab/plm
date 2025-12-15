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
state "[条件组]OR" as 9210d3b26d054f9b57b3d958ec0888a1 [[$./start_at#a9210d3b26d054f9b57b3d958ec0888a1 {"[条件组]OR"}]] {
state " " as 9210d3b26d054f9b57b3d958ec0888a1_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 203da2b9d3c3cb01c485200c07880ea8 [[$./start_at#a203da2b9d3c3cb01c485200c07880ea8 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as a38cb98981e384d060f59e7e522ed720 [[$./start_at#aa38cb98981e384d060f59e7e522ed720 {"[条件组]OR"}]] {
state " " as a38cb98981e384d060f59e7e522ed720_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 495521208d09378f686934f9c13f3ea7 [[$./start_at#a495521208d09378f686934f9c13f3ea7 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as fae0be5ca34fc4882e58ceba7ca6394c [[$./start_at#afae0be5ca34fc4882e58ceba7ca6394c {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as a38cb98981e384d060f59e7e522ed720_exit  <<exitPoint>>
}
state " " as 9210d3b26d054f9b57b3d958ec0888a1_exit  <<exitPoint>>
}


start --> 9210d3b26d054f9b57b3d958ec0888a1_entry 
9210d3b26d054f9b57b3d958ec0888a1_entry --> 203da2b9d3c3cb01c485200c07880ea8 
203da2b9d3c3cb01c485200c07880ea8 --> 9210d3b26d054f9b57b3d958ec0888a1_exit  : yes
203da2b9d3c3cb01c485200c07880ea8 -[#red]-> a38cb98981e384d060f59e7e522ed720_entry  : no

a38cb98981e384d060f59e7e522ed720_entry --> 495521208d09378f686934f9c13f3ea7 
495521208d09378f686934f9c13f3ea7 --> a38cb98981e384d060f59e7e522ed720_exit  : yes
495521208d09378f686934f9c13f3ea7 -[#red]-> fae0be5ca34fc4882e58ceba7ca6394c  : no

fae0be5ca34fc4882e58ceba7ca6394c --> a38cb98981e384d060f59e7e522ed720_exit  : yes
fae0be5ca34fc4882e58ceba7ca6394c -[#red]-> end  : no
a38cb98981e384d060f59e7e522ed720_exit --> 9210d3b26d054f9b57b3d958ec0888a1_exit 
9210d3b26d054f9b57b3d958ec0888a1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a495521208d09378f686934f9c13f3ea7



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=afae0be5ca34fc4882e58ceba7ca6394c



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a203da2b9d3c3cb01c485200c07880ea8



`START_AT(开始时间)` ISNULL 






