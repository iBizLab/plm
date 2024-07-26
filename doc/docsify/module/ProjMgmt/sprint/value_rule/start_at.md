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
state "[条件组]OR" as afcdf802f28da156b5837209c4091e4a [[$./start_at#aafcdf802f28da156b5837209c4091e4a {"[条件组]OR"}]] {
state " " as afcdf802f28da156b5837209c4091e4a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 7988f6512fab43139da532966bdab504 [[$./start_at#a7988f6512fab43139da532966bdab504 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c87308c0dba5cef64550a332063c8c97 [[$./start_at#ac87308c0dba5cef64550a332063c8c97 {"[条件组]OR"}]] {
state " " as c87308c0dba5cef64550a332063c8c97_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9b2148b9be63c9511f0cc4ae38390b73 [[$./start_at#a9b2148b9be63c9511f0cc4ae38390b73 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 40354bcf80331dec738f641b16ef3804 [[$./start_at#a40354bcf80331dec738f641b16ef3804 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c87308c0dba5cef64550a332063c8c97_exit  <<exitPoint>>
}
state " " as afcdf802f28da156b5837209c4091e4a_exit  <<exitPoint>>
}


start --> afcdf802f28da156b5837209c4091e4a_entry 
afcdf802f28da156b5837209c4091e4a_entry --> 7988f6512fab43139da532966bdab504 
7988f6512fab43139da532966bdab504 --> afcdf802f28da156b5837209c4091e4a_exit  : yes
7988f6512fab43139da532966bdab504 -[#red]-> c87308c0dba5cef64550a332063c8c97_entry  : no

c87308c0dba5cef64550a332063c8c97_entry --> 9b2148b9be63c9511f0cc4ae38390b73 
9b2148b9be63c9511f0cc4ae38390b73 --> c87308c0dba5cef64550a332063c8c97_exit  : yes
9b2148b9be63c9511f0cc4ae38390b73 -[#red]-> 40354bcf80331dec738f641b16ef3804  : no

40354bcf80331dec738f641b16ef3804 --> c87308c0dba5cef64550a332063c8c97_exit  : yes
40354bcf80331dec738f641b16ef3804 -[#red]-> end  : no
c87308c0dba5cef64550a332063c8c97_exit --> afcdf802f28da156b5837209c4091e4a_exit 
afcdf802f28da156b5837209c4091e4a_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a7988f6512fab43139da532966bdab504



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a40354bcf80331dec738f641b16ef3804



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a9b2148b9be63c9511f0cc4ae38390b73



`END_AT(结束时间)` ISNULL 






