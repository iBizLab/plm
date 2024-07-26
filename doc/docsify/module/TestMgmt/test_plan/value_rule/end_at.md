## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 00e6d69c07d355fa584389fed155651b [[$./end_at#a00e6d69c07d355fa584389fed155651b {"[条件组]OR"}]] {
state " " as 00e6d69c07d355fa584389fed155651b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b2b24ccacb735bec7f341c0953137837 [[$./end_at#ab2b24ccacb735bec7f341c0953137837 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as cf08ba6e14b8cd4aac03f3518d32a4da [[$./end_at#acf08ba6e14b8cd4aac03f3518d32a4da {"[条件组]OR"}]] {
state " " as cf08ba6e14b8cd4aac03f3518d32a4da_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as d2969fbdfdaca65d6a027a839fb39a7a [[$./end_at#ad2969fbdfdaca65d6a027a839fb39a7a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as f7165bd7c1be668131b1f3bf0550a722 [[$./end_at#af7165bd7c1be668131b1f3bf0550a722 {"[常规条件] 值为空(Nil)"}]]
state " " as cf08ba6e14b8cd4aac03f3518d32a4da_exit  <<exitPoint>>
}
state " " as 00e6d69c07d355fa584389fed155651b_exit  <<exitPoint>>
}


start --> 00e6d69c07d355fa584389fed155651b_entry 
00e6d69c07d355fa584389fed155651b_entry --> b2b24ccacb735bec7f341c0953137837 
b2b24ccacb735bec7f341c0953137837 --> 00e6d69c07d355fa584389fed155651b_exit  : yes
b2b24ccacb735bec7f341c0953137837 -[#red]-> cf08ba6e14b8cd4aac03f3518d32a4da_entry  : no

cf08ba6e14b8cd4aac03f3518d32a4da_entry --> d2969fbdfdaca65d6a027a839fb39a7a 
d2969fbdfdaca65d6a027a839fb39a7a --> cf08ba6e14b8cd4aac03f3518d32a4da_exit  : yes
d2969fbdfdaca65d6a027a839fb39a7a -[#red]-> f7165bd7c1be668131b1f3bf0550a722  : no

f7165bd7c1be668131b1f3bf0550a722 --> cf08ba6e14b8cd4aac03f3518d32a4da_exit  : yes
f7165bd7c1be668131b1f3bf0550a722 -[#red]-> end  : no
cf08ba6e14b8cd4aac03f3518d32a4da_exit --> 00e6d69c07d355fa584389fed155651b_exit 
00e6d69c07d355fa584389fed155651b_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=af7165bd7c1be668131b1f3bf0550a722



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ab2b24ccacb735bec7f341c0953137837



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ad2969fbdfdaca65d6a027a839fb39a7a



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







