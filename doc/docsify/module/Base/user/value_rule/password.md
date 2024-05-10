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
state "[条件组]OR" as 437a5ef9a0c33e917c41b79df4ac7ee5 [[$./password#a437a5ef9a0c33e917c41b79df4ac7ee5 {"[条件组]OR"}]] {
state " " as 437a5ef9a0c33e917c41b79df4ac7ee5_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as c1708b06d3cabcf75bf5ea0811264cf0 [[$./password#ac1708b06d3cabcf75bf5ea0811264cf0 {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as bbcdb2e690e42c4465a7a482c6044676 [[$./password#abbcdb2e690e42c4465a7a482c6044676 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 059005480467d0da7f989f82d923615d [[$./password#a059005480467d0da7f989f82d923615d {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 437a5ef9a0c33e917c41b79df4ac7ee5_exit  <<exitPoint>>
}


start --> 437a5ef9a0c33e917c41b79df4ac7ee5_entry 
437a5ef9a0c33e917c41b79df4ac7ee5_entry --> c1708b06d3cabcf75bf5ea0811264cf0 
c1708b06d3cabcf75bf5ea0811264cf0 --> 437a5ef9a0c33e917c41b79df4ac7ee5_exit  : yes
c1708b06d3cabcf75bf5ea0811264cf0 -[#red]-> bbcdb2e690e42c4465a7a482c6044676  : no

bbcdb2e690e42c4465a7a482c6044676 --> 437a5ef9a0c33e917c41b79df4ac7ee5_exit  : yes
bbcdb2e690e42c4465a7a482c6044676 -[#red]-> 059005480467d0da7f989f82d923615d  : no

059005480467d0da7f989f82d923615d --> 437a5ef9a0c33e917c41b79df4ac7ee5_exit  : yes
059005480467d0da7f989f82d923615d -[#red]-> end  : no
437a5ef9a0c33e917c41b79df4ac7ee5_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a059005480467d0da7f989f82d923615d



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (sure_password) 值为空(Nil) :id=ac1708b06d3cabcf75bf5ea0811264cf0



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=abbcdb2e690e42c4465a7a482c6044676



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
state "默认字符串长度" as 9b9ca9043ef32cbc6fff3f55136d3fe4 [[$./password#a9b9ca9043ef32cbc6fff3f55136d3fe4 {"默认字符串长度"}]]


start --> 9b9ca9043ef32cbc6fff3f55136d3fe4 
9b9ca9043ef32cbc6fff3f55136d3fe4 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a9b9ca9043ef32cbc6fff3f55136d3fe4


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







