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
state "[条件组]OR" as b8b168f717c80779794f62f93dc5dd6d [[$./end_at#ab8b168f717c80779794f62f93dc5dd6d {"[条件组]OR"}]] {
state " " as b8b168f717c80779794f62f93dc5dd6d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a5d3a2935e652eda53c567e7e6049576 [[$./end_at#aa5d3a2935e652eda53c567e7e6049576 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e08e7c3169455f11ccdef37a36b163f8 [[$./end_at#ae08e7c3169455f11ccdef37a36b163f8 {"[条件组]OR"}]] {
state " " as e08e7c3169455f11ccdef37a36b163f8_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cfd593aa49082a601735525cdf8eaa1f [[$./end_at#acfd593aa49082a601735525cdf8eaa1f {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 9853293a731239ebc831b835cc19df25 [[$./end_at#a9853293a731239ebc831b835cc19df25 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e08e7c3169455f11ccdef37a36b163f8_exit  <<exitPoint>>
}
state " " as b8b168f717c80779794f62f93dc5dd6d_exit  <<exitPoint>>
}


start --> b8b168f717c80779794f62f93dc5dd6d_entry 
b8b168f717c80779794f62f93dc5dd6d_entry --> a5d3a2935e652eda53c567e7e6049576 
a5d3a2935e652eda53c567e7e6049576 --> b8b168f717c80779794f62f93dc5dd6d_exit  : yes
a5d3a2935e652eda53c567e7e6049576 -[#red]-> e08e7c3169455f11ccdef37a36b163f8_entry  : no

e08e7c3169455f11ccdef37a36b163f8_entry --> cfd593aa49082a601735525cdf8eaa1f 
cfd593aa49082a601735525cdf8eaa1f --> e08e7c3169455f11ccdef37a36b163f8_exit  : yes
cfd593aa49082a601735525cdf8eaa1f -[#red]-> 9853293a731239ebc831b835cc19df25  : no

9853293a731239ebc831b835cc19df25 --> e08e7c3169455f11ccdef37a36b163f8_exit  : yes
9853293a731239ebc831b835cc19df25 -[#red]-> end  : no
e08e7c3169455f11ccdef37a36b163f8_exit --> b8b168f717c80779794f62f93dc5dd6d_exit 
b8b168f717c80779794f62f93dc5dd6d_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=aa5d3a2935e652eda53c567e7e6049576



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a9853293a731239ebc831b835cc19df25



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=acfd593aa49082a601735525cdf8eaa1f



`START_AT(开始时间)` ISNULL 






