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
state "[条件组]OR" as f3b7f7e9563eb99646065f2af861cef4 [[$./start_at#af3b7f7e9563eb99646065f2af861cef4 {"[条件组]OR"}]] {
state " " as f3b7f7e9563eb99646065f2af861cef4_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as e8a020d85340bace6d5c391af2c98901 [[$./start_at#ae8a020d85340bace6d5c391af2c98901 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 809647480d636bc58b92bc70d27e7386 [[$./start_at#a809647480d636bc58b92bc70d27e7386 {"[条件组]OR"}]] {
state " " as 809647480d636bc58b92bc70d27e7386_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 881b355a4658ca694a63b764dc244443 [[$./start_at#a881b355a4658ca694a63b764dc244443 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0fe6d7dff859b56f632c433382413b23 [[$./start_at#a0fe6d7dff859b56f632c433382413b23 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 809647480d636bc58b92bc70d27e7386_exit  <<exitPoint>>
}
state " " as f3b7f7e9563eb99646065f2af861cef4_exit  <<exitPoint>>
}


start --> f3b7f7e9563eb99646065f2af861cef4_entry 
f3b7f7e9563eb99646065f2af861cef4_entry --> e8a020d85340bace6d5c391af2c98901 
e8a020d85340bace6d5c391af2c98901 --> f3b7f7e9563eb99646065f2af861cef4_exit  : yes
e8a020d85340bace6d5c391af2c98901 -[#red]-> 809647480d636bc58b92bc70d27e7386_entry  : no

809647480d636bc58b92bc70d27e7386_entry --> 881b355a4658ca694a63b764dc244443 
881b355a4658ca694a63b764dc244443 --> 809647480d636bc58b92bc70d27e7386_exit  : yes
881b355a4658ca694a63b764dc244443 -[#red]-> 0fe6d7dff859b56f632c433382413b23  : no

0fe6d7dff859b56f632c433382413b23 --> 809647480d636bc58b92bc70d27e7386_exit  : yes
0fe6d7dff859b56f632c433382413b23 -[#red]-> end  : no
809647480d636bc58b92bc70d27e7386_exit --> f3b7f7e9563eb99646065f2af861cef4_exit 
f3b7f7e9563eb99646065f2af861cef4_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0fe6d7dff859b56f632c433382413b23



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a881b355a4658ca694a63b764dc244443



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ae8a020d85340bace6d5c391af2c98901



`START_AT(计划开始)` ISNULL 






