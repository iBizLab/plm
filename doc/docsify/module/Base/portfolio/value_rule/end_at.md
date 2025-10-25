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
state "[条件组]OR" as 998c8e15574f23221e433a5d52ab8f28 [[$./end_at#a998c8e15574f23221e433a5d52ab8f28 {"[条件组]OR"}]] {
state " " as 998c8e15574f23221e433a5d52ab8f28_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as de62a9e02524ec3d95d164d76b6fd4e6 [[$./end_at#ade62a9e02524ec3d95d164d76b6fd4e6 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 775ae966e05989a446f42b21f6e106ef [[$./end_at#a775ae966e05989a446f42b21f6e106ef {"[条件组]OR"}]] {
state " " as 775ae966e05989a446f42b21f6e106ef_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b949bda3a0e06b912952b7841cc8aa10 [[$./end_at#ab949bda3a0e06b912952b7841cc8aa10 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as c678be8cf925fd1b084d8d0a473551ae [[$./end_at#ac678be8cf925fd1b084d8d0a473551ae {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 775ae966e05989a446f42b21f6e106ef_exit  <<exitPoint>>
}
state " " as 998c8e15574f23221e433a5d52ab8f28_exit  <<exitPoint>>
}


start --> 998c8e15574f23221e433a5d52ab8f28_entry 
998c8e15574f23221e433a5d52ab8f28_entry --> de62a9e02524ec3d95d164d76b6fd4e6 
de62a9e02524ec3d95d164d76b6fd4e6 --> 998c8e15574f23221e433a5d52ab8f28_exit  : yes
de62a9e02524ec3d95d164d76b6fd4e6 -[#red]-> 775ae966e05989a446f42b21f6e106ef_entry  : no

775ae966e05989a446f42b21f6e106ef_entry --> b949bda3a0e06b912952b7841cc8aa10 
b949bda3a0e06b912952b7841cc8aa10 --> 775ae966e05989a446f42b21f6e106ef_exit  : yes
b949bda3a0e06b912952b7841cc8aa10 -[#red]-> c678be8cf925fd1b084d8d0a473551ae  : no

c678be8cf925fd1b084d8d0a473551ae --> 775ae966e05989a446f42b21f6e106ef_exit  : yes
c678be8cf925fd1b084d8d0a473551ae -[#red]-> end  : no
775ae966e05989a446f42b21f6e106ef_exit --> 998c8e15574f23221e433a5d52ab8f28_exit 
998c8e15574f23221e433a5d52ab8f28_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ade62a9e02524ec3d95d164d76b6fd4e6



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ab949bda3a0e06b912952b7841cc8aa10



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ac678be8cf925fd1b084d8d0a473551ae



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







