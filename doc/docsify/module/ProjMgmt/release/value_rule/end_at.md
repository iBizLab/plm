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
state "[条件组]OR" as 657a13f0ee8720eec861b15aa023e2b6 [[$./end_at#a657a13f0ee8720eec861b15aa023e2b6 {"[条件组]OR"}]] {
state " " as 657a13f0ee8720eec861b15aa023e2b6_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 886728e1103b283c5be9eec5ae28ec12 [[$./end_at#a886728e1103b283c5be9eec5ae28ec12 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f1aed1631fe0cf963195bc1005eb6d42 [[$./end_at#af1aed1631fe0cf963195bc1005eb6d42 {"[条件组]OR"}]] {
state " " as f1aed1631fe0cf963195bc1005eb6d42_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as ca700c9cc964a518d06005886d7ef80d [[$./end_at#aca700c9cc964a518d06005886d7ef80d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as f7096b63190fe9ef824a873331d596a9 [[$./end_at#af7096b63190fe9ef824a873331d596a9 {"[常规条件] 值为空(Nil)"}]]
state " " as f1aed1631fe0cf963195bc1005eb6d42_exit  <<exitPoint>>
}
state " " as 657a13f0ee8720eec861b15aa023e2b6_exit  <<exitPoint>>
}


start --> 657a13f0ee8720eec861b15aa023e2b6_entry 
657a13f0ee8720eec861b15aa023e2b6_entry --> 886728e1103b283c5be9eec5ae28ec12 
886728e1103b283c5be9eec5ae28ec12 --> 657a13f0ee8720eec861b15aa023e2b6_exit  : yes
886728e1103b283c5be9eec5ae28ec12 -[#red]-> f1aed1631fe0cf963195bc1005eb6d42_entry  : no

f1aed1631fe0cf963195bc1005eb6d42_entry --> ca700c9cc964a518d06005886d7ef80d 
ca700c9cc964a518d06005886d7ef80d --> f1aed1631fe0cf963195bc1005eb6d42_exit  : yes
ca700c9cc964a518d06005886d7ef80d -[#red]-> f7096b63190fe9ef824a873331d596a9  : no

f7096b63190fe9ef824a873331d596a9 --> f1aed1631fe0cf963195bc1005eb6d42_exit  : yes
f7096b63190fe9ef824a873331d596a9 -[#red]-> end  : no
f1aed1631fe0cf963195bc1005eb6d42_exit --> 657a13f0ee8720eec861b15aa023e2b6_exit 
657a13f0ee8720eec861b15aa023e2b6_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a886728e1103b283c5be9eec5ae28ec12



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=af7096b63190fe9ef824a873331d596a9



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aca700c9cc964a518d06005886d7ef80d



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







