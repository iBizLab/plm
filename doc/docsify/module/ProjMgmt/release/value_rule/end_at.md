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
state "[条件组]OR" as ed46bdfd4e59f6a2d10196402ff47ec0 [[$./end_at#aed46bdfd4e59f6a2d10196402ff47ec0 {"[条件组]OR"}]] {
state " " as ed46bdfd4e59f6a2d10196402ff47ec0_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9907f7e3257a8f18f8000c5691dae71f [[$./end_at#a9907f7e3257a8f18f8000c5691dae71f {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3d4706d8f16d0246499308ccc386d83a [[$./end_at#a3d4706d8f16d0246499308ccc386d83a {"[条件组]OR"}]] {
state " " as 3d4706d8f16d0246499308ccc386d83a_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b687a1f34eb9bab51bed00a0a96848a3 [[$./end_at#ab687a1f34eb9bab51bed00a0a96848a3 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as bb358b2d0480476b2f934ee4c7a09fac [[$./end_at#abb358b2d0480476b2f934ee4c7a09fac {"[常规条件] 值为空(Nil)"}]]
state " " as 3d4706d8f16d0246499308ccc386d83a_exit  <<exitPoint>>
}
state " " as ed46bdfd4e59f6a2d10196402ff47ec0_exit  <<exitPoint>>
}


start --> ed46bdfd4e59f6a2d10196402ff47ec0_entry 
ed46bdfd4e59f6a2d10196402ff47ec0_entry --> 9907f7e3257a8f18f8000c5691dae71f 
9907f7e3257a8f18f8000c5691dae71f --> ed46bdfd4e59f6a2d10196402ff47ec0_exit  : yes
9907f7e3257a8f18f8000c5691dae71f -[#red]-> 3d4706d8f16d0246499308ccc386d83a_entry  : no

3d4706d8f16d0246499308ccc386d83a_entry --> b687a1f34eb9bab51bed00a0a96848a3 
b687a1f34eb9bab51bed00a0a96848a3 --> 3d4706d8f16d0246499308ccc386d83a_exit  : yes
b687a1f34eb9bab51bed00a0a96848a3 -[#red]-> bb358b2d0480476b2f934ee4c7a09fac  : no

bb358b2d0480476b2f934ee4c7a09fac --> 3d4706d8f16d0246499308ccc386d83a_exit  : yes
bb358b2d0480476b2f934ee4c7a09fac -[#red]-> end  : no
3d4706d8f16d0246499308ccc386d83a_exit --> ed46bdfd4e59f6a2d10196402ff47ec0_exit 
ed46bdfd4e59f6a2d10196402ff47ec0_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a9907f7e3257a8f18f8000c5691dae71f



`END_AT(发布时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab687a1f34eb9bab51bed00a0a96848a3



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=abb358b2d0480476b2f934ee4c7a09fac



`START_AT(开始时间)` ISNULL 






