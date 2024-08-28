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
state "[条件组]OR" as dff2cdbc3eff5370788fd606bceb75c2 [[$./end_at#adff2cdbc3eff5370788fd606bceb75c2 {"[条件组]OR"}]] {
state " " as dff2cdbc3eff5370788fd606bceb75c2_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 876f518c423c2a0a23cf896af52c3431 [[$./end_at#a876f518c423c2a0a23cf896af52c3431 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7db1c42ae8ad12270f18ed88ce584b09 [[$./end_at#a7db1c42ae8ad12270f18ed88ce584b09 {"[条件组]OR"}]] {
state " " as 7db1c42ae8ad12270f18ed88ce584b09_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as dd9abce20b9f1a90d054488e85f8a72b [[$./end_at#add9abce20b9f1a90d054488e85f8a72b {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 4f172de56b1800dc824e9ad75d89177a [[$./end_at#a4f172de56b1800dc824e9ad75d89177a {"[常规条件] 值为空(Nil)"}]]
state " " as 7db1c42ae8ad12270f18ed88ce584b09_exit  <<exitPoint>>
}
state " " as dff2cdbc3eff5370788fd606bceb75c2_exit  <<exitPoint>>
}


start --> dff2cdbc3eff5370788fd606bceb75c2_entry 
dff2cdbc3eff5370788fd606bceb75c2_entry --> 876f518c423c2a0a23cf896af52c3431 
876f518c423c2a0a23cf896af52c3431 --> dff2cdbc3eff5370788fd606bceb75c2_exit  : yes
876f518c423c2a0a23cf896af52c3431 -[#red]-> 7db1c42ae8ad12270f18ed88ce584b09_entry  : no

7db1c42ae8ad12270f18ed88ce584b09_entry --> dd9abce20b9f1a90d054488e85f8a72b 
dd9abce20b9f1a90d054488e85f8a72b --> 7db1c42ae8ad12270f18ed88ce584b09_exit  : yes
dd9abce20b9f1a90d054488e85f8a72b -[#red]-> 4f172de56b1800dc824e9ad75d89177a  : no

4f172de56b1800dc824e9ad75d89177a --> 7db1c42ae8ad12270f18ed88ce584b09_exit  : yes
4f172de56b1800dc824e9ad75d89177a -[#red]-> end  : no
7db1c42ae8ad12270f18ed88ce584b09_exit --> dff2cdbc3eff5370788fd606bceb75c2_exit 
dff2cdbc3eff5370788fd606bceb75c2_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=add9abce20b9f1a90d054488e85f8a72b



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a876f518c423c2a0a23cf896af52c3431



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a4f172de56b1800dc824e9ad75d89177a



`START_AT(开始时间)` ISNULL 






