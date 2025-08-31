## 密码(PASSWORD) <!-- {docsify-ignore-all} -->

   

### 两次密码不一致 :id=PASSWORD

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
state "[条件组]OR" as 452dccee8065abc3d2e12f5e2379234a [[$./password#a452dccee8065abc3d2e12f5e2379234a {"[条件组]OR"}]] {
state " " as 452dccee8065abc3d2e12f5e2379234a_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 7a37053c915ca1195fb7333b6f19137f [[$./password#a7a37053c915ca1195fb7333b6f19137f {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 592922bb4b34342b3f3f7b94eba06348 [[$./password#a592922bb4b34342b3f3f7b94eba06348 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 5f60bb7d42b4767fe40b81eb63afd92a [[$./password#a5f60bb7d42b4767fe40b81eb63afd92a {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 452dccee8065abc3d2e12f5e2379234a_exit  <<exitPoint>>
}


start --> 452dccee8065abc3d2e12f5e2379234a_entry 
452dccee8065abc3d2e12f5e2379234a_entry --> 7a37053c915ca1195fb7333b6f19137f 
7a37053c915ca1195fb7333b6f19137f --> 452dccee8065abc3d2e12f5e2379234a_exit  : yes
7a37053c915ca1195fb7333b6f19137f -[#red]-> 592922bb4b34342b3f3f7b94eba06348  : no

592922bb4b34342b3f3f7b94eba06348 --> 452dccee8065abc3d2e12f5e2379234a_exit  : yes
592922bb4b34342b3f3f7b94eba06348 -[#red]-> 5f60bb7d42b4767fe40b81eb63afd92a  : no

5f60bb7d42b4767fe40b81eb63afd92a --> 452dccee8065abc3d2e12f5e2379234a_exit  : yes
5f60bb7d42b4767fe40b81eb63afd92a -[#red]-> end  : no
452dccee8065abc3d2e12f5e2379234a_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a5f60bb7d42b4767fe40b81eb63afd92a



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (sure_password) 值为空(Nil) :id=a7a37053c915ca1195fb7333b6f19137f



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=a592922bb4b34342b3f3f7b94eba06348



`new_password` ISNULL 


### 默认规则 :id=Default

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
state "默认字符串长度" as 9159b4846324bcdf77fc8f7571dfa3c8 [[$./password#a9159b4846324bcdf77fc8f7571dfa3c8 {"默认字符串长度"}]]


start --> 9159b4846324bcdf77fc8f7571dfa3c8 
9159b4846324bcdf77fc8f7571dfa3c8 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a9159b4846324bcdf77fc8f7571dfa3c8


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







