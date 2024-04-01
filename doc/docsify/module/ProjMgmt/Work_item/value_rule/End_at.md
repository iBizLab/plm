## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间大于等于开始时间 :id=date_value_rule

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
state "[条件组]AND" as 4aa5651ccf1c4402ef8c9f5fa54af7f8 [[$./End_at#a4aa5651ccf1c4402ef8c9f5fa54af7f8 {"[条件组]AND"}]] {
state " " as 4aa5651ccf1c4402ef8c9f5fa54af7f8_entry  <<entryPoint>>
state "[常规条件] 值不为空(NotNil)" as bf44ff4e98313560e6e481bbeea7dec0 [[$./End_at#abf44ff4e98313560e6e481bbeea7dec0 {"[常规条件] 值不为空(NotNil)"}]]
state "[常规条件] 值不为空(NotNil)" as 8732fdc7293e947dc70cf45938698276 [[$./End_at#a8732fdc7293e947dc70cf45938698276 {"[常规条件] 值不为空(NotNil)"}]]
state "[常规条件] 小于(<) 数据对象属性 (start_at)" as c43e9d553ec4485833b3cfc11b2353a7 [[$./End_at#ac43e9d553ec4485833b3cfc11b2353a7 {"[常规条件] 小于(<) 数据对象属性 (start_at)"}]]
state " " as 4aa5651ccf1c4402ef8c9f5fa54af7f8_exit  <<exitPoint>>
}


start --> 4aa5651ccf1c4402ef8c9f5fa54af7f8_entry 
4aa5651ccf1c4402ef8c9f5fa54af7f8_entry --> bf44ff4e98313560e6e481bbeea7dec0 
bf44ff4e98313560e6e481bbeea7dec0 --> 8732fdc7293e947dc70cf45938698276  :yes
bf44ff4e98313560e6e481bbeea7dec0 -[#red]-> end  : no

8732fdc7293e947dc70cf45938698276 --> c43e9d553ec4485833b3cfc11b2353a7  :yes
8732fdc7293e947dc70cf45938698276 -[#red]-> end  : no

c43e9d553ec4485833b3cfc11b2353a7 --> 4aa5651ccf1c4402ef8c9f5fa54af7f8_exit  : yes
c43e9d553ec4485833b3cfc11b2353a7 -[#red]-> end  : no
4aa5651ccf1c4402ef8c9f5fa54af7f8_exit --> end 


@enduml
```

#### 条件说明

##### [常规条件] 值不为空(NotNil) :id=abf44ff4e98313560e6e481bbeea7dec0



`START_AT(开始时间)` ISNOTNULL 

##### [常规条件] 值不为空(NotNil) :id=a8732fdc7293e947dc70cf45938698276



`END_AT(结束时间)` ISNOTNULL 

##### [常规条件] 小于(<) 数据对象属性 (start_at) :id=ac43e9d553ec4485833b3cfc11b2353a7



`END_AT(结束时间)` LT  `start_at`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间大于等于开始时间



### 默认规则 :id=Default

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>



@enduml
```

#### 条件说明






