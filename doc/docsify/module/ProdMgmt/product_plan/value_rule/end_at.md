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
state "[条件组]OR" as 8f2cdffdedad406cdc146db8f4866517 [[$./end_at#a8f2cdffdedad406cdc146db8f4866517 {"[条件组]OR"}]] {
state " " as 8f2cdffdedad406cdc146db8f4866517_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 37e3713ea4a415e39d8422beefe6569a [[$./end_at#a37e3713ea4a415e39d8422beefe6569a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e781758a103ff92561af2f9ab5a18adc [[$./end_at#ae781758a103ff92561af2f9ab5a18adc {"[条件组]OR"}]] {
state " " as e781758a103ff92561af2f9ab5a18adc_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as a2c87c27d7251a9b226b717e6e6435d6 [[$./end_at#aa2c87c27d7251a9b226b717e6e6435d6 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as dde96ec5f84278ec3cbe4f57e49b39ed [[$./end_at#adde96ec5f84278ec3cbe4f57e49b39ed {"[常规条件] 值为空(Nil)"}]]
state " " as e781758a103ff92561af2f9ab5a18adc_exit  <<exitPoint>>
}
state " " as 8f2cdffdedad406cdc146db8f4866517_exit  <<exitPoint>>
}


start --> 8f2cdffdedad406cdc146db8f4866517_entry 
8f2cdffdedad406cdc146db8f4866517_entry --> 37e3713ea4a415e39d8422beefe6569a 
37e3713ea4a415e39d8422beefe6569a --> 8f2cdffdedad406cdc146db8f4866517_exit  : yes
37e3713ea4a415e39d8422beefe6569a -[#red]-> e781758a103ff92561af2f9ab5a18adc_entry  : no

e781758a103ff92561af2f9ab5a18adc_entry --> a2c87c27d7251a9b226b717e6e6435d6 
a2c87c27d7251a9b226b717e6e6435d6 --> e781758a103ff92561af2f9ab5a18adc_exit  : yes
a2c87c27d7251a9b226b717e6e6435d6 -[#red]-> dde96ec5f84278ec3cbe4f57e49b39ed  : no

dde96ec5f84278ec3cbe4f57e49b39ed --> e781758a103ff92561af2f9ab5a18adc_exit  : yes
dde96ec5f84278ec3cbe4f57e49b39ed -[#red]-> end  : no
e781758a103ff92561af2f9ab5a18adc_exit --> 8f2cdffdedad406cdc146db8f4866517_exit 
8f2cdffdedad406cdc146db8f4866517_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a37e3713ea4a415e39d8422beefe6569a



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aa2c87c27d7251a9b226b717e6e6435d6



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=adde96ec5f84278ec3cbe4f57e49b39ed



`START_AT(计划开始)` ISNULL 






