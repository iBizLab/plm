## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as b34d425739febef1d666760ae6864b84 [[$./end_at#ab34d425739febef1d666760ae6864b84 {"[条件组]OR"}]] {
state " " as b34d425739febef1d666760ae6864b84_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as daf8e1eed43b7175d8d8078783d6a539 [[$./end_at#adaf8e1eed43b7175d8d8078783d6a539 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 9cdba84f600f575402dd74274e390fa4 [[$./end_at#a9cdba84f600f575402dd74274e390fa4 {"[条件组]OR"}]] {
state " " as 9cdba84f600f575402dd74274e390fa4_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 26565ab8a0c927a7fa7c98dfc5721dbe [[$./end_at#a26565ab8a0c927a7fa7c98dfc5721dbe {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as ba7325e335ecd4f14f073a874f34d652 [[$./end_at#aba7325e335ecd4f14f073a874f34d652 {"[常规条件] 值为空(Nil)"}]]
state " " as 9cdba84f600f575402dd74274e390fa4_exit  <<exitPoint>>
}
state " " as b34d425739febef1d666760ae6864b84_exit  <<exitPoint>>
}


start --> b34d425739febef1d666760ae6864b84_entry 
b34d425739febef1d666760ae6864b84_entry --> daf8e1eed43b7175d8d8078783d6a539 
daf8e1eed43b7175d8d8078783d6a539 --> b34d425739febef1d666760ae6864b84_exit  : yes
daf8e1eed43b7175d8d8078783d6a539 -[#red]-> 9cdba84f600f575402dd74274e390fa4_entry  : no

9cdba84f600f575402dd74274e390fa4_entry --> 26565ab8a0c927a7fa7c98dfc5721dbe 
26565ab8a0c927a7fa7c98dfc5721dbe --> 9cdba84f600f575402dd74274e390fa4_exit  : yes
26565ab8a0c927a7fa7c98dfc5721dbe -[#red]-> ba7325e335ecd4f14f073a874f34d652  : no

ba7325e335ecd4f14f073a874f34d652 --> 9cdba84f600f575402dd74274e390fa4_exit  : yes
ba7325e335ecd4f14f073a874f34d652 -[#red]-> end  : no
9cdba84f600f575402dd74274e390fa4_exit --> b34d425739febef1d666760ae6864b84_exit 
b34d425739febef1d666760ae6864b84_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=adaf8e1eed43b7175d8d8078783d6a539



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a26565ab8a0c927a7fa7c98dfc5721dbe



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=aba7325e335ecd4f14f073a874f34d652



`START_AT(计划开始)` ISNULL 






