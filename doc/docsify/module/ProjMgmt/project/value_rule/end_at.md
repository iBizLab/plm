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
state "[条件组]OR" as 8f4e9618c8c0f29a62e2cffcd8ad89ad [[$./end_at#a8f4e9618c8c0f29a62e2cffcd8ad89ad {"[条件组]OR"}]] {
state " " as 8f4e9618c8c0f29a62e2cffcd8ad89ad_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as adabd41ce729d5842f5e8ba50bf4b878 [[$./end_at#aadabd41ce729d5842f5e8ba50bf4b878 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as b0f32ae86b08eb3fe15e5119eb3c12b3 [[$./end_at#ab0f32ae86b08eb3fe15e5119eb3c12b3 {"[条件组]OR"}]] {
state " " as b0f32ae86b08eb3fe15e5119eb3c12b3_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as f092f8712b80870c885445ab223a65ad [[$./end_at#af092f8712b80870c885445ab223a65ad {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 37f78e804fc3c4e54ded6b9a7cc943fe [[$./end_at#a37f78e804fc3c4e54ded6b9a7cc943fe {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as b0f32ae86b08eb3fe15e5119eb3c12b3_exit  <<exitPoint>>
}
state " " as 8f4e9618c8c0f29a62e2cffcd8ad89ad_exit  <<exitPoint>>
}


start --> 8f4e9618c8c0f29a62e2cffcd8ad89ad_entry 
8f4e9618c8c0f29a62e2cffcd8ad89ad_entry --> adabd41ce729d5842f5e8ba50bf4b878 
adabd41ce729d5842f5e8ba50bf4b878 --> 8f4e9618c8c0f29a62e2cffcd8ad89ad_exit  : yes
adabd41ce729d5842f5e8ba50bf4b878 -[#red]-> b0f32ae86b08eb3fe15e5119eb3c12b3_entry  : no

b0f32ae86b08eb3fe15e5119eb3c12b3_entry --> f092f8712b80870c885445ab223a65ad 
f092f8712b80870c885445ab223a65ad --> b0f32ae86b08eb3fe15e5119eb3c12b3_exit  : yes
f092f8712b80870c885445ab223a65ad -[#red]-> 37f78e804fc3c4e54ded6b9a7cc943fe  : no

37f78e804fc3c4e54ded6b9a7cc943fe --> b0f32ae86b08eb3fe15e5119eb3c12b3_exit  : yes
37f78e804fc3c4e54ded6b9a7cc943fe -[#red]-> end  : no
b0f32ae86b08eb3fe15e5119eb3c12b3_exit --> 8f4e9618c8c0f29a62e2cffcd8ad89ad_exit 
8f4e9618c8c0f29a62e2cffcd8ad89ad_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=af092f8712b80870c885445ab223a65ad



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aadabd41ce729d5842f5e8ba50bf4b878



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a37f78e804fc3c4e54ded6b9a7cc943fe



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







