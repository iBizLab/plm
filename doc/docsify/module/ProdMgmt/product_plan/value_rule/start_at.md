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
state "[条件组]OR" as 18d0bfd30d559be84389cd908bdd13c8 [[$./start_at#a18d0bfd30d559be84389cd908bdd13c8 {"[条件组]OR"}]] {
state " " as 18d0bfd30d559be84389cd908bdd13c8_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 21d3e998f7f5fc143c40d7a2ec3e3744 [[$./start_at#a21d3e998f7f5fc143c40d7a2ec3e3744 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 388edcb2c354338ad7914c7fa2433020 [[$./start_at#a388edcb2c354338ad7914c7fa2433020 {"[条件组]OR"}]] {
state " " as 388edcb2c354338ad7914c7fa2433020_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as afe84a9f107e70caecddc9d58943d1b7 [[$./start_at#aafe84a9f107e70caecddc9d58943d1b7 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as ad26d1ea823b241be7de30842785fed1 [[$./start_at#aad26d1ea823b241be7de30842785fed1 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 388edcb2c354338ad7914c7fa2433020_exit  <<exitPoint>>
}
state " " as 18d0bfd30d559be84389cd908bdd13c8_exit  <<exitPoint>>
}


start --> 18d0bfd30d559be84389cd908bdd13c8_entry 
18d0bfd30d559be84389cd908bdd13c8_entry --> 21d3e998f7f5fc143c40d7a2ec3e3744 
21d3e998f7f5fc143c40d7a2ec3e3744 --> 18d0bfd30d559be84389cd908bdd13c8_exit  : yes
21d3e998f7f5fc143c40d7a2ec3e3744 -[#red]-> 388edcb2c354338ad7914c7fa2433020_entry  : no

388edcb2c354338ad7914c7fa2433020_entry --> afe84a9f107e70caecddc9d58943d1b7 
afe84a9f107e70caecddc9d58943d1b7 --> 388edcb2c354338ad7914c7fa2433020_exit  : yes
afe84a9f107e70caecddc9d58943d1b7 -[#red]-> ad26d1ea823b241be7de30842785fed1  : no

ad26d1ea823b241be7de30842785fed1 --> 388edcb2c354338ad7914c7fa2433020_exit  : yes
ad26d1ea823b241be7de30842785fed1 -[#red]-> end  : no
388edcb2c354338ad7914c7fa2433020_exit --> 18d0bfd30d559be84389cd908bdd13c8_exit 
18d0bfd30d559be84389cd908bdd13c8_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=aafe84a9f107e70caecddc9d58943d1b7



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aad26d1ea823b241be7de30842785fed1



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a21d3e998f7f5fc143c40d7a2ec3e3744



`START_AT(计划开始)` ISNULL 






