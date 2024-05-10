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
state "[条件组]OR" as 2446e4edc90df5979861469e5462cb57 [[$./end_at#a2446e4edc90df5979861469e5462cb57 {"[条件组]OR"}]] {
state " " as 2446e4edc90df5979861469e5462cb57_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b5e07e188578bcd4e28abb3381abc600 [[$./end_at#ab5e07e188578bcd4e28abb3381abc600 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e2b5efae3cdb3f40c9b3c18d145d64b0 [[$./end_at#ae2b5efae3cdb3f40c9b3c18d145d64b0 {"[条件组]OR"}]] {
state " " as e2b5efae3cdb3f40c9b3c18d145d64b0_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 0fe6d7dff859b56f632c433382413b23 [[$./end_at#a0fe6d7dff859b56f632c433382413b23 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 61fffc61ace48ed7076e14224c3ba06a [[$./end_at#a61fffc61ace48ed7076e14224c3ba06a {"[常规条件] 值为空(Nil)"}]]
state " " as e2b5efae3cdb3f40c9b3c18d145d64b0_exit  <<exitPoint>>
}
state " " as 2446e4edc90df5979861469e5462cb57_exit  <<exitPoint>>
}


start --> 2446e4edc90df5979861469e5462cb57_entry 
2446e4edc90df5979861469e5462cb57_entry --> b5e07e188578bcd4e28abb3381abc600 
b5e07e188578bcd4e28abb3381abc600 --> 2446e4edc90df5979861469e5462cb57_exit  : yes
b5e07e188578bcd4e28abb3381abc600 -[#red]-> e2b5efae3cdb3f40c9b3c18d145d64b0_entry  : no

e2b5efae3cdb3f40c9b3c18d145d64b0_entry --> 0fe6d7dff859b56f632c433382413b23 
0fe6d7dff859b56f632c433382413b23 --> e2b5efae3cdb3f40c9b3c18d145d64b0_exit  : yes
0fe6d7dff859b56f632c433382413b23 -[#red]-> 61fffc61ace48ed7076e14224c3ba06a  : no

61fffc61ace48ed7076e14224c3ba06a --> e2b5efae3cdb3f40c9b3c18d145d64b0_exit  : yes
61fffc61ace48ed7076e14224c3ba06a -[#red]-> end  : no
e2b5efae3cdb3f40c9b3c18d145d64b0_exit --> 2446e4edc90df5979861469e5462cb57_exit 
2446e4edc90df5979861469e5462cb57_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a0fe6d7dff859b56f632c433382413b23



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a61fffc61ace48ed7076e14224c3ba06a



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ab5e07e188578bcd4e28abb3381abc600



`END_AT(结束时间)` ISNULL 






