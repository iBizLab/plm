## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as 9cbc80e131e559f64a785843f279918c [[$./end_at#a9cbc80e131e559f64a785843f279918c {"[条件组]OR"}]] {
state " " as 9cbc80e131e559f64a785843f279918c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 38aa5e8f192887d1182f130701c46675 [[$./end_at#a38aa5e8f192887d1182f130701c46675 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3025f8c68815088d7b032b134c58a6eb [[$./end_at#a3025f8c68815088d7b032b134c58a6eb {"[条件组]OR"}]] {
state " " as 3025f8c68815088d7b032b134c58a6eb_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cea6c3b6e30a943d1fc99b7c9f777949 [[$./end_at#acea6c3b6e30a943d1fc99b7c9f777949 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 8c5f0c70ca97cb5191c655a16bc8f0a7 [[$./end_at#a8c5f0c70ca97cb5191c655a16bc8f0a7 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 3025f8c68815088d7b032b134c58a6eb_exit  <<exitPoint>>
}
state " " as 9cbc80e131e559f64a785843f279918c_exit  <<exitPoint>>
}


start --> 9cbc80e131e559f64a785843f279918c_entry 
9cbc80e131e559f64a785843f279918c_entry --> 38aa5e8f192887d1182f130701c46675 
38aa5e8f192887d1182f130701c46675 --> 9cbc80e131e559f64a785843f279918c_exit  : yes
38aa5e8f192887d1182f130701c46675 -[#red]-> 3025f8c68815088d7b032b134c58a6eb_entry  : no

3025f8c68815088d7b032b134c58a6eb_entry --> cea6c3b6e30a943d1fc99b7c9f777949 
cea6c3b6e30a943d1fc99b7c9f777949 --> 3025f8c68815088d7b032b134c58a6eb_exit  : yes
cea6c3b6e30a943d1fc99b7c9f777949 -[#red]-> 8c5f0c70ca97cb5191c655a16bc8f0a7  : no

8c5f0c70ca97cb5191c655a16bc8f0a7 --> 3025f8c68815088d7b032b134c58a6eb_exit  : yes
8c5f0c70ca97cb5191c655a16bc8f0a7 -[#red]-> end  : no
3025f8c68815088d7b032b134c58a6eb_exit --> 9cbc80e131e559f64a785843f279918c_exit 
9cbc80e131e559f64a785843f279918c_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a8c5f0c70ca97cb5191c655a16bc8f0a7



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a38aa5e8f192887d1182f130701c46675



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=acea6c3b6e30a943d1fc99b7c9f777949



`START_AT(开始时间)` ISNULL 






