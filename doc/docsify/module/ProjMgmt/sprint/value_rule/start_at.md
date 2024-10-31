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
state "[条件组]OR" as a932843044b7dc0a5c248a7771a3af3e [[$./start_at#aa932843044b7dc0a5c248a7771a3af3e {"[条件组]OR"}]] {
state " " as a932843044b7dc0a5c248a7771a3af3e_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 3cf0fc3410def7bc0e2dd3d382df43b9 [[$./start_at#a3cf0fc3410def7bc0e2dd3d382df43b9 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 07cc74d644b187b2351062d72ad09403 [[$./start_at#a07cc74d644b187b2351062d72ad09403 {"[条件组]OR"}]] {
state " " as 07cc74d644b187b2351062d72ad09403_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as cf695888e1bb71e81186a5cdde568d45 [[$./start_at#acf695888e1bb71e81186a5cdde568d45 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as d7ad4424dbc6ddc65c9d0a6c34d8cf82 [[$./start_at#ad7ad4424dbc6ddc65c9d0a6c34d8cf82 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 07cc74d644b187b2351062d72ad09403_exit  <<exitPoint>>
}
state " " as a932843044b7dc0a5c248a7771a3af3e_exit  <<exitPoint>>
}


start --> a932843044b7dc0a5c248a7771a3af3e_entry 
a932843044b7dc0a5c248a7771a3af3e_entry --> 3cf0fc3410def7bc0e2dd3d382df43b9 
3cf0fc3410def7bc0e2dd3d382df43b9 --> a932843044b7dc0a5c248a7771a3af3e_exit  : yes
3cf0fc3410def7bc0e2dd3d382df43b9 -[#red]-> 07cc74d644b187b2351062d72ad09403_entry  : no

07cc74d644b187b2351062d72ad09403_entry --> cf695888e1bb71e81186a5cdde568d45 
cf695888e1bb71e81186a5cdde568d45 --> 07cc74d644b187b2351062d72ad09403_exit  : yes
cf695888e1bb71e81186a5cdde568d45 -[#red]-> d7ad4424dbc6ddc65c9d0a6c34d8cf82  : no

d7ad4424dbc6ddc65c9d0a6c34d8cf82 --> 07cc74d644b187b2351062d72ad09403_exit  : yes
d7ad4424dbc6ddc65c9d0a6c34d8cf82 -[#red]-> end  : no
07cc74d644b187b2351062d72ad09403_exit --> a932843044b7dc0a5c248a7771a3af3e_exit 
a932843044b7dc0a5c248a7771a3af3e_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=acf695888e1bb71e81186a5cdde568d45



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a3cf0fc3410def7bc0e2dd3d382df43b9



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ad7ad4424dbc6ddc65c9d0a6c34d8cf82



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







