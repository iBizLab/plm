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
state "[条件组]OR" as 36591e33f6f64981352d0625fdbf88f8 [[$./start_at#a36591e33f6f64981352d0625fdbf88f8 {"[条件组]OR"}]] {
state " " as 36591e33f6f64981352d0625fdbf88f8_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 6171f92ef42e99cbf1169d1a76b4c238 [[$./start_at#a6171f92ef42e99cbf1169d1a76b4c238 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 722674c3d11e603302106d1104383c34 [[$./start_at#a722674c3d11e603302106d1104383c34 {"[条件组]OR"}]] {
state " " as 722674c3d11e603302106d1104383c34_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ae3a392d3fd7cea412260fdc8c320c95 [[$./start_at#aae3a392d3fd7cea412260fdc8c320c95 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as f092f8712b80870c885445ab223a65ad [[$./start_at#af092f8712b80870c885445ab223a65ad {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 722674c3d11e603302106d1104383c34_exit  <<exitPoint>>
}
state " " as 36591e33f6f64981352d0625fdbf88f8_exit  <<exitPoint>>
}


start --> 36591e33f6f64981352d0625fdbf88f8_entry 
36591e33f6f64981352d0625fdbf88f8_entry --> 6171f92ef42e99cbf1169d1a76b4c238 
6171f92ef42e99cbf1169d1a76b4c238 --> 36591e33f6f64981352d0625fdbf88f8_exit  : yes
6171f92ef42e99cbf1169d1a76b4c238 -[#red]-> 722674c3d11e603302106d1104383c34_entry  : no

722674c3d11e603302106d1104383c34_entry --> ae3a392d3fd7cea412260fdc8c320c95 
ae3a392d3fd7cea412260fdc8c320c95 --> 722674c3d11e603302106d1104383c34_exit  : yes
ae3a392d3fd7cea412260fdc8c320c95 -[#red]-> f092f8712b80870c885445ab223a65ad  : no

f092f8712b80870c885445ab223a65ad --> 722674c3d11e603302106d1104383c34_exit  : yes
f092f8712b80870c885445ab223a65ad -[#red]-> end  : no
722674c3d11e603302106d1104383c34_exit --> 36591e33f6f64981352d0625fdbf88f8_exit 
36591e33f6f64981352d0625fdbf88f8_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=af092f8712b80870c885445ab223a65ad



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a6171f92ef42e99cbf1169d1a76b4c238



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aae3a392d3fd7cea412260fdc8c320c95



`END_AT(结束时间)` ISNULL 






