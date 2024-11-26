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
state "[条件组]OR" as affcf9eca36f596c59672cfd8ea2001d [[$./start_at#aaffcf9eca36f596c59672cfd8ea2001d {"[条件组]OR"}]] {
state " " as affcf9eca36f596c59672cfd8ea2001d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9baa329b60070f89df12d16ad6de4ac3 [[$./start_at#a9baa329b60070f89df12d16ad6de4ac3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 00e6d69c07d355fa584389fed155651b [[$./start_at#a00e6d69c07d355fa584389fed155651b {"[条件组]OR"}]] {
state " " as 00e6d69c07d355fa584389fed155651b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b2b24ccacb735bec7f341c0953137837 [[$./start_at#ab2b24ccacb735bec7f341c0953137837 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 775481b26b287710f460c02a00caecc9 [[$./start_at#a775481b26b287710f460c02a00caecc9 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 00e6d69c07d355fa584389fed155651b_exit  <<exitPoint>>
}
state " " as affcf9eca36f596c59672cfd8ea2001d_exit  <<exitPoint>>
}


start --> affcf9eca36f596c59672cfd8ea2001d_entry 
affcf9eca36f596c59672cfd8ea2001d_entry --> 9baa329b60070f89df12d16ad6de4ac3 
9baa329b60070f89df12d16ad6de4ac3 --> affcf9eca36f596c59672cfd8ea2001d_exit  : yes
9baa329b60070f89df12d16ad6de4ac3 -[#red]-> 00e6d69c07d355fa584389fed155651b_entry  : no

00e6d69c07d355fa584389fed155651b_entry --> b2b24ccacb735bec7f341c0953137837 
b2b24ccacb735bec7f341c0953137837 --> 00e6d69c07d355fa584389fed155651b_exit  : yes
b2b24ccacb735bec7f341c0953137837 -[#red]-> 775481b26b287710f460c02a00caecc9  : no

775481b26b287710f460c02a00caecc9 --> 00e6d69c07d355fa584389fed155651b_exit  : yes
775481b26b287710f460c02a00caecc9 -[#red]-> end  : no
00e6d69c07d355fa584389fed155651b_exit --> affcf9eca36f596c59672cfd8ea2001d_exit 
affcf9eca36f596c59672cfd8ea2001d_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a775481b26b287710f460c02a00caecc9



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=ab2b24ccacb735bec7f341c0953137837



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a9baa329b60070f89df12d16ad6de4ac3



`START_AT(计划开始)` ISNULL 






