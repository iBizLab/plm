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
state "[条件组]OR" as 3b6ad05a119f500d0115743b04b4f813 [[$./start_at#a3b6ad05a119f500d0115743b04b4f813 {"[条件组]OR"}]] {
state " " as 3b6ad05a119f500d0115743b04b4f813_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 70a9800723712d378f5de17e841168fc [[$./start_at#a70a9800723712d378f5de17e841168fc {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e1aed87f79bfa4d0b2db03310f04c4b5 [[$./start_at#ae1aed87f79bfa4d0b2db03310f04c4b5 {"[条件组]OR"}]] {
state " " as e1aed87f79bfa4d0b2db03310f04c4b5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b691c2ef85a530320e7a43cd0f981826 [[$./start_at#ab691c2ef85a530320e7a43cd0f981826 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as df7b141d77f911250e7147132a8c6152 [[$./start_at#adf7b141d77f911250e7147132a8c6152 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as e1aed87f79bfa4d0b2db03310f04c4b5_exit  <<exitPoint>>
}
state " " as 3b6ad05a119f500d0115743b04b4f813_exit  <<exitPoint>>
}


start --> 3b6ad05a119f500d0115743b04b4f813_entry 
3b6ad05a119f500d0115743b04b4f813_entry --> 70a9800723712d378f5de17e841168fc 
70a9800723712d378f5de17e841168fc --> 3b6ad05a119f500d0115743b04b4f813_exit  : yes
70a9800723712d378f5de17e841168fc -[#red]-> e1aed87f79bfa4d0b2db03310f04c4b5_entry  : no

e1aed87f79bfa4d0b2db03310f04c4b5_entry --> b691c2ef85a530320e7a43cd0f981826 
b691c2ef85a530320e7a43cd0f981826 --> e1aed87f79bfa4d0b2db03310f04c4b5_exit  : yes
b691c2ef85a530320e7a43cd0f981826 -[#red]-> df7b141d77f911250e7147132a8c6152  : no

df7b141d77f911250e7147132a8c6152 --> e1aed87f79bfa4d0b2db03310f04c4b5_exit  : yes
df7b141d77f911250e7147132a8c6152 -[#red]-> end  : no
e1aed87f79bfa4d0b2db03310f04c4b5_exit --> 3b6ad05a119f500d0115743b04b4f813_exit 
3b6ad05a119f500d0115743b04b4f813_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ab691c2ef85a530320e7a43cd0f981826



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a70a9800723712d378f5de17e841168fc



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=adf7b141d77f911250e7147132a8c6152



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







