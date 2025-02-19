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
state "[条件组]OR" as 2793a9360a87061848e8b577163a56e4 [[$./start_at#a2793a9360a87061848e8b577163a56e4 {"[条件组]OR"}]] {
state " " as 2793a9360a87061848e8b577163a56e4_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 779ea7aa8f62e2ab79bd82d1115b4615 [[$./start_at#a779ea7aa8f62e2ab79bd82d1115b4615 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1a36a61b1da3e232f31d62aad898551b [[$./start_at#a1a36a61b1da3e232f31d62aad898551b {"[条件组]OR"}]] {
state " " as 1a36a61b1da3e232f31d62aad898551b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a1f8d905ba782393fd807520f044eedb [[$./start_at#aa1f8d905ba782393fd807520f044eedb {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 73bbda1adda9781c6e5866e7babd65e0 [[$./start_at#a73bbda1adda9781c6e5866e7babd65e0 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 1a36a61b1da3e232f31d62aad898551b_exit  <<exitPoint>>
}
state " " as 2793a9360a87061848e8b577163a56e4_exit  <<exitPoint>>
}


start --> 2793a9360a87061848e8b577163a56e4_entry 
2793a9360a87061848e8b577163a56e4_entry --> 779ea7aa8f62e2ab79bd82d1115b4615 
779ea7aa8f62e2ab79bd82d1115b4615 --> 2793a9360a87061848e8b577163a56e4_exit  : yes
779ea7aa8f62e2ab79bd82d1115b4615 -[#red]-> 1a36a61b1da3e232f31d62aad898551b_entry  : no

1a36a61b1da3e232f31d62aad898551b_entry --> a1f8d905ba782393fd807520f044eedb 
a1f8d905ba782393fd807520f044eedb --> 1a36a61b1da3e232f31d62aad898551b_exit  : yes
a1f8d905ba782393fd807520f044eedb -[#red]-> 73bbda1adda9781c6e5866e7babd65e0  : no

73bbda1adda9781c6e5866e7babd65e0 --> 1a36a61b1da3e232f31d62aad898551b_exit  : yes
73bbda1adda9781c6e5866e7babd65e0 -[#red]-> end  : no
1a36a61b1da3e232f31d62aad898551b_exit --> 2793a9360a87061848e8b577163a56e4_exit 
2793a9360a87061848e8b577163a56e4_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a779ea7aa8f62e2ab79bd82d1115b4615



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aa1f8d905ba782393fd807520f044eedb



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a73bbda1adda9781c6e5866e7babd65e0



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







