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
state "[条件组]OR" as 68769be88713ec85b5306fa6399cde80 [[$./end_at#a68769be88713ec85b5306fa6399cde80 {"[条件组]OR"}]] {
state " " as 68769be88713ec85b5306fa6399cde80_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9262e0e53c71b5765b30388f8f86e9ac [[$./end_at#a9262e0e53c71b5765b30388f8f86e9ac {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 37cdbb37c85d806ae19d8ca8a561a15e [[$./end_at#a37cdbb37c85d806ae19d8ca8a561a15e {"[条件组]OR"}]] {
state " " as 37cdbb37c85d806ae19d8ca8a561a15e_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8cfc4fa3ea5543442fae2835de2c73c2 [[$./end_at#a8cfc4fa3ea5543442fae2835de2c73c2 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as a71cae77b58a48c06af1813d990a58b4 [[$./end_at#aa71cae77b58a48c06af1813d990a58b4 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 37cdbb37c85d806ae19d8ca8a561a15e_exit  <<exitPoint>>
}
state " " as 68769be88713ec85b5306fa6399cde80_exit  <<exitPoint>>
}


start --> 68769be88713ec85b5306fa6399cde80_entry 
68769be88713ec85b5306fa6399cde80_entry --> 9262e0e53c71b5765b30388f8f86e9ac 
9262e0e53c71b5765b30388f8f86e9ac --> 68769be88713ec85b5306fa6399cde80_exit  : yes
9262e0e53c71b5765b30388f8f86e9ac -[#red]-> 37cdbb37c85d806ae19d8ca8a561a15e_entry  : no

37cdbb37c85d806ae19d8ca8a561a15e_entry --> 8cfc4fa3ea5543442fae2835de2c73c2 
8cfc4fa3ea5543442fae2835de2c73c2 --> 37cdbb37c85d806ae19d8ca8a561a15e_exit  : yes
8cfc4fa3ea5543442fae2835de2c73c2 -[#red]-> a71cae77b58a48c06af1813d990a58b4  : no

a71cae77b58a48c06af1813d990a58b4 --> 37cdbb37c85d806ae19d8ca8a561a15e_exit  : yes
a71cae77b58a48c06af1813d990a58b4 -[#red]-> end  : no
37cdbb37c85d806ae19d8ca8a561a15e_exit --> 68769be88713ec85b5306fa6399cde80_exit 
68769be88713ec85b5306fa6399cde80_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a8cfc4fa3ea5543442fae2835de2c73c2



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a9262e0e53c71b5765b30388f8f86e9ac



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aa71cae77b58a48c06af1813d990a58b4



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







