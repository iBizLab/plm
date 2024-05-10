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
state "[条件组]OR" as 42e37e11dca203d0085e2232ce3742f9 [[$./end_at#a42e37e11dca203d0085e2232ce3742f9 {"[条件组]OR"}]] {
state " " as 42e37e11dca203d0085e2232ce3742f9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 866bc387e5fdce1f88748823c9847dfc [[$./end_at#a866bc387e5fdce1f88748823c9847dfc {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as bb805e66b3fffd67f8f5c60aaaf0652a [[$./end_at#abb805e66b3fffd67f8f5c60aaaf0652a {"[条件组]OR"}]] {
state " " as bb805e66b3fffd67f8f5c60aaaf0652a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as fdccd7235f57419a010d272a92bb0ff6 [[$./end_at#afdccd7235f57419a010d272a92bb0ff6 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 02e7cec49d18af0d300220109aaeb2d6 [[$./end_at#a02e7cec49d18af0d300220109aaeb2d6 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as bb805e66b3fffd67f8f5c60aaaf0652a_exit  <<exitPoint>>
}
state " " as 42e37e11dca203d0085e2232ce3742f9_exit  <<exitPoint>>
}


start --> 42e37e11dca203d0085e2232ce3742f9_entry 
42e37e11dca203d0085e2232ce3742f9_entry --> 866bc387e5fdce1f88748823c9847dfc 
866bc387e5fdce1f88748823c9847dfc --> 42e37e11dca203d0085e2232ce3742f9_exit  : yes
866bc387e5fdce1f88748823c9847dfc -[#red]-> bb805e66b3fffd67f8f5c60aaaf0652a_entry  : no

bb805e66b3fffd67f8f5c60aaaf0652a_entry --> fdccd7235f57419a010d272a92bb0ff6 
fdccd7235f57419a010d272a92bb0ff6 --> bb805e66b3fffd67f8f5c60aaaf0652a_exit  : yes
fdccd7235f57419a010d272a92bb0ff6 -[#red]-> 02e7cec49d18af0d300220109aaeb2d6  : no

02e7cec49d18af0d300220109aaeb2d6 --> bb805e66b3fffd67f8f5c60aaaf0652a_exit  : yes
02e7cec49d18af0d300220109aaeb2d6 -[#red]-> end  : no
bb805e66b3fffd67f8f5c60aaaf0652a_exit --> 42e37e11dca203d0085e2232ce3742f9_exit 
42e37e11dca203d0085e2232ce3742f9_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a866bc387e5fdce1f88748823c9847dfc



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=afdccd7235f57419a010d272a92bb0ff6



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a02e7cec49d18af0d300220109aaeb2d6



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







