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
state "[条件组]OR" as 87ee309985933a79bbaedf57f447cb98 [[$./start_at#a87ee309985933a79bbaedf57f447cb98 {"[条件组]OR"}]] {
state " " as 87ee309985933a79bbaedf57f447cb98_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 5e81b51c9c3de88c9891fc6eba1bdd5e [[$./start_at#a5e81b51c9c3de88c9891fc6eba1bdd5e {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d74d1eca3b364772c715b6de1787e999 [[$./start_at#ad74d1eca3b364772c715b6de1787e999 {"[条件组]OR"}]] {
state " " as d74d1eca3b364772c715b6de1787e999_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 6dfbe6aaf44196077761a7a5214a501c [[$./start_at#a6dfbe6aaf44196077761a7a5214a501c {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 47db4444a324a00527b293157586b685 [[$./start_at#a47db4444a324a00527b293157586b685 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as d74d1eca3b364772c715b6de1787e999_exit  <<exitPoint>>
}
state " " as 87ee309985933a79bbaedf57f447cb98_exit  <<exitPoint>>
}


start --> 87ee309985933a79bbaedf57f447cb98_entry 
87ee309985933a79bbaedf57f447cb98_entry --> 5e81b51c9c3de88c9891fc6eba1bdd5e 
5e81b51c9c3de88c9891fc6eba1bdd5e --> 87ee309985933a79bbaedf57f447cb98_exit  : yes
5e81b51c9c3de88c9891fc6eba1bdd5e -[#red]-> d74d1eca3b364772c715b6de1787e999_entry  : no

d74d1eca3b364772c715b6de1787e999_entry --> 6dfbe6aaf44196077761a7a5214a501c 
6dfbe6aaf44196077761a7a5214a501c --> d74d1eca3b364772c715b6de1787e999_exit  : yes
6dfbe6aaf44196077761a7a5214a501c -[#red]-> 47db4444a324a00527b293157586b685  : no

47db4444a324a00527b293157586b685 --> d74d1eca3b364772c715b6de1787e999_exit  : yes
47db4444a324a00527b293157586b685 -[#red]-> end  : no
d74d1eca3b364772c715b6de1787e999_exit --> 87ee309985933a79bbaedf57f447cb98_exit 
87ee309985933a79bbaedf57f447cb98_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a47db4444a324a00527b293157586b685



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a6dfbe6aaf44196077761a7a5214a501c



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a5e81b51c9c3de88c9891fc6eba1bdd5e



`START_AT(开始时间)` ISNULL 






