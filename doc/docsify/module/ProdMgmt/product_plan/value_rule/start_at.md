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
state "[条件组]OR" as e2b5efae3cdb3f40c9b3c18d145d64b0 [[$./start_at#ae2b5efae3cdb3f40c9b3c18d145d64b0 {"[条件组]OR"}]] {
state " " as e2b5efae3cdb3f40c9b3c18d145d64b0_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0fe6d7dff859b56f632c433382413b23 [[$./start_at#a0fe6d7dff859b56f632c433382413b23 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3df42b3b5a37794d61ab19243045e078 [[$./start_at#a3df42b3b5a37794d61ab19243045e078 {"[条件组]OR"}]] {
state " " as 3df42b3b5a37794d61ab19243045e078_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 431e3a1e9bc0c0769c2a6aa8b0a09a43 [[$./start_at#a431e3a1e9bc0c0769c2a6aa8b0a09a43 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 51d9b9100f3c935e5930d892832dda18 [[$./start_at#a51d9b9100f3c935e5930d892832dda18 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 3df42b3b5a37794d61ab19243045e078_exit  <<exitPoint>>
}
state " " as e2b5efae3cdb3f40c9b3c18d145d64b0_exit  <<exitPoint>>
}


start --> e2b5efae3cdb3f40c9b3c18d145d64b0_entry 
e2b5efae3cdb3f40c9b3c18d145d64b0_entry --> 0fe6d7dff859b56f632c433382413b23 
0fe6d7dff859b56f632c433382413b23 --> e2b5efae3cdb3f40c9b3c18d145d64b0_exit  : yes
0fe6d7dff859b56f632c433382413b23 -[#red]-> 3df42b3b5a37794d61ab19243045e078_entry  : no

3df42b3b5a37794d61ab19243045e078_entry --> 431e3a1e9bc0c0769c2a6aa8b0a09a43 
431e3a1e9bc0c0769c2a6aa8b0a09a43 --> 3df42b3b5a37794d61ab19243045e078_exit  : yes
431e3a1e9bc0c0769c2a6aa8b0a09a43 -[#red]-> 51d9b9100f3c935e5930d892832dda18  : no

51d9b9100f3c935e5930d892832dda18 --> 3df42b3b5a37794d61ab19243045e078_exit  : yes
51d9b9100f3c935e5930d892832dda18 -[#red]-> end  : no
3df42b3b5a37794d61ab19243045e078_exit --> e2b5efae3cdb3f40c9b3c18d145d64b0_exit 
e2b5efae3cdb3f40c9b3c18d145d64b0_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a0fe6d7dff859b56f632c433382413b23



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a51d9b9100f3c935e5930d892832dda18



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a431e3a1e9bc0c0769c2a6aa8b0a09a43



`END_AT(计划结束)` ISNULL 






