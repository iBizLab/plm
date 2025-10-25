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
state "[条件组]OR" as 2c0f82852c86506e59d505b86c55e609 [[$./start_at#a2c0f82852c86506e59d505b86c55e609 {"[条件组]OR"}]] {
state " " as 2c0f82852c86506e59d505b86c55e609_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 5eb34c61c1ce205f5c8afdecd6411937 [[$./start_at#a5eb34c61c1ce205f5c8afdecd6411937 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1a073d8087eb544731870d368a0cced8 [[$./start_at#a1a073d8087eb544731870d368a0cced8 {"[条件组]OR"}]] {
state " " as 1a073d8087eb544731870d368a0cced8_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a069e319a60d1c97a3064a2baf6e2596 [[$./start_at#aa069e319a60d1c97a3064a2baf6e2596 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 41b979761a1d9e2cc8fb7f394ba8a02a [[$./start_at#a41b979761a1d9e2cc8fb7f394ba8a02a {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 1a073d8087eb544731870d368a0cced8_exit  <<exitPoint>>
}
state " " as 2c0f82852c86506e59d505b86c55e609_exit  <<exitPoint>>
}


start --> 2c0f82852c86506e59d505b86c55e609_entry 
2c0f82852c86506e59d505b86c55e609_entry --> 5eb34c61c1ce205f5c8afdecd6411937 
5eb34c61c1ce205f5c8afdecd6411937 --> 2c0f82852c86506e59d505b86c55e609_exit  : yes
5eb34c61c1ce205f5c8afdecd6411937 -[#red]-> 1a073d8087eb544731870d368a0cced8_entry  : no

1a073d8087eb544731870d368a0cced8_entry --> a069e319a60d1c97a3064a2baf6e2596 
a069e319a60d1c97a3064a2baf6e2596 --> 1a073d8087eb544731870d368a0cced8_exit  : yes
a069e319a60d1c97a3064a2baf6e2596 -[#red]-> 41b979761a1d9e2cc8fb7f394ba8a02a  : no

41b979761a1d9e2cc8fb7f394ba8a02a --> 1a073d8087eb544731870d368a0cced8_exit  : yes
41b979761a1d9e2cc8fb7f394ba8a02a -[#red]-> end  : no
1a073d8087eb544731870d368a0cced8_exit --> 2c0f82852c86506e59d505b86c55e609_exit 
2c0f82852c86506e59d505b86c55e609_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a5eb34c61c1ce205f5c8afdecd6411937



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aa069e319a60d1c97a3064a2baf6e2596



`END_AT(发布时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a41b979761a1d9e2cc8fb7f394ba8a02a



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







