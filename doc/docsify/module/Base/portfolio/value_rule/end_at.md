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
state "[条件组]OR" as 26cd6cf886e156bebbf8d47b633d3fe9 [[$./end_at#a26cd6cf886e156bebbf8d47b633d3fe9 {"[条件组]OR"}]] {
state " " as 26cd6cf886e156bebbf8d47b633d3fe9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as aa3824c33b48cf5d8eed4d7930bc518c [[$./end_at#aaa3824c33b48cf5d8eed4d7930bc518c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2c31fbe06c34592c652e49cc95de57bf [[$./end_at#a2c31fbe06c34592c652e49cc95de57bf {"[条件组]OR"}]] {
state " " as 2c31fbe06c34592c652e49cc95de57bf_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9b457c801a44ea36032d1c7807ded3c2 [[$./end_at#a9b457c801a44ea36032d1c7807ded3c2 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 76baa63d44eee1d3630f7f19b52a9ac4 [[$./end_at#a76baa63d44eee1d3630f7f19b52a9ac4 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 2c31fbe06c34592c652e49cc95de57bf_exit  <<exitPoint>>
}
state " " as 26cd6cf886e156bebbf8d47b633d3fe9_exit  <<exitPoint>>
}


start --> 26cd6cf886e156bebbf8d47b633d3fe9_entry 
26cd6cf886e156bebbf8d47b633d3fe9_entry --> aa3824c33b48cf5d8eed4d7930bc518c 
aa3824c33b48cf5d8eed4d7930bc518c --> 26cd6cf886e156bebbf8d47b633d3fe9_exit  : yes
aa3824c33b48cf5d8eed4d7930bc518c -[#red]-> 2c31fbe06c34592c652e49cc95de57bf_entry  : no

2c31fbe06c34592c652e49cc95de57bf_entry --> 9b457c801a44ea36032d1c7807ded3c2 
9b457c801a44ea36032d1c7807ded3c2 --> 2c31fbe06c34592c652e49cc95de57bf_exit  : yes
9b457c801a44ea36032d1c7807ded3c2 -[#red]-> 76baa63d44eee1d3630f7f19b52a9ac4  : no

76baa63d44eee1d3630f7f19b52a9ac4 --> 2c31fbe06c34592c652e49cc95de57bf_exit  : yes
76baa63d44eee1d3630f7f19b52a9ac4 -[#red]-> end  : no
2c31fbe06c34592c652e49cc95de57bf_exit --> 26cd6cf886e156bebbf8d47b633d3fe9_exit 
26cd6cf886e156bebbf8d47b633d3fe9_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a9b457c801a44ea36032d1c7807ded3c2



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aaa3824c33b48cf5d8eed4d7930bc518c



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a76baa63d44eee1d3630f7f19b52a9ac4



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







