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
state "[条件组]OR" as 1e98dbddb76458897ae22aa2078dba6b [[$./start_at#a1e98dbddb76458897ae22aa2078dba6b {"[条件组]OR"}]] {
state " " as 1e98dbddb76458897ae22aa2078dba6b_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as f7688c7e5b78bd4dd12e60eb6f7b2d52 [[$./start_at#af7688c7e5b78bd4dd12e60eb6f7b2d52 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2f6c770cd74b5cc8e6f6c840f5a96f61 [[$./start_at#a2f6c770cd74b5cc8e6f6c840f5a96f61 {"[条件组]OR"}]] {
state " " as 2f6c770cd74b5cc8e6f6c840f5a96f61_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 44da528a7750678cb365f69d38c6d1f5 [[$./start_at#a44da528a7750678cb365f69d38c6d1f5 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as d8cf0c7f2b845d3099298571d38dc624 [[$./start_at#ad8cf0c7f2b845d3099298571d38dc624 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 2f6c770cd74b5cc8e6f6c840f5a96f61_exit  <<exitPoint>>
}
state " " as 1e98dbddb76458897ae22aa2078dba6b_exit  <<exitPoint>>
}


start --> 1e98dbddb76458897ae22aa2078dba6b_entry 
1e98dbddb76458897ae22aa2078dba6b_entry --> f7688c7e5b78bd4dd12e60eb6f7b2d52 
f7688c7e5b78bd4dd12e60eb6f7b2d52 --> 1e98dbddb76458897ae22aa2078dba6b_exit  : yes
f7688c7e5b78bd4dd12e60eb6f7b2d52 -[#red]-> 2f6c770cd74b5cc8e6f6c840f5a96f61_entry  : no

2f6c770cd74b5cc8e6f6c840f5a96f61_entry --> 44da528a7750678cb365f69d38c6d1f5 
44da528a7750678cb365f69d38c6d1f5 --> 2f6c770cd74b5cc8e6f6c840f5a96f61_exit  : yes
44da528a7750678cb365f69d38c6d1f5 -[#red]-> d8cf0c7f2b845d3099298571d38dc624  : no

d8cf0c7f2b845d3099298571d38dc624 --> 2f6c770cd74b5cc8e6f6c840f5a96f61_exit  : yes
d8cf0c7f2b845d3099298571d38dc624 -[#red]-> end  : no
2f6c770cd74b5cc8e6f6c840f5a96f61_exit --> 1e98dbddb76458897ae22aa2078dba6b_exit 
1e98dbddb76458897ae22aa2078dba6b_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=af7688c7e5b78bd4dd12e60eb6f7b2d52



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a44da528a7750678cb365f69d38c6d1f5



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ad8cf0c7f2b845d3099298571d38dc624



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







