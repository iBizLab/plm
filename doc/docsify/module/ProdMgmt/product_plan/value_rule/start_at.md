## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 4e6cb32c2b58abedf9ead9c69adf364d [[$./start_at#a4e6cb32c2b58abedf9ead9c69adf364d {"[条件组]OR"}]] {
state " " as 4e6cb32c2b58abedf9ead9c69adf364d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ddc7a818e641dcadeca12834f7f8bf43 [[$./start_at#addc7a818e641dcadeca12834f7f8bf43 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 112cfdb57b00cadf2649c5f0c7e49b39 [[$./start_at#a112cfdb57b00cadf2649c5f0c7e49b39 {"[条件组]OR"}]] {
state " " as 112cfdb57b00cadf2649c5f0c7e49b39_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as df7b141d77f911250e7147132a8c6152 [[$./start_at#adf7b141d77f911250e7147132a8c6152 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as df9b862bf254592aade74f819842e653 [[$./start_at#adf9b862bf254592aade74f819842e653 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 112cfdb57b00cadf2649c5f0c7e49b39_exit  <<exitPoint>>
}
state " " as 4e6cb32c2b58abedf9ead9c69adf364d_exit  <<exitPoint>>
}


start --> 4e6cb32c2b58abedf9ead9c69adf364d_entry 
4e6cb32c2b58abedf9ead9c69adf364d_entry --> ddc7a818e641dcadeca12834f7f8bf43 
ddc7a818e641dcadeca12834f7f8bf43 --> 4e6cb32c2b58abedf9ead9c69adf364d_exit  : yes
ddc7a818e641dcadeca12834f7f8bf43 -[#red]-> 112cfdb57b00cadf2649c5f0c7e49b39_entry  : no

112cfdb57b00cadf2649c5f0c7e49b39_entry --> df7b141d77f911250e7147132a8c6152 
df7b141d77f911250e7147132a8c6152 --> 112cfdb57b00cadf2649c5f0c7e49b39_exit  : yes
df7b141d77f911250e7147132a8c6152 -[#red]-> df9b862bf254592aade74f819842e653  : no

df9b862bf254592aade74f819842e653 --> 112cfdb57b00cadf2649c5f0c7e49b39_exit  : yes
df9b862bf254592aade74f819842e653 -[#red]-> end  : no
112cfdb57b00cadf2649c5f0c7e49b39_exit --> 4e6cb32c2b58abedf9ead9c69adf364d_exit 
4e6cb32c2b58abedf9ead9c69adf364d_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=adf9b862bf254592aade74f819842e653



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=addc7a818e641dcadeca12834f7f8bf43



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=adf7b141d77f911250e7147132a8c6152



`END_AT(计划结束)` ISNULL 






