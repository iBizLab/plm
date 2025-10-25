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
state "[条件组]OR" as 918d0debe7f1fcd1659d6c3ca0e6b965 [[$./password#a918d0debe7f1fcd1659d6c3ca0e6b965 {"[条件组]OR"}]] {
state " " as 918d0debe7f1fcd1659d6c3ca0e6b965_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as aaf388c8d299e9dc46ef661a886bfe5e [[$./password#aaaf388c8d299e9dc46ef661a886bfe5e {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as c41ad303648d3e9757a3cc652977d1d7 [[$./password#ac41ad303648d3e9757a3cc652977d1d7 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 3361fc2ec7e8966d24e12bfb0db671c3 [[$./password#a3361fc2ec7e8966d24e12bfb0db671c3 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 918d0debe7f1fcd1659d6c3ca0e6b965_exit  <<exitPoint>>
}


start --> 918d0debe7f1fcd1659d6c3ca0e6b965_entry 
918d0debe7f1fcd1659d6c3ca0e6b965_entry --> aaf388c8d299e9dc46ef661a886bfe5e 
aaf388c8d299e9dc46ef661a886bfe5e --> 918d0debe7f1fcd1659d6c3ca0e6b965_exit  : yes
aaf388c8d299e9dc46ef661a886bfe5e -[#red]-> c41ad303648d3e9757a3cc652977d1d7  : no

c41ad303648d3e9757a3cc652977d1d7 --> 918d0debe7f1fcd1659d6c3ca0e6b965_exit  : yes
c41ad303648d3e9757a3cc652977d1d7 -[#red]-> 3361fc2ec7e8966d24e12bfb0db671c3  : no

3361fc2ec7e8966d24e12bfb0db671c3 --> 918d0debe7f1fcd1659d6c3ca0e6b965_exit  : yes
3361fc2ec7e8966d24e12bfb0db671c3 -[#red]-> end  : no
918d0debe7f1fcd1659d6c3ca0e6b965_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 值为空(Nil) :id=aaaf388c8d299e9dc46ef661a886bfe5e



`sure_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a3361fc2ec7e8966d24e12bfb0db671c3



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (new_password) 值为空(Nil) :id=ac41ad303648d3e9757a3cc652977d1d7



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
state "默认字符串长度" as bc5f64ccc5463bdd65971752954df2f9 [[$./password#abc5f64ccc5463bdd65971752954df2f9 {"默认字符串长度"}]]


start --> bc5f64ccc5463bdd65971752954df2f9 
bc5f64ccc5463bdd65971752954df2f9 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=abc5f64ccc5463bdd65971752954df2f9


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







