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
state "[条件组]OR" as 95f69dc024e899c2b824c34ee45fc18f [[$./start_at#a95f69dc024e899c2b824c34ee45fc18f {"[条件组]OR"}]] {
state " " as 95f69dc024e899c2b824c34ee45fc18f_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 5ac0a4b22fc29b503b4d916ce2dc466c [[$./start_at#a5ac0a4b22fc29b503b4d916ce2dc466c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d724b07ecfdb1ec7a346e744a11c4ba4 [[$./start_at#ad724b07ecfdb1ec7a346e744a11c4ba4 {"[条件组]OR"}]] {
state " " as d724b07ecfdb1ec7a346e744a11c4ba4_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 7d60faf0a8da5735da67754713a2bcfc [[$./start_at#a7d60faf0a8da5735da67754713a2bcfc {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 8e7a6f6a9457a28a67b8eefc8113c7de [[$./start_at#a8e7a6f6a9457a28a67b8eefc8113c7de {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as d724b07ecfdb1ec7a346e744a11c4ba4_exit  <<exitPoint>>
}
state " " as 95f69dc024e899c2b824c34ee45fc18f_exit  <<exitPoint>>
}


start --> 95f69dc024e899c2b824c34ee45fc18f_entry 
95f69dc024e899c2b824c34ee45fc18f_entry --> 5ac0a4b22fc29b503b4d916ce2dc466c 
5ac0a4b22fc29b503b4d916ce2dc466c --> 95f69dc024e899c2b824c34ee45fc18f_exit  : yes
5ac0a4b22fc29b503b4d916ce2dc466c -[#red]-> d724b07ecfdb1ec7a346e744a11c4ba4_entry  : no

d724b07ecfdb1ec7a346e744a11c4ba4_entry --> 7d60faf0a8da5735da67754713a2bcfc 
7d60faf0a8da5735da67754713a2bcfc --> d724b07ecfdb1ec7a346e744a11c4ba4_exit  : yes
7d60faf0a8da5735da67754713a2bcfc -[#red]-> 8e7a6f6a9457a28a67b8eefc8113c7de  : no

8e7a6f6a9457a28a67b8eefc8113c7de --> d724b07ecfdb1ec7a346e744a11c4ba4_exit  : yes
8e7a6f6a9457a28a67b8eefc8113c7de -[#red]-> end  : no
d724b07ecfdb1ec7a346e744a11c4ba4_exit --> 95f69dc024e899c2b824c34ee45fc18f_exit 
95f69dc024e899c2b824c34ee45fc18f_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a5ac0a4b22fc29b503b4d916ce2dc466c



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a8e7a6f6a9457a28a67b8eefc8113c7de



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a7d60faf0a8da5735da67754713a2bcfc



`END_AT(截止时间)` ISNULL 






