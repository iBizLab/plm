## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 9688f72435819998a7b716bfee9ee103 [[$./end_at#a9688f72435819998a7b716bfee9ee103 {"[条件组]OR"}]] {
state " " as 9688f72435819998a7b716bfee9ee103_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as da8e02e894b4c2db0bd54b72ae26d62e [[$./end_at#ada8e02e894b4c2db0bd54b72ae26d62e {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 81ece5aad0e2f0dbfa501555f77ff5e2 [[$./end_at#a81ece5aad0e2f0dbfa501555f77ff5e2 {"[条件组]OR"}]] {
state " " as 81ece5aad0e2f0dbfa501555f77ff5e2_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 2b6bef0a4821690d96696b4142ed1603 [[$./end_at#a2b6bef0a4821690d96696b4142ed1603 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 82aec4875b7f68d03f18a352fa3c2353 [[$./end_at#a82aec4875b7f68d03f18a352fa3c2353 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 81ece5aad0e2f0dbfa501555f77ff5e2_exit  <<exitPoint>>
}
state " " as 9688f72435819998a7b716bfee9ee103_exit  <<exitPoint>>
}


start --> 9688f72435819998a7b716bfee9ee103_entry 
9688f72435819998a7b716bfee9ee103_entry --> da8e02e894b4c2db0bd54b72ae26d62e 
da8e02e894b4c2db0bd54b72ae26d62e --> 9688f72435819998a7b716bfee9ee103_exit  : yes
da8e02e894b4c2db0bd54b72ae26d62e -[#red]-> 81ece5aad0e2f0dbfa501555f77ff5e2_entry  : no

81ece5aad0e2f0dbfa501555f77ff5e2_entry --> 2b6bef0a4821690d96696b4142ed1603 
2b6bef0a4821690d96696b4142ed1603 --> 81ece5aad0e2f0dbfa501555f77ff5e2_exit  : yes
2b6bef0a4821690d96696b4142ed1603 -[#red]-> 82aec4875b7f68d03f18a352fa3c2353  : no

82aec4875b7f68d03f18a352fa3c2353 --> 81ece5aad0e2f0dbfa501555f77ff5e2_exit  : yes
82aec4875b7f68d03f18a352fa3c2353 -[#red]-> end  : no
81ece5aad0e2f0dbfa501555f77ff5e2_exit --> 9688f72435819998a7b716bfee9ee103_exit 
9688f72435819998a7b716bfee9ee103_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a82aec4875b7f68d03f18a352fa3c2353



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a2b6bef0a4821690d96696b4142ed1603



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ada8e02e894b4c2db0bd54b72ae26d62e



`END_AT(结束时间)` ISNULL 






