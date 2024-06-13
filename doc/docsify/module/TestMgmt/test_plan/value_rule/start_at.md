## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as fc69d42d48637f957c5d5285861c66dd [[$./start_at#afc69d42d48637f957c5d5285861c66dd {"[条件组]OR"}]] {
state " " as fc69d42d48637f957c5d5285861c66dd_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d1694973acffd513059f668d119db9ef [[$./start_at#ad1694973acffd513059f668d119db9ef {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as cb96012c492917c90641b7e70ac1df07 [[$./start_at#acb96012c492917c90641b7e70ac1df07 {"[条件组]OR"}]] {
state " " as cb96012c492917c90641b7e70ac1df07_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 02e609fc31eb82965f790178555f17ef [[$./start_at#a02e609fc31eb82965f790178555f17ef {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 133e3cead5a76620e018a82ac99c60ea [[$./start_at#a133e3cead5a76620e018a82ac99c60ea {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as cb96012c492917c90641b7e70ac1df07_exit  <<exitPoint>>
}
state " " as fc69d42d48637f957c5d5285861c66dd_exit  <<exitPoint>>
}


start --> fc69d42d48637f957c5d5285861c66dd_entry 
fc69d42d48637f957c5d5285861c66dd_entry --> d1694973acffd513059f668d119db9ef 
d1694973acffd513059f668d119db9ef --> fc69d42d48637f957c5d5285861c66dd_exit  : yes
d1694973acffd513059f668d119db9ef -[#red]-> cb96012c492917c90641b7e70ac1df07_entry  : no

cb96012c492917c90641b7e70ac1df07_entry --> 02e609fc31eb82965f790178555f17ef 
02e609fc31eb82965f790178555f17ef --> cb96012c492917c90641b7e70ac1df07_exit  : yes
02e609fc31eb82965f790178555f17ef -[#red]-> 133e3cead5a76620e018a82ac99c60ea  : no

133e3cead5a76620e018a82ac99c60ea --> cb96012c492917c90641b7e70ac1df07_exit  : yes
133e3cead5a76620e018a82ac99c60ea -[#red]-> end  : no
cb96012c492917c90641b7e70ac1df07_exit --> fc69d42d48637f957c5d5285861c66dd_exit 
fc69d42d48637f957c5d5285861c66dd_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a133e3cead5a76620e018a82ac99c60ea



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a02e609fc31eb82965f790178555f17ef



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ad1694973acffd513059f668d119db9ef



`START_AT(计划开始)` ISNULL 






