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
state "[条件组]OR" as 6bebc71e4592ceadf99083971db78c1d [[$./start_at#a6bebc71e4592ceadf99083971db78c1d {"[条件组]OR"}]] {
state " " as 6bebc71e4592ceadf99083971db78c1d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 51a170ddcfd147f154c8fcacf2629abd [[$./start_at#a51a170ddcfd147f154c8fcacf2629abd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7c1b5b67e17a0c926f92179e8f59c39e [[$./start_at#a7c1b5b67e17a0c926f92179e8f59c39e {"[条件组]OR"}]] {
state " " as 7c1b5b67e17a0c926f92179e8f59c39e_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d40bed763976f02fd7308611f60c50bb [[$./start_at#ad40bed763976f02fd7308611f60c50bb {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 6d16b76725d3738903362f81cb319739 [[$./start_at#a6d16b76725d3738903362f81cb319739 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 7c1b5b67e17a0c926f92179e8f59c39e_exit  <<exitPoint>>
}
state " " as 6bebc71e4592ceadf99083971db78c1d_exit  <<exitPoint>>
}


start --> 6bebc71e4592ceadf99083971db78c1d_entry 
6bebc71e4592ceadf99083971db78c1d_entry --> 51a170ddcfd147f154c8fcacf2629abd 
51a170ddcfd147f154c8fcacf2629abd --> 6bebc71e4592ceadf99083971db78c1d_exit  : yes
51a170ddcfd147f154c8fcacf2629abd -[#red]-> 7c1b5b67e17a0c926f92179e8f59c39e_entry  : no

7c1b5b67e17a0c926f92179e8f59c39e_entry --> d40bed763976f02fd7308611f60c50bb 
d40bed763976f02fd7308611f60c50bb --> 7c1b5b67e17a0c926f92179e8f59c39e_exit  : yes
d40bed763976f02fd7308611f60c50bb -[#red]-> 6d16b76725d3738903362f81cb319739  : no

6d16b76725d3738903362f81cb319739 --> 7c1b5b67e17a0c926f92179e8f59c39e_exit  : yes
6d16b76725d3738903362f81cb319739 -[#red]-> end  : no
7c1b5b67e17a0c926f92179e8f59c39e_exit --> 6bebc71e4592ceadf99083971db78c1d_exit 
6bebc71e4592ceadf99083971db78c1d_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a6d16b76725d3738903362f81cb319739



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a51a170ddcfd147f154c8fcacf2629abd



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ad40bed763976f02fd7308611f60c50bb



`END_AT(结束时间)` ISNULL 






