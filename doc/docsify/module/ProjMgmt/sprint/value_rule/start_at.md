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
state "[条件组]OR" as a984438acff1bd8f3a6d615f16236425 [[$./start_at#aa984438acff1bd8f3a6d615f16236425 {"[条件组]OR"}]] {
state " " as a984438acff1bd8f3a6d615f16236425_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as fccebacdc3e5471bb251183485c3b575 [[$./start_at#afccebacdc3e5471bb251183485c3b575 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e070ab91feb5e74fbba642f53241368b [[$./start_at#ae070ab91feb5e74fbba642f53241368b {"[条件组]OR"}]] {
state " " as e070ab91feb5e74fbba642f53241368b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 47db4444a324a00527b293157586b685 [[$./start_at#a47db4444a324a00527b293157586b685 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0683a7d2dcaa4db5ece567d0aec9bd25 [[$./start_at#a0683a7d2dcaa4db5ece567d0aec9bd25 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as e070ab91feb5e74fbba642f53241368b_exit  <<exitPoint>>
}
state " " as a984438acff1bd8f3a6d615f16236425_exit  <<exitPoint>>
}


start --> a984438acff1bd8f3a6d615f16236425_entry 
a984438acff1bd8f3a6d615f16236425_entry --> fccebacdc3e5471bb251183485c3b575 
fccebacdc3e5471bb251183485c3b575 --> a984438acff1bd8f3a6d615f16236425_exit  : yes
fccebacdc3e5471bb251183485c3b575 -[#red]-> e070ab91feb5e74fbba642f53241368b_entry  : no

e070ab91feb5e74fbba642f53241368b_entry --> 47db4444a324a00527b293157586b685 
47db4444a324a00527b293157586b685 --> e070ab91feb5e74fbba642f53241368b_exit  : yes
47db4444a324a00527b293157586b685 -[#red]-> 0683a7d2dcaa4db5ece567d0aec9bd25  : no

0683a7d2dcaa4db5ece567d0aec9bd25 --> e070ab91feb5e74fbba642f53241368b_exit  : yes
0683a7d2dcaa4db5ece567d0aec9bd25 -[#red]-> end  : no
e070ab91feb5e74fbba642f53241368b_exit --> a984438acff1bd8f3a6d615f16236425_exit 
a984438acff1bd8f3a6d615f16236425_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=afccebacdc3e5471bb251183485c3b575



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0683a7d2dcaa4db5ece567d0aec9bd25



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a47db4444a324a00527b293157586b685



`END_AT(结束时间)` ISNULL 






