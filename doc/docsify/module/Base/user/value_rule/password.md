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
state "[条件组]OR" as fda1156c74a4bbe437fd38148bc3ffe3 [[$./password#afda1156c74a4bbe437fd38148bc3ffe3 {"[条件组]OR"}]] {
state " " as fda1156c74a4bbe437fd38148bc3ffe3_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as d3e4d84d8f78d4b47c4f9037c5bf19ff [[$./password#ad3e4d84d8f78d4b47c4f9037c5bf19ff {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as cce2ce2e6614998d366ef466d7bc5b32 [[$./password#acce2ce2e6614998d366ef466d7bc5b32 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as a7f3e05b99d6719bf96805503ea44910 [[$./password#aa7f3e05b99d6719bf96805503ea44910 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as fda1156c74a4bbe437fd38148bc3ffe3_exit  <<exitPoint>>
}


start --> fda1156c74a4bbe437fd38148bc3ffe3_entry 
fda1156c74a4bbe437fd38148bc3ffe3_entry --> d3e4d84d8f78d4b47c4f9037c5bf19ff 
d3e4d84d8f78d4b47c4f9037c5bf19ff --> fda1156c74a4bbe437fd38148bc3ffe3_exit  : yes
d3e4d84d8f78d4b47c4f9037c5bf19ff -[#red]-> cce2ce2e6614998d366ef466d7bc5b32  : no

cce2ce2e6614998d366ef466d7bc5b32 --> fda1156c74a4bbe437fd38148bc3ffe3_exit  : yes
cce2ce2e6614998d366ef466d7bc5b32 -[#red]-> a7f3e05b99d6719bf96805503ea44910  : no

a7f3e05b99d6719bf96805503ea44910 --> fda1156c74a4bbe437fd38148bc3ffe3_exit  : yes
a7f3e05b99d6719bf96805503ea44910 -[#red]-> end  : no
fda1156c74a4bbe437fd38148bc3ffe3_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 值为空(Nil) :id=ad3e4d84d8f78d4b47c4f9037c5bf19ff



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=acce2ce2e6614998d366ef466d7bc5b32



`new_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=aa7f3e05b99d6719bf96805503ea44910



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
state "默认字符串长度" as 8b80f4576259ca8e88f1a4df92d02523 [[$./password#a8b80f4576259ca8e88f1a4df92d02523 {"默认字符串长度"}]]


start --> 8b80f4576259ca8e88f1a4df92d02523 
8b80f4576259ca8e88f1a4df92d02523 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a8b80f4576259ca8e88f1a4df92d02523


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







