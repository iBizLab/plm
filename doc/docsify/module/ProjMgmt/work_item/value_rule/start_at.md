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
state "[条件组]OR" as 0a1a659ab6f4156a50951102322cf4f4 [[$./start_at#a0a1a659ab6f4156a50951102322cf4f4 {"[条件组]OR"}]] {
state " " as 0a1a659ab6f4156a50951102322cf4f4_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0b9c859e9849400130046b24d84e4be6 [[$./start_at#a0b9c859e9849400130046b24d84e4be6 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ee16c957fa95692342cca288871774a1 [[$./start_at#aee16c957fa95692342cca288871774a1 {"[条件组]OR"}]] {
state " " as ee16c957fa95692342cca288871774a1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as da34cd104d6fb3329082c8e970f71333 [[$./start_at#ada34cd104d6fb3329082c8e970f71333 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 2fe6bf69c3894901654fe064c1f3ecdb [[$./start_at#a2fe6bf69c3894901654fe064c1f3ecdb {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as ee16c957fa95692342cca288871774a1_exit  <<exitPoint>>
}
state " " as 0a1a659ab6f4156a50951102322cf4f4_exit  <<exitPoint>>
}


start --> 0a1a659ab6f4156a50951102322cf4f4_entry 
0a1a659ab6f4156a50951102322cf4f4_entry --> 0b9c859e9849400130046b24d84e4be6 
0b9c859e9849400130046b24d84e4be6 --> 0a1a659ab6f4156a50951102322cf4f4_exit  : yes
0b9c859e9849400130046b24d84e4be6 -[#red]-> ee16c957fa95692342cca288871774a1_entry  : no

ee16c957fa95692342cca288871774a1_entry --> da34cd104d6fb3329082c8e970f71333 
da34cd104d6fb3329082c8e970f71333 --> ee16c957fa95692342cca288871774a1_exit  : yes
da34cd104d6fb3329082c8e970f71333 -[#red]-> 2fe6bf69c3894901654fe064c1f3ecdb  : no

2fe6bf69c3894901654fe064c1f3ecdb --> ee16c957fa95692342cca288871774a1_exit  : yes
2fe6bf69c3894901654fe064c1f3ecdb -[#red]-> end  : no
ee16c957fa95692342cca288871774a1_exit --> 0a1a659ab6f4156a50951102322cf4f4_exit 
0a1a659ab6f4156a50951102322cf4f4_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ada34cd104d6fb3329082c8e970f71333



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a0b9c859e9849400130046b24d84e4be6



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a2fe6bf69c3894901654fe064c1f3ecdb



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







