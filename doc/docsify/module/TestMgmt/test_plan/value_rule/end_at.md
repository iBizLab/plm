## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 34fa48db7e0b689a07be354874ecfb55 [[$./end_at#a34fa48db7e0b689a07be354874ecfb55 {"[条件组]OR"}]] {
state " " as 34fa48db7e0b689a07be354874ecfb55_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 81ec9a6696189a18cc8c9b88fef1e6bf [[$./end_at#a81ec9a6696189a18cc8c9b88fef1e6bf {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as a6300877a40f23626e37d96b373013d8 [[$./end_at#aa6300877a40f23626e37d96b373013d8 {"[条件组]OR"}]] {
state " " as a6300877a40f23626e37d96b373013d8_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b1631afbca0c173b3883ce9fc1526fd7 [[$./end_at#ab1631afbca0c173b3883ce9fc1526fd7 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as cf23fd051fb01b48886091e0f4b7ec71 [[$./end_at#acf23fd051fb01b48886091e0f4b7ec71 {"[常规条件] 值为空(Nil)"}]]
state " " as a6300877a40f23626e37d96b373013d8_exit  <<exitPoint>>
}
state " " as 34fa48db7e0b689a07be354874ecfb55_exit  <<exitPoint>>
}


start --> 34fa48db7e0b689a07be354874ecfb55_entry 
34fa48db7e0b689a07be354874ecfb55_entry --> 81ec9a6696189a18cc8c9b88fef1e6bf 
81ec9a6696189a18cc8c9b88fef1e6bf --> 34fa48db7e0b689a07be354874ecfb55_exit  : yes
81ec9a6696189a18cc8c9b88fef1e6bf -[#red]-> a6300877a40f23626e37d96b373013d8_entry  : no

a6300877a40f23626e37d96b373013d8_entry --> b1631afbca0c173b3883ce9fc1526fd7 
b1631afbca0c173b3883ce9fc1526fd7 --> a6300877a40f23626e37d96b373013d8_exit  : yes
b1631afbca0c173b3883ce9fc1526fd7 -[#red]-> cf23fd051fb01b48886091e0f4b7ec71  : no

cf23fd051fb01b48886091e0f4b7ec71 --> a6300877a40f23626e37d96b373013d8_exit  : yes
cf23fd051fb01b48886091e0f4b7ec71 -[#red]-> end  : no
a6300877a40f23626e37d96b373013d8_exit --> 34fa48db7e0b689a07be354874ecfb55_exit 
34fa48db7e0b689a07be354874ecfb55_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=acf23fd051fb01b48886091e0f4b7ec71



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a81ec9a6696189a18cc8c9b88fef1e6bf



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab1631afbca0c173b3883ce9fc1526fd7



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







