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
state "[条件组]OR" as 9342d5b0cd1c671758159cd20ef6c10c [[$./start_at#a9342d5b0cd1c671758159cd20ef6c10c {"[条件组]OR"}]] {
state " " as 9342d5b0cd1c671758159cd20ef6c10c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1dc3b73d4b1f7f4c1b2cc3b0a390d152 [[$./start_at#a1dc3b73d4b1f7f4c1b2cc3b0a390d152 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as abd072aa5f3323e4508f31616967aeff [[$./start_at#aabd072aa5f3323e4508f31616967aeff {"[条件组]OR"}]] {
state " " as abd072aa5f3323e4508f31616967aeff_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 537ae38084ae27febe8c7ff3d4bea543 [[$./start_at#a537ae38084ae27febe8c7ff3d4bea543 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as dd8352d87d9db12fe5f377004782c9ba [[$./start_at#add8352d87d9db12fe5f377004782c9ba {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as abd072aa5f3323e4508f31616967aeff_exit  <<exitPoint>>
}
state " " as 9342d5b0cd1c671758159cd20ef6c10c_exit  <<exitPoint>>
}


start --> 9342d5b0cd1c671758159cd20ef6c10c_entry 
9342d5b0cd1c671758159cd20ef6c10c_entry --> 1dc3b73d4b1f7f4c1b2cc3b0a390d152 
1dc3b73d4b1f7f4c1b2cc3b0a390d152 --> 9342d5b0cd1c671758159cd20ef6c10c_exit  : yes
1dc3b73d4b1f7f4c1b2cc3b0a390d152 -[#red]-> abd072aa5f3323e4508f31616967aeff_entry  : no

abd072aa5f3323e4508f31616967aeff_entry --> 537ae38084ae27febe8c7ff3d4bea543 
537ae38084ae27febe8c7ff3d4bea543 --> abd072aa5f3323e4508f31616967aeff_exit  : yes
537ae38084ae27febe8c7ff3d4bea543 -[#red]-> dd8352d87d9db12fe5f377004782c9ba  : no

dd8352d87d9db12fe5f377004782c9ba --> abd072aa5f3323e4508f31616967aeff_exit  : yes
dd8352d87d9db12fe5f377004782c9ba -[#red]-> end  : no
abd072aa5f3323e4508f31616967aeff_exit --> 9342d5b0cd1c671758159cd20ef6c10c_exit 
9342d5b0cd1c671758159cd20ef6c10c_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=add8352d87d9db12fe5f377004782c9ba



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a537ae38084ae27febe8c7ff3d4bea543



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a1dc3b73d4b1f7f4c1b2cc3b0a390d152



`START_AT(开始时间)` ISNULL 






