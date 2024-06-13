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
state "[条件组]OR" as 84477fd7cad215d8a5fc2e9331031660 [[$./end_at#a84477fd7cad215d8a5fc2e9331031660 {"[条件组]OR"}]] {
state " " as 84477fd7cad215d8a5fc2e9331031660_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 563a6282600aee9d68829c14206d03b7 [[$./end_at#a563a6282600aee9d68829c14206d03b7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 8ae4748d48db3aa8d0d918893c4b5ba3 [[$./end_at#a8ae4748d48db3aa8d0d918893c4b5ba3 {"[条件组]OR"}]] {
state " " as 8ae4748d48db3aa8d0d918893c4b5ba3_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 632767deeaf5022485a03d48cc8dab20 [[$./end_at#a632767deeaf5022485a03d48cc8dab20 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 8ea890a9a2334e29b0f81b37064460f3 [[$./end_at#a8ea890a9a2334e29b0f81b37064460f3 {"[常规条件] 值为空(Nil)"}]]
state " " as 8ae4748d48db3aa8d0d918893c4b5ba3_exit  <<exitPoint>>
}
state " " as 84477fd7cad215d8a5fc2e9331031660_exit  <<exitPoint>>
}


start --> 84477fd7cad215d8a5fc2e9331031660_entry 
84477fd7cad215d8a5fc2e9331031660_entry --> 563a6282600aee9d68829c14206d03b7 
563a6282600aee9d68829c14206d03b7 --> 84477fd7cad215d8a5fc2e9331031660_exit  : yes
563a6282600aee9d68829c14206d03b7 -[#red]-> 8ae4748d48db3aa8d0d918893c4b5ba3_entry  : no

8ae4748d48db3aa8d0d918893c4b5ba3_entry --> 632767deeaf5022485a03d48cc8dab20 
632767deeaf5022485a03d48cc8dab20 --> 8ae4748d48db3aa8d0d918893c4b5ba3_exit  : yes
632767deeaf5022485a03d48cc8dab20 -[#red]-> 8ea890a9a2334e29b0f81b37064460f3  : no

8ea890a9a2334e29b0f81b37064460f3 --> 8ae4748d48db3aa8d0d918893c4b5ba3_exit  : yes
8ea890a9a2334e29b0f81b37064460f3 -[#red]-> end  : no
8ae4748d48db3aa8d0d918893c4b5ba3_exit --> 84477fd7cad215d8a5fc2e9331031660_exit 
84477fd7cad215d8a5fc2e9331031660_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a563a6282600aee9d68829c14206d03b7



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a8ea890a9a2334e29b0f81b37064460f3



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a632767deeaf5022485a03d48cc8dab20



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







