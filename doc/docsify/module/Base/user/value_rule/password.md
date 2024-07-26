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
state "[条件组]OR" as d94f6ef86eec447152dab9070fc4653d [[$./password#ad94f6ef86eec447152dab9070fc4653d {"[条件组]OR"}]] {
state " " as d94f6ef86eec447152dab9070fc4653d_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 7011e1f448c14606006ae8074454535b [[$./password#a7011e1f448c14606006ae8074454535b {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 651d6263bf8a062e6f8793b1a53feee1 [[$./password#a651d6263bf8a062e6f8793b1a53feee1 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as cc399acdbeaa2c5984f278a13a67cc48 [[$./password#acc399acdbeaa2c5984f278a13a67cc48 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as d94f6ef86eec447152dab9070fc4653d_exit  <<exitPoint>>
}


start --> d94f6ef86eec447152dab9070fc4653d_entry 
d94f6ef86eec447152dab9070fc4653d_entry --> 7011e1f448c14606006ae8074454535b 
7011e1f448c14606006ae8074454535b --> d94f6ef86eec447152dab9070fc4653d_exit  : yes
7011e1f448c14606006ae8074454535b -[#red]-> 651d6263bf8a062e6f8793b1a53feee1  : no

651d6263bf8a062e6f8793b1a53feee1 --> d94f6ef86eec447152dab9070fc4653d_exit  : yes
651d6263bf8a062e6f8793b1a53feee1 -[#red]-> cc399acdbeaa2c5984f278a13a67cc48  : no

cc399acdbeaa2c5984f278a13a67cc48 --> d94f6ef86eec447152dab9070fc4653d_exit  : yes
cc399acdbeaa2c5984f278a13a67cc48 -[#red]-> end  : no
d94f6ef86eec447152dab9070fc4653d_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 值为空(Nil) :id=a7011e1f448c14606006ae8074454535b



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=a651d6263bf8a062e6f8793b1a53feee1



`new_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=acc399acdbeaa2c5984f278a13a67cc48



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
state "默认字符串长度" as bcee7f33cdf0c245d373af227e52bd90 [[$./password#abcee7f33cdf0c245d373af227e52bd90 {"默认字符串长度"}]]


start --> bcee7f33cdf0c245d373af227e52bd90 
bcee7f33cdf0c245d373af227e52bd90 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=abcee7f33cdf0c245d373af227e52bd90


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







