## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

### 开始时间 :id=START_AT

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
state "[条件组]OR" as e295279da669d85a4de39cf4d668ff5e [[$./start_at#ae295279da669d85a4de39cf4d668ff5e {"[条件组]OR"}]] {
state " " as e295279da669d85a4de39cf4d668ff5e_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b507ac3a0e79f9fdb88dbc4ab33d37ed [[$./start_at#ab507ac3a0e79f9fdb88dbc4ab33d37ed {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c35d2efffadab4d6809e29726960d7f7 [[$./start_at#ac35d2efffadab4d6809e29726960d7f7 {"[条件组]OR"}]] {
state " " as c35d2efffadab4d6809e29726960d7f7_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 1a8c44f47eb2a1ae82cf2c60a5bd433a [[$./start_at#a1a8c44f47eb2a1ae82cf2c60a5bd433a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 2a9e8a7a202ca2012c8eb873c774a5dd [[$./start_at#a2a9e8a7a202ca2012c8eb873c774a5dd {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c35d2efffadab4d6809e29726960d7f7_exit  <<exitPoint>>
}
state " " as e295279da669d85a4de39cf4d668ff5e_exit  <<exitPoint>>
}


start --> e295279da669d85a4de39cf4d668ff5e_entry 
e295279da669d85a4de39cf4d668ff5e_entry --> b507ac3a0e79f9fdb88dbc4ab33d37ed 
b507ac3a0e79f9fdb88dbc4ab33d37ed --> e295279da669d85a4de39cf4d668ff5e_exit  : yes
b507ac3a0e79f9fdb88dbc4ab33d37ed -[#red]-> c35d2efffadab4d6809e29726960d7f7_entry  : no

c35d2efffadab4d6809e29726960d7f7_entry --> 1a8c44f47eb2a1ae82cf2c60a5bd433a 
1a8c44f47eb2a1ae82cf2c60a5bd433a --> c35d2efffadab4d6809e29726960d7f7_exit  : yes
1a8c44f47eb2a1ae82cf2c60a5bd433a -[#red]-> 2a9e8a7a202ca2012c8eb873c774a5dd  : no

2a9e8a7a202ca2012c8eb873c774a5dd --> c35d2efffadab4d6809e29726960d7f7_exit  : yes
2a9e8a7a202ca2012c8eb873c774a5dd -[#red]-> end  : no
c35d2efffadab4d6809e29726960d7f7_exit --> e295279da669d85a4de39cf4d668ff5e_exit 
e295279da669d85a4de39cf4d668ff5e_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ab507ac3a0e79f9fdb88dbc4ab33d37ed



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a2a9e8a7a202ca2012c8eb873c774a5dd



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a1a8c44f47eb2a1ae82cf2c60a5bd433a



`END_AT(截止时间)` ISNULL 






