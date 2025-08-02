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
state "[条件组]OR" as 311451bfaa05039ce54c135940479c4e [[$./end_at#a311451bfaa05039ce54c135940479c4e {"[条件组]OR"}]] {
state " " as 311451bfaa05039ce54c135940479c4e_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 7b429adebda9d4ea80da258d21dba550 [[$./end_at#a7b429adebda9d4ea80da258d21dba550 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e30f960639ae51309278ac7e69ae5bae [[$./end_at#ae30f960639ae51309278ac7e69ae5bae {"[条件组]OR"}]] {
state " " as e30f960639ae51309278ac7e69ae5bae_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 65b59dd6eb3c90833b89e1710b69dec6 [[$./end_at#a65b59dd6eb3c90833b89e1710b69dec6 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 37c5419d068c7c921c1040c19557b899 [[$./end_at#a37c5419d068c7c921c1040c19557b899 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e30f960639ae51309278ac7e69ae5bae_exit  <<exitPoint>>
}
state " " as 311451bfaa05039ce54c135940479c4e_exit  <<exitPoint>>
}


start --> 311451bfaa05039ce54c135940479c4e_entry 
311451bfaa05039ce54c135940479c4e_entry --> 7b429adebda9d4ea80da258d21dba550 
7b429adebda9d4ea80da258d21dba550 --> 311451bfaa05039ce54c135940479c4e_exit  : yes
7b429adebda9d4ea80da258d21dba550 -[#red]-> e30f960639ae51309278ac7e69ae5bae_entry  : no

e30f960639ae51309278ac7e69ae5bae_entry --> 65b59dd6eb3c90833b89e1710b69dec6 
65b59dd6eb3c90833b89e1710b69dec6 --> e30f960639ae51309278ac7e69ae5bae_exit  : yes
65b59dd6eb3c90833b89e1710b69dec6 -[#red]-> 37c5419d068c7c921c1040c19557b899  : no

37c5419d068c7c921c1040c19557b899 --> e30f960639ae51309278ac7e69ae5bae_exit  : yes
37c5419d068c7c921c1040c19557b899 -[#red]-> end  : no
e30f960639ae51309278ac7e69ae5bae_exit --> 311451bfaa05039ce54c135940479c4e_exit 
311451bfaa05039ce54c135940479c4e_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a65b59dd6eb3c90833b89e1710b69dec6



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a7b429adebda9d4ea80da258d21dba550



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a37c5419d068c7c921c1040c19557b899



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







