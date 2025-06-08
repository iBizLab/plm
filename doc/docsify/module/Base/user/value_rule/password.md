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
state "[条件组]OR" as fe30b593bd3e30b4b262512686801f0a [[$./password#afe30b593bd3e30b4b262512686801f0a {"[条件组]OR"}]] {
state " " as fe30b593bd3e30b4b262512686801f0a_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 3e4d1303e31b577f7e8d4674afcfe78e [[$./password#a3e4d1303e31b577f7e8d4674afcfe78e {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 7a37053c915ca1195fb7333b6f19137f [[$./password#a7a37053c915ca1195fb7333b6f19137f {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 592922bb4b34342b3f3f7b94eba06348 [[$./password#a592922bb4b34342b3f3f7b94eba06348 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as fe30b593bd3e30b4b262512686801f0a_exit  <<exitPoint>>
}


start --> fe30b593bd3e30b4b262512686801f0a_entry 
fe30b593bd3e30b4b262512686801f0a_entry --> 3e4d1303e31b577f7e8d4674afcfe78e 
3e4d1303e31b577f7e8d4674afcfe78e --> fe30b593bd3e30b4b262512686801f0a_exit  : yes
3e4d1303e31b577f7e8d4674afcfe78e -[#red]-> 7a37053c915ca1195fb7333b6f19137f  : no

7a37053c915ca1195fb7333b6f19137f --> fe30b593bd3e30b4b262512686801f0a_exit  : yes
7a37053c915ca1195fb7333b6f19137f -[#red]-> 592922bb4b34342b3f3f7b94eba06348  : no

592922bb4b34342b3f3f7b94eba06348 --> fe30b593bd3e30b4b262512686801f0a_exit  : yes
592922bb4b34342b3f3f7b94eba06348 -[#red]-> end  : no
fe30b593bd3e30b4b262512686801f0a_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 值为空(Nil) :id=a3e4d1303e31b577f7e8d4674afcfe78e



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=a7a37053c915ca1195fb7333b6f19137f



`new_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a592922bb4b34342b3f3f7b94eba06348



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致



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
state "默认字符串长度" as 7cff8ef83934fdc1003d770e18caef07 [[$./password#a7cff8ef83934fdc1003d770e18caef07 {"默认字符串长度"}]]


start --> 7cff8ef83934fdc1003d770e18caef07 
7cff8ef83934fdc1003d770e18caef07 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a7cff8ef83934fdc1003d770e18caef07


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







