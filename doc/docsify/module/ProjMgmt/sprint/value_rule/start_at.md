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
state "[条件组]OR" as 00e690a6dd530cd437906e91202f20c3 [[$./start_at#a00e690a6dd530cd437906e91202f20c3 {"[条件组]OR"}]] {
state " " as 00e690a6dd530cd437906e91202f20c3_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b741c05858c939c4d754ee9e7089b6ee [[$./start_at#ab741c05858c939c4d754ee9e7089b6ee {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as efce89ac9eb24087e11b7bd776a9fd65 [[$./start_at#aefce89ac9eb24087e11b7bd776a9fd65 {"[条件组]OR"}]] {
state " " as efce89ac9eb24087e11b7bd776a9fd65_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ba7325e335ecd4f14f073a874f34d652 [[$./start_at#aba7325e335ecd4f14f073a874f34d652 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0e331061ffc7d6fd715b45a0429dde45 [[$./start_at#a0e331061ffc7d6fd715b45a0429dde45 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as efce89ac9eb24087e11b7bd776a9fd65_exit  <<exitPoint>>
}
state " " as 00e690a6dd530cd437906e91202f20c3_exit  <<exitPoint>>
}


start --> 00e690a6dd530cd437906e91202f20c3_entry 
00e690a6dd530cd437906e91202f20c3_entry --> b741c05858c939c4d754ee9e7089b6ee 
b741c05858c939c4d754ee9e7089b6ee --> 00e690a6dd530cd437906e91202f20c3_exit  : yes
b741c05858c939c4d754ee9e7089b6ee -[#red]-> efce89ac9eb24087e11b7bd776a9fd65_entry  : no

efce89ac9eb24087e11b7bd776a9fd65_entry --> ba7325e335ecd4f14f073a874f34d652 
ba7325e335ecd4f14f073a874f34d652 --> efce89ac9eb24087e11b7bd776a9fd65_exit  : yes
ba7325e335ecd4f14f073a874f34d652 -[#red]-> 0e331061ffc7d6fd715b45a0429dde45  : no

0e331061ffc7d6fd715b45a0429dde45 --> efce89ac9eb24087e11b7bd776a9fd65_exit  : yes
0e331061ffc7d6fd715b45a0429dde45 -[#red]-> end  : no
efce89ac9eb24087e11b7bd776a9fd65_exit --> 00e690a6dd530cd437906e91202f20c3_exit 
00e690a6dd530cd437906e91202f20c3_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ab741c05858c939c4d754ee9e7089b6ee



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0e331061ffc7d6fd715b45a0429dde45



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=aba7325e335ecd4f14f073a874f34d652



`END_AT(结束时间)` ISNULL 






