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
state "[条件组]OR" as a0b15a84e2b2e6c479e2bbd72e209ebd [[$./start_at#aa0b15a84e2b2e6c479e2bbd72e209ebd {"[条件组]OR"}]] {
state " " as a0b15a84e2b2e6c479e2bbd72e209ebd_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 774a7f8b20e9510a32daabe235034038 [[$./start_at#a774a7f8b20e9510a32daabe235034038 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f331492d719ee97e70ead96ed453d3c9 [[$./start_at#af331492d719ee97e70ead96ed453d3c9 {"[条件组]OR"}]] {
state " " as f331492d719ee97e70ead96ed453d3c9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f646da112fd569a498b8bf13983a7f8c [[$./start_at#af646da112fd569a498b8bf13983a7f8c {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 587df57257ece1dc02819a397af6aec5 [[$./start_at#a587df57257ece1dc02819a397af6aec5 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as f331492d719ee97e70ead96ed453d3c9_exit  <<exitPoint>>
}
state " " as a0b15a84e2b2e6c479e2bbd72e209ebd_exit  <<exitPoint>>
}


start --> a0b15a84e2b2e6c479e2bbd72e209ebd_entry 
a0b15a84e2b2e6c479e2bbd72e209ebd_entry --> 774a7f8b20e9510a32daabe235034038 
774a7f8b20e9510a32daabe235034038 --> a0b15a84e2b2e6c479e2bbd72e209ebd_exit  : yes
774a7f8b20e9510a32daabe235034038 -[#red]-> f331492d719ee97e70ead96ed453d3c9_entry  : no

f331492d719ee97e70ead96ed453d3c9_entry --> f646da112fd569a498b8bf13983a7f8c 
f646da112fd569a498b8bf13983a7f8c --> f331492d719ee97e70ead96ed453d3c9_exit  : yes
f646da112fd569a498b8bf13983a7f8c -[#red]-> 587df57257ece1dc02819a397af6aec5  : no

587df57257ece1dc02819a397af6aec5 --> f331492d719ee97e70ead96ed453d3c9_exit  : yes
587df57257ece1dc02819a397af6aec5 -[#red]-> end  : no
f331492d719ee97e70ead96ed453d3c9_exit --> a0b15a84e2b2e6c479e2bbd72e209ebd_exit 
a0b15a84e2b2e6c479e2bbd72e209ebd_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a774a7f8b20e9510a32daabe235034038



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a587df57257ece1dc02819a397af6aec5



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=af646da112fd569a498b8bf13983a7f8c



`END_AT(截止时间)` ISNULL 






