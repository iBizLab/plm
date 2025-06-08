## 截止时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as 915e7552aeb599617a914958d670c708 [[$./end_at#a915e7552aeb599617a914958d670c708 {"[条件组]OR"}]] {
state " " as 915e7552aeb599617a914958d670c708_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c6ad377c0aa2ede99279cab936d2be55 [[$./end_at#ac6ad377c0aa2ede99279cab936d2be55 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7d3acae763ffbbc9b33e72dd3088c0ce [[$./end_at#a7d3acae763ffbbc9b33e72dd3088c0ce {"[条件组]OR"}]] {
state " " as 7d3acae763ffbbc9b33e72dd3088c0ce_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 5a81e3c9e935ec665c63efe5d36c5b8e [[$./end_at#a5a81e3c9e935ec665c63efe5d36c5b8e {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 6c3388590f86a53ef6ad9c5e7c68d730 [[$./end_at#a6c3388590f86a53ef6ad9c5e7c68d730 {"[常规条件] 值为空(Nil)"}]]
state " " as 7d3acae763ffbbc9b33e72dd3088c0ce_exit  <<exitPoint>>
}
state " " as 915e7552aeb599617a914958d670c708_exit  <<exitPoint>>
}


start --> 915e7552aeb599617a914958d670c708_entry 
915e7552aeb599617a914958d670c708_entry --> c6ad377c0aa2ede99279cab936d2be55 
c6ad377c0aa2ede99279cab936d2be55 --> 915e7552aeb599617a914958d670c708_exit  : yes
c6ad377c0aa2ede99279cab936d2be55 -[#red]-> 7d3acae763ffbbc9b33e72dd3088c0ce_entry  : no

7d3acae763ffbbc9b33e72dd3088c0ce_entry --> 5a81e3c9e935ec665c63efe5d36c5b8e 
5a81e3c9e935ec665c63efe5d36c5b8e --> 7d3acae763ffbbc9b33e72dd3088c0ce_exit  : yes
5a81e3c9e935ec665c63efe5d36c5b8e -[#red]-> 6c3388590f86a53ef6ad9c5e7c68d730  : no

6c3388590f86a53ef6ad9c5e7c68d730 --> 7d3acae763ffbbc9b33e72dd3088c0ce_exit  : yes
6c3388590f86a53ef6ad9c5e7c68d730 -[#red]-> end  : no
7d3acae763ffbbc9b33e72dd3088c0ce_exit --> 915e7552aeb599617a914958d670c708_exit 
915e7552aeb599617a914958d670c708_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac6ad377c0aa2ede99279cab936d2be55



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a6c3388590f86a53ef6ad9c5e7c68d730



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a5a81e3c9e935ec665c63efe5d36c5b8e



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







