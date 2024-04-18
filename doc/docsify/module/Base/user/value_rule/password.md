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
state "[条件组]OR" as 3336a32b8c6b65f832401f0d8fc25dee [[$./password#a3336a32b8c6b65f832401f0d8fc25dee {"[条件组]OR"}]] {
state " " as 3336a32b8c6b65f832401f0d8fc25dee_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 6f568024de35d24d1cbb50fb64a16750 [[$./password#a6f568024de35d24d1cbb50fb64a16750 {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 84d16d56613c88b3573e5fec5d504642 [[$./password#a84d16d56613c88b3573e5fec5d504642 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 51f5c33bad40fd9d1c0b0d3221db00f4 [[$./password#a51f5c33bad40fd9d1c0b0d3221db00f4 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 3336a32b8c6b65f832401f0d8fc25dee_exit  <<exitPoint>>
}


start --> 3336a32b8c6b65f832401f0d8fc25dee_entry 
3336a32b8c6b65f832401f0d8fc25dee_entry --> 6f568024de35d24d1cbb50fb64a16750 
6f568024de35d24d1cbb50fb64a16750 --> 3336a32b8c6b65f832401f0d8fc25dee_exit  : yes
6f568024de35d24d1cbb50fb64a16750 -[#red]-> 84d16d56613c88b3573e5fec5d504642  : no

84d16d56613c88b3573e5fec5d504642 --> 3336a32b8c6b65f832401f0d8fc25dee_exit  : yes
84d16d56613c88b3573e5fec5d504642 -[#red]-> 51f5c33bad40fd9d1c0b0d3221db00f4  : no

51f5c33bad40fd9d1c0b0d3221db00f4 --> 3336a32b8c6b65f832401f0d8fc25dee_exit  : yes
51f5c33bad40fd9d1c0b0d3221db00f4 -[#red]-> end  : no
3336a32b8c6b65f832401f0d8fc25dee_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a51f5c33bad40fd9d1c0b0d3221db00f4



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (new_password) 值为空(Nil) :id=a84d16d56613c88b3573e5fec5d504642



`new_password` ISNULL 

##### (sure_password) 值为空(Nil) :id=a6f568024de35d24d1cbb50fb64a16750



`sure_password` ISNULL 


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
state "默认字符串长度" as 6d0e946a6468cca9954d7642999d2647 [[$./password#a6d0e946a6468cca9954d7642999d2647 {"默认字符串长度"}]]


start --> 6d0e946a6468cca9954d7642999d2647 
6d0e946a6468cca9954d7642999d2647 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a6d0e946a6468cca9954d7642999d2647


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







