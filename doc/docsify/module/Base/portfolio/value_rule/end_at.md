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
state "[条件组]OR" as 1a640ef843dab7c8dcdac672e42c0f3f [[$./end_at#a1a640ef843dab7c8dcdac672e42c0f3f {"[条件组]OR"}]] {
state " " as 1a640ef843dab7c8dcdac672e42c0f3f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c40ec7fab17c541386a231e34456b734 [[$./end_at#ac40ec7fab17c541386a231e34456b734 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as b3512f4f8f1a03fc118ace8eb25fe7f5 [[$./end_at#ab3512f4f8f1a03fc118ace8eb25fe7f5 {"[条件组]OR"}]] {
state " " as b3512f4f8f1a03fc118ace8eb25fe7f5_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as a71cae77b58a48c06af1813d990a58b4 [[$./end_at#aa71cae77b58a48c06af1813d990a58b4 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as d76ab949cb4af57e55dd7fc1acef4058 [[$./end_at#ad76ab949cb4af57e55dd7fc1acef4058 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as b3512f4f8f1a03fc118ace8eb25fe7f5_exit  <<exitPoint>>
}
state " " as 1a640ef843dab7c8dcdac672e42c0f3f_exit  <<exitPoint>>
}


start --> 1a640ef843dab7c8dcdac672e42c0f3f_entry 
1a640ef843dab7c8dcdac672e42c0f3f_entry --> c40ec7fab17c541386a231e34456b734 
c40ec7fab17c541386a231e34456b734 --> 1a640ef843dab7c8dcdac672e42c0f3f_exit  : yes
c40ec7fab17c541386a231e34456b734 -[#red]-> b3512f4f8f1a03fc118ace8eb25fe7f5_entry  : no

b3512f4f8f1a03fc118ace8eb25fe7f5_entry --> a71cae77b58a48c06af1813d990a58b4 
a71cae77b58a48c06af1813d990a58b4 --> b3512f4f8f1a03fc118ace8eb25fe7f5_exit  : yes
a71cae77b58a48c06af1813d990a58b4 -[#red]-> d76ab949cb4af57e55dd7fc1acef4058  : no

d76ab949cb4af57e55dd7fc1acef4058 --> b3512f4f8f1a03fc118ace8eb25fe7f5_exit  : yes
d76ab949cb4af57e55dd7fc1acef4058 -[#red]-> end  : no
b3512f4f8f1a03fc118ace8eb25fe7f5_exit --> 1a640ef843dab7c8dcdac672e42c0f3f_exit 
1a640ef843dab7c8dcdac672e42c0f3f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac40ec7fab17c541386a231e34456b734



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aa71cae77b58a48c06af1813d990a58b4



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ad76ab949cb4af57e55dd7fc1acef4058



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







