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
state "[条件组]OR" as d1c2902e5f7b26d9cfc237af07b2b448 [[$./start_at#ad1c2902e5f7b26d9cfc237af07b2b448 {"[条件组]OR"}]] {
state " " as d1c2902e5f7b26d9cfc237af07b2b448_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ad5f7ad8157adc2102749ecde81c3867 [[$./start_at#aad5f7ad8157adc2102749ecde81c3867 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 77beb16fc2ff8160d0869e7a6ab6deb9 [[$./start_at#a77beb16fc2ff8160d0869e7a6ab6deb9 {"[条件组]OR"}]] {
state " " as 77beb16fc2ff8160d0869e7a6ab6deb9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as cef92c1ca6765c1a85ee1285c86ff837 [[$./start_at#acef92c1ca6765c1a85ee1285c86ff837 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 862d3445a9f4a641c8b5f129801efcf6 [[$./start_at#a862d3445a9f4a641c8b5f129801efcf6 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 77beb16fc2ff8160d0869e7a6ab6deb9_exit  <<exitPoint>>
}
state " " as d1c2902e5f7b26d9cfc237af07b2b448_exit  <<exitPoint>>
}


start --> d1c2902e5f7b26d9cfc237af07b2b448_entry 
d1c2902e5f7b26d9cfc237af07b2b448_entry --> ad5f7ad8157adc2102749ecde81c3867 
ad5f7ad8157adc2102749ecde81c3867 --> d1c2902e5f7b26d9cfc237af07b2b448_exit  : yes
ad5f7ad8157adc2102749ecde81c3867 -[#red]-> 77beb16fc2ff8160d0869e7a6ab6deb9_entry  : no

77beb16fc2ff8160d0869e7a6ab6deb9_entry --> cef92c1ca6765c1a85ee1285c86ff837 
cef92c1ca6765c1a85ee1285c86ff837 --> 77beb16fc2ff8160d0869e7a6ab6deb9_exit  : yes
cef92c1ca6765c1a85ee1285c86ff837 -[#red]-> 862d3445a9f4a641c8b5f129801efcf6  : no

862d3445a9f4a641c8b5f129801efcf6 --> 77beb16fc2ff8160d0869e7a6ab6deb9_exit  : yes
862d3445a9f4a641c8b5f129801efcf6 -[#red]-> end  : no
77beb16fc2ff8160d0869e7a6ab6deb9_exit --> d1c2902e5f7b26d9cfc237af07b2b448_exit 
d1c2902e5f7b26d9cfc237af07b2b448_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=acef92c1ca6765c1a85ee1285c86ff837



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aad5f7ad8157adc2102749ecde81c3867



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a862d3445a9f4a641c8b5f129801efcf6



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







