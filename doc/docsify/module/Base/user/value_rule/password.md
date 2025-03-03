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
state "[条件组]OR" as f8eb374b5f6f5409c107ddec853895ad [[$./password#af8eb374b5f6f5409c107ddec853895ad {"[条件组]OR"}]] {
state " " as f8eb374b5f6f5409c107ddec853895ad_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as ca812b1359c2831f0b4c38bdf764f20e [[$./password#aca812b1359c2831f0b4c38bdf764f20e {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as a046cf25e76bfffab3bb57a463ad783f [[$./password#aa046cf25e76bfffab3bb57a463ad783f {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 91908353566a0fa0ee3bc570ac07173f [[$./password#a91908353566a0fa0ee3bc570ac07173f {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as f8eb374b5f6f5409c107ddec853895ad_exit  <<exitPoint>>
}


start --> f8eb374b5f6f5409c107ddec853895ad_entry 
f8eb374b5f6f5409c107ddec853895ad_entry --> ca812b1359c2831f0b4c38bdf764f20e 
ca812b1359c2831f0b4c38bdf764f20e --> f8eb374b5f6f5409c107ddec853895ad_exit  : yes
ca812b1359c2831f0b4c38bdf764f20e -[#red]-> a046cf25e76bfffab3bb57a463ad783f  : no

a046cf25e76bfffab3bb57a463ad783f --> f8eb374b5f6f5409c107ddec853895ad_exit  : yes
a046cf25e76bfffab3bb57a463ad783f -[#red]-> 91908353566a0fa0ee3bc570ac07173f  : no

91908353566a0fa0ee3bc570ac07173f --> f8eb374b5f6f5409c107ddec853895ad_exit  : yes
91908353566a0fa0ee3bc570ac07173f -[#red]-> end  : no
f8eb374b5f6f5409c107ddec853895ad_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a91908353566a0fa0ee3bc570ac07173f



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (sure_password) 值为空(Nil) :id=aca812b1359c2831f0b4c38bdf764f20e



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=aa046cf25e76bfffab3bb57a463ad783f



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
state "默认字符串长度" as 5c9ba1b40c23409452654b9ca54f163d [[$./password#a5c9ba1b40c23409452654b9ca54f163d {"默认字符串长度"}]]


start --> 5c9ba1b40c23409452654b9ca54f163d 
5c9ba1b40c23409452654b9ca54f163d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a5c9ba1b40c23409452654b9ca54f163d


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







