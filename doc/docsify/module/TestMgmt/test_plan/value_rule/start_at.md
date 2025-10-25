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
state "[条件组]OR" as 5182887e641db47160e9ccb69acdb4e1 [[$./start_at#a5182887e641db47160e9ccb69acdb4e1 {"[条件组]OR"}]] {
state " " as 5182887e641db47160e9ccb69acdb4e1_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 523c76ba9adbde0437aedaa7446b56ce [[$./start_at#a523c76ba9adbde0437aedaa7446b56ce {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as affff01ea6e19d3df069beac60c11640 [[$./start_at#aaffff01ea6e19d3df069beac60c11640 {"[条件组]OR"}]] {
state " " as affff01ea6e19d3df069beac60c11640_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b0b9dff62a3c6201ff0ab16df4e79700 [[$./start_at#ab0b9dff62a3c6201ff0ab16df4e79700 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 188afc9af45aab53cc41831775713eac [[$./start_at#a188afc9af45aab53cc41831775713eac {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as affff01ea6e19d3df069beac60c11640_exit  <<exitPoint>>
}
state " " as 5182887e641db47160e9ccb69acdb4e1_exit  <<exitPoint>>
}


start --> 5182887e641db47160e9ccb69acdb4e1_entry 
5182887e641db47160e9ccb69acdb4e1_entry --> 523c76ba9adbde0437aedaa7446b56ce 
523c76ba9adbde0437aedaa7446b56ce --> 5182887e641db47160e9ccb69acdb4e1_exit  : yes
523c76ba9adbde0437aedaa7446b56ce -[#red]-> affff01ea6e19d3df069beac60c11640_entry  : no

affff01ea6e19d3df069beac60c11640_entry --> b0b9dff62a3c6201ff0ab16df4e79700 
b0b9dff62a3c6201ff0ab16df4e79700 --> affff01ea6e19d3df069beac60c11640_exit  : yes
b0b9dff62a3c6201ff0ab16df4e79700 -[#red]-> 188afc9af45aab53cc41831775713eac  : no

188afc9af45aab53cc41831775713eac --> affff01ea6e19d3df069beac60c11640_exit  : yes
188afc9af45aab53cc41831775713eac -[#red]-> end  : no
affff01ea6e19d3df069beac60c11640_exit --> 5182887e641db47160e9ccb69acdb4e1_exit 
5182887e641db47160e9ccb69acdb4e1_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a523c76ba9adbde0437aedaa7446b56ce



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a188afc9af45aab53cc41831775713eac



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=ab0b9dff62a3c6201ff0ab16df4e79700



`END_AT(计划结束)` ISNULL 






