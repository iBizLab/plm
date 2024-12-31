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
state "[条件组]OR" as 162cab15d1dc29ceeff1e11afcf88298 [[$./password#a162cab15d1dc29ceeff1e11afcf88298 {"[条件组]OR"}]] {
state " " as 162cab15d1dc29ceeff1e11afcf88298_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 8e7a6f6a9457a28a67b8eefc8113c7de [[$./password#a8e7a6f6a9457a28a67b8eefc8113c7de {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 66a94df72887fc732017c446f897dd01 [[$./password#a66a94df72887fc732017c446f897dd01 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 22f2103a9d69dfd6d716f2e69a5c1e32 [[$./password#a22f2103a9d69dfd6d716f2e69a5c1e32 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 162cab15d1dc29ceeff1e11afcf88298_exit  <<exitPoint>>
}


start --> 162cab15d1dc29ceeff1e11afcf88298_entry 
162cab15d1dc29ceeff1e11afcf88298_entry --> 8e7a6f6a9457a28a67b8eefc8113c7de 
8e7a6f6a9457a28a67b8eefc8113c7de --> 162cab15d1dc29ceeff1e11afcf88298_exit  : yes
8e7a6f6a9457a28a67b8eefc8113c7de -[#red]-> 66a94df72887fc732017c446f897dd01  : no

66a94df72887fc732017c446f897dd01 --> 162cab15d1dc29ceeff1e11afcf88298_exit  : yes
66a94df72887fc732017c446f897dd01 -[#red]-> 22f2103a9d69dfd6d716f2e69a5c1e32  : no

22f2103a9d69dfd6d716f2e69a5c1e32 --> 162cab15d1dc29ceeff1e11afcf88298_exit  : yes
22f2103a9d69dfd6d716f2e69a5c1e32 -[#red]-> end  : no
162cab15d1dc29ceeff1e11afcf88298_exit --> end 


@enduml
```

#### 条件说明

##### (new_password) 值为空(Nil) :id=a66a94df72887fc732017c446f897dd01



`new_password` ISNULL 

##### (sure_password) 值为空(Nil) :id=a8e7a6f6a9457a28a67b8eefc8113c7de



`sure_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a22f2103a9d69dfd6d716f2e69a5c1e32



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
state "默认字符串长度" as f0f3f01ccd56fb0f213625213a803d0a [[$./password#af0f3f01ccd56fb0f213625213a803d0a {"默认字符串长度"}]]


start --> f0f3f01ccd56fb0f213625213a803d0a 
f0f3f01ccd56fb0f213625213a803d0a --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af0f3f01ccd56fb0f213625213a803d0a


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







