## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as bc609bf276164f1e080784ddd8c5ce2f [[$./end_at#abc609bf276164f1e080784ddd8c5ce2f {"[条件组]OR"}]] {
state " " as bc609bf276164f1e080784ddd8c5ce2f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 156662053a1a4405d93715137cfad79a [[$./end_at#a156662053a1a4405d93715137cfad79a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 144eb4af2d7af444de3263244ca58242 [[$./end_at#a144eb4af2d7af444de3263244ca58242 {"[条件组]OR"}]] {
state " " as 144eb4af2d7af444de3263244ca58242_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 80c4daa62581a6b92bb47d0a0ea466f8 [[$./end_at#a80c4daa62581a6b92bb47d0a0ea466f8 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 410434f561c9dbca92914f5ed9357016 [[$./end_at#a410434f561c9dbca92914f5ed9357016 {"[常规条件] 值为空(Nil)"}]]
state " " as 144eb4af2d7af444de3263244ca58242_exit  <<exitPoint>>
}
state " " as bc609bf276164f1e080784ddd8c5ce2f_exit  <<exitPoint>>
}


start --> bc609bf276164f1e080784ddd8c5ce2f_entry 
bc609bf276164f1e080784ddd8c5ce2f_entry --> 156662053a1a4405d93715137cfad79a 
156662053a1a4405d93715137cfad79a --> bc609bf276164f1e080784ddd8c5ce2f_exit  : yes
156662053a1a4405d93715137cfad79a -[#red]-> 144eb4af2d7af444de3263244ca58242_entry  : no

144eb4af2d7af444de3263244ca58242_entry --> 80c4daa62581a6b92bb47d0a0ea466f8 
80c4daa62581a6b92bb47d0a0ea466f8 --> 144eb4af2d7af444de3263244ca58242_exit  : yes
80c4daa62581a6b92bb47d0a0ea466f8 -[#red]-> 410434f561c9dbca92914f5ed9357016  : no

410434f561c9dbca92914f5ed9357016 --> 144eb4af2d7af444de3263244ca58242_exit  : yes
410434f561c9dbca92914f5ed9357016 -[#red]-> end  : no
144eb4af2d7af444de3263244ca58242_exit --> bc609bf276164f1e080784ddd8c5ce2f_exit 
bc609bf276164f1e080784ddd8c5ce2f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a80c4daa62581a6b92bb47d0a0ea466f8



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a410434f561c9dbca92914f5ed9357016



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a156662053a1a4405d93715137cfad79a



`END_AT(发布时间)` ISNULL 






