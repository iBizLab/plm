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
state "[条件组]OR" as 4d08abc78bc936c423379af5e8759ea5 [[$./end_at#a4d08abc78bc936c423379af5e8759ea5 {"[条件组]OR"}]] {
state " " as 4d08abc78bc936c423379af5e8759ea5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 48069a851f288a09dff82a24b6e974f8 [[$./end_at#a48069a851f288a09dff82a24b6e974f8 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 244bf056bd33e88cabd8a578711092f9 [[$./end_at#a244bf056bd33e88cabd8a578711092f9 {"[条件组]OR"}]] {
state " " as 244bf056bd33e88cabd8a578711092f9_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ea76d1c39a0ee66f8969197a5ed95f30 [[$./end_at#aea76d1c39a0ee66f8969197a5ed95f30 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 41e5234dced75a9b0bf7e026a87e928a [[$./end_at#a41e5234dced75a9b0bf7e026a87e928a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 244bf056bd33e88cabd8a578711092f9_exit  <<exitPoint>>
}
state " " as 4d08abc78bc936c423379af5e8759ea5_exit  <<exitPoint>>
}


start --> 4d08abc78bc936c423379af5e8759ea5_entry 
4d08abc78bc936c423379af5e8759ea5_entry --> 48069a851f288a09dff82a24b6e974f8 
48069a851f288a09dff82a24b6e974f8 --> 4d08abc78bc936c423379af5e8759ea5_exit  : yes
48069a851f288a09dff82a24b6e974f8 -[#red]-> 244bf056bd33e88cabd8a578711092f9_entry  : no

244bf056bd33e88cabd8a578711092f9_entry --> ea76d1c39a0ee66f8969197a5ed95f30 
ea76d1c39a0ee66f8969197a5ed95f30 --> 244bf056bd33e88cabd8a578711092f9_exit  : yes
ea76d1c39a0ee66f8969197a5ed95f30 -[#red]-> 41e5234dced75a9b0bf7e026a87e928a  : no

41e5234dced75a9b0bf7e026a87e928a --> 244bf056bd33e88cabd8a578711092f9_exit  : yes
41e5234dced75a9b0bf7e026a87e928a -[#red]-> end  : no
244bf056bd33e88cabd8a578711092f9_exit --> 4d08abc78bc936c423379af5e8759ea5_exit 
4d08abc78bc936c423379af5e8759ea5_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a41e5234dced75a9b0bf7e026a87e928a



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=aea76d1c39a0ee66f8969197a5ed95f30



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a48069a851f288a09dff82a24b6e974f8



`END_AT(结束时间)` ISNULL 






