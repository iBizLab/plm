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
state "[条件组]OR" as dee929f145faef2e7f36c08280edf20f [[$./password#adee929f145faef2e7f36c08280edf20f {"[条件组]OR"}]] {
state " " as dee929f145faef2e7f36c08280edf20f_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as fc6a01f1ead9313059a096823d7e4895 [[$./password#afc6a01f1ead9313059a096823d7e4895 {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 59dc8499c147a39ebe91139da7d79aff [[$./password#a59dc8499c147a39ebe91139da7d79aff {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as a9628b8e78cca9c4a4a71ccd7e2fddf5 [[$./password#aa9628b8e78cca9c4a4a71ccd7e2fddf5 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as dee929f145faef2e7f36c08280edf20f_exit  <<exitPoint>>
}


start --> dee929f145faef2e7f36c08280edf20f_entry 
dee929f145faef2e7f36c08280edf20f_entry --> fc6a01f1ead9313059a096823d7e4895 
fc6a01f1ead9313059a096823d7e4895 --> dee929f145faef2e7f36c08280edf20f_exit  : yes
fc6a01f1ead9313059a096823d7e4895 -[#red]-> 59dc8499c147a39ebe91139da7d79aff  : no

59dc8499c147a39ebe91139da7d79aff --> dee929f145faef2e7f36c08280edf20f_exit  : yes
59dc8499c147a39ebe91139da7d79aff -[#red]-> a9628b8e78cca9c4a4a71ccd7e2fddf5  : no

a9628b8e78cca9c4a4a71ccd7e2fddf5 --> dee929f145faef2e7f36c08280edf20f_exit  : yes
a9628b8e78cca9c4a4a71ccd7e2fddf5 -[#red]-> end  : no
dee929f145faef2e7f36c08280edf20f_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=aa9628b8e78cca9c4a4a71ccd7e2fddf5



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (sure_password) 值为空(Nil) :id=afc6a01f1ead9313059a096823d7e4895



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=a59dc8499c147a39ebe91139da7d79aff



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
state "默认字符串长度" as 530b943e9d24579cf1d523f206e843a7 [[$./password#a530b943e9d24579cf1d523f206e843a7 {"默认字符串长度"}]]


start --> 530b943e9d24579cf1d523f206e843a7 
530b943e9d24579cf1d523f206e843a7 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a530b943e9d24579cf1d523f206e843a7


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







