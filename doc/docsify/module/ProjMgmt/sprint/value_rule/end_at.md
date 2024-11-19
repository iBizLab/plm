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
state "[条件组]OR" as cdd0f364f65dca926ed04f419968f196 [[$./end_at#acdd0f364f65dca926ed04f419968f196 {"[条件组]OR"}]] {
state " " as cdd0f364f65dca926ed04f419968f196_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 419027be17c73038c4fdb634de7c9943 [[$./end_at#a419027be17c73038c4fdb634de7c9943 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f05bc23fca3d185935acd22e0365e25a [[$./end_at#af05bc23fca3d185935acd22e0365e25a {"[条件组]OR"}]] {
state " " as f05bc23fca3d185935acd22e0365e25a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d7ad4424dbc6ddc65c9d0a6c34d8cf82 [[$./end_at#ad7ad4424dbc6ddc65c9d0a6c34d8cf82 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 69f81a0e5ca62fcc3f2a9be3ff7c28d4 [[$./end_at#a69f81a0e5ca62fcc3f2a9be3ff7c28d4 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as f05bc23fca3d185935acd22e0365e25a_exit  <<exitPoint>>
}
state " " as cdd0f364f65dca926ed04f419968f196_exit  <<exitPoint>>
}


start --> cdd0f364f65dca926ed04f419968f196_entry 
cdd0f364f65dca926ed04f419968f196_entry --> 419027be17c73038c4fdb634de7c9943 
419027be17c73038c4fdb634de7c9943 --> cdd0f364f65dca926ed04f419968f196_exit  : yes
419027be17c73038c4fdb634de7c9943 -[#red]-> f05bc23fca3d185935acd22e0365e25a_entry  : no

f05bc23fca3d185935acd22e0365e25a_entry --> d7ad4424dbc6ddc65c9d0a6c34d8cf82 
d7ad4424dbc6ddc65c9d0a6c34d8cf82 --> f05bc23fca3d185935acd22e0365e25a_exit  : yes
d7ad4424dbc6ddc65c9d0a6c34d8cf82 -[#red]-> 69f81a0e5ca62fcc3f2a9be3ff7c28d4  : no

69f81a0e5ca62fcc3f2a9be3ff7c28d4 --> f05bc23fca3d185935acd22e0365e25a_exit  : yes
69f81a0e5ca62fcc3f2a9be3ff7c28d4 -[#red]-> end  : no
f05bc23fca3d185935acd22e0365e25a_exit --> cdd0f364f65dca926ed04f419968f196_exit 
cdd0f364f65dca926ed04f419968f196_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a419027be17c73038c4fdb634de7c9943



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ad7ad4424dbc6ddc65c9d0a6c34d8cf82



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a69f81a0e5ca62fcc3f2a9be3ff7c28d4



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







