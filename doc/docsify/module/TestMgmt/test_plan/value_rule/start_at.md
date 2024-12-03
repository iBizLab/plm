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
state "[条件组]OR" as 5e7392dcec0bc0e0345e2d3aff374f57 [[$./start_at#a5e7392dcec0bc0e0345e2d3aff374f57 {"[条件组]OR"}]] {
state " " as 5e7392dcec0bc0e0345e2d3aff374f57_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 504d87c44c9e66a1dbc485d5210508aa [[$./start_at#a504d87c44c9e66a1dbc485d5210508aa {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 11e83d984dd612fe47e83d6db21d20f1 [[$./start_at#a11e83d984dd612fe47e83d6db21d20f1 {"[条件组]OR"}]] {
state " " as 11e83d984dd612fe47e83d6db21d20f1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 6a9507f4ba45313f8a4624a11cd8e06b [[$./start_at#a6a9507f4ba45313f8a4624a11cd8e06b {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 810643235565355635e906c06fb4913a [[$./start_at#a810643235565355635e906c06fb4913a {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 11e83d984dd612fe47e83d6db21d20f1_exit  <<exitPoint>>
}
state " " as 5e7392dcec0bc0e0345e2d3aff374f57_exit  <<exitPoint>>
}


start --> 5e7392dcec0bc0e0345e2d3aff374f57_entry 
5e7392dcec0bc0e0345e2d3aff374f57_entry --> 504d87c44c9e66a1dbc485d5210508aa 
504d87c44c9e66a1dbc485d5210508aa --> 5e7392dcec0bc0e0345e2d3aff374f57_exit  : yes
504d87c44c9e66a1dbc485d5210508aa -[#red]-> 11e83d984dd612fe47e83d6db21d20f1_entry  : no

11e83d984dd612fe47e83d6db21d20f1_entry --> 6a9507f4ba45313f8a4624a11cd8e06b 
6a9507f4ba45313f8a4624a11cd8e06b --> 11e83d984dd612fe47e83d6db21d20f1_exit  : yes
6a9507f4ba45313f8a4624a11cd8e06b -[#red]-> 810643235565355635e906c06fb4913a  : no

810643235565355635e906c06fb4913a --> 11e83d984dd612fe47e83d6db21d20f1_exit  : yes
810643235565355635e906c06fb4913a -[#red]-> end  : no
11e83d984dd612fe47e83d6db21d20f1_exit --> 5e7392dcec0bc0e0345e2d3aff374f57_exit 
5e7392dcec0bc0e0345e2d3aff374f57_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a810643235565355635e906c06fb4913a



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a504d87c44c9e66a1dbc485d5210508aa



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a6a9507f4ba45313f8a4624a11cd8e06b



`END_AT(计划结束)` ISNULL 






