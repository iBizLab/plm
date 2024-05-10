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
state "[条件组]OR" as 7d0b6e76f41ecd7491765ec666feb0c1 [[$./start_at#a7d0b6e76f41ecd7491765ec666feb0c1 {"[条件组]OR"}]] {
state " " as 7d0b6e76f41ecd7491765ec666feb0c1_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1e9d8df7bae55f74452e1f6b878a152d [[$./start_at#a1e9d8df7bae55f74452e1f6b878a152d {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as adf69943dbac2312ae364e2bcf8b2da1 [[$./start_at#aadf69943dbac2312ae364e2bcf8b2da1 {"[条件组]OR"}]] {
state " " as adf69943dbac2312ae364e2bcf8b2da1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9e2a6e9380ce53dcbe32c4a45de617fc [[$./start_at#a9e2a6e9380ce53dcbe32c4a45de617fc {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 9adadb9f6e491f47961ac53e9fabca9a [[$./start_at#a9adadb9f6e491f47961ac53e9fabca9a {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as adf69943dbac2312ae364e2bcf8b2da1_exit  <<exitPoint>>
}
state " " as 7d0b6e76f41ecd7491765ec666feb0c1_exit  <<exitPoint>>
}


start --> 7d0b6e76f41ecd7491765ec666feb0c1_entry 
7d0b6e76f41ecd7491765ec666feb0c1_entry --> 1e9d8df7bae55f74452e1f6b878a152d 
1e9d8df7bae55f74452e1f6b878a152d --> 7d0b6e76f41ecd7491765ec666feb0c1_exit  : yes
1e9d8df7bae55f74452e1f6b878a152d -[#red]-> adf69943dbac2312ae364e2bcf8b2da1_entry  : no

adf69943dbac2312ae364e2bcf8b2da1_entry --> 9e2a6e9380ce53dcbe32c4a45de617fc 
9e2a6e9380ce53dcbe32c4a45de617fc --> adf69943dbac2312ae364e2bcf8b2da1_exit  : yes
9e2a6e9380ce53dcbe32c4a45de617fc -[#red]-> 9adadb9f6e491f47961ac53e9fabca9a  : no

9adadb9f6e491f47961ac53e9fabca9a --> adf69943dbac2312ae364e2bcf8b2da1_exit  : yes
9adadb9f6e491f47961ac53e9fabca9a -[#red]-> end  : no
adf69943dbac2312ae364e2bcf8b2da1_exit --> 7d0b6e76f41ecd7491765ec666feb0c1_exit 
7d0b6e76f41ecd7491765ec666feb0c1_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a1e9d8df7bae55f74452e1f6b878a152d



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a9adadb9f6e491f47961ac53e9fabca9a



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a9e2a6e9380ce53dcbe32c4a45de617fc



`END_AT(结束时间)` ISNULL 






