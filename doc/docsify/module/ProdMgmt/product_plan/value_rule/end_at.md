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
state "[条件组]OR" as 7dd064782c6c61bda7f856868639235f [[$./end_at#a7dd064782c6c61bda7f856868639235f {"[条件组]OR"}]] {
state " " as 7dd064782c6c61bda7f856868639235f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 7fa812da9fb88f416f1c2440f10215f1 [[$./end_at#a7fa812da9fb88f416f1c2440f10215f1 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2500c3ce886fd24dc55d097e0ef2e120 [[$./end_at#a2500c3ce886fd24dc55d097e0ef2e120 {"[条件组]OR"}]] {
state " " as 2500c3ce886fd24dc55d097e0ef2e120_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 0619473d0a10aee34104355d5e4a26e9 [[$./end_at#a0619473d0a10aee34104355d5e4a26e9 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as b90bef43c1a85fc7332778aa9229c14a [[$./end_at#ab90bef43c1a85fc7332778aa9229c14a {"[常规条件] 值为空(Nil)"}]]
state " " as 2500c3ce886fd24dc55d097e0ef2e120_exit  <<exitPoint>>
}
state " " as 7dd064782c6c61bda7f856868639235f_exit  <<exitPoint>>
}


start --> 7dd064782c6c61bda7f856868639235f_entry 
7dd064782c6c61bda7f856868639235f_entry --> 7fa812da9fb88f416f1c2440f10215f1 
7fa812da9fb88f416f1c2440f10215f1 --> 7dd064782c6c61bda7f856868639235f_exit  : yes
7fa812da9fb88f416f1c2440f10215f1 -[#red]-> 2500c3ce886fd24dc55d097e0ef2e120_entry  : no

2500c3ce886fd24dc55d097e0ef2e120_entry --> 0619473d0a10aee34104355d5e4a26e9 
0619473d0a10aee34104355d5e4a26e9 --> 2500c3ce886fd24dc55d097e0ef2e120_exit  : yes
0619473d0a10aee34104355d5e4a26e9 -[#red]-> b90bef43c1a85fc7332778aa9229c14a  : no

b90bef43c1a85fc7332778aa9229c14a --> 2500c3ce886fd24dc55d097e0ef2e120_exit  : yes
b90bef43c1a85fc7332778aa9229c14a -[#red]-> end  : no
2500c3ce886fd24dc55d097e0ef2e120_exit --> 7dd064782c6c61bda7f856868639235f_exit 
7dd064782c6c61bda7f856868639235f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a0619473d0a10aee34104355d5e4a26e9



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a7fa812da9fb88f416f1c2440f10215f1



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ab90bef43c1a85fc7332778aa9229c14a



`START_AT(计划开始)` ISNULL 






