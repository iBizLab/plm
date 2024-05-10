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
state "[条件组]OR" as 3d979af40d15c22d409d8864f93c86aa [[$./end_at#a3d979af40d15c22d409d8864f93c86aa {"[条件组]OR"}]] {
state " " as 3d979af40d15c22d409d8864f93c86aa_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 328a28f8a5e4e6cb1996d52c4560267a [[$./end_at#a328a28f8a5e4e6cb1996d52c4560267a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e387ea635fb58c80bdb5c18956004a2a [[$./end_at#ae387ea635fb58c80bdb5c18956004a2a {"[条件组]OR"}]] {
state " " as e387ea635fb58c80bdb5c18956004a2a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8abec3f565cb62cb435e8a8fd23ddb9b [[$./end_at#a8abec3f565cb62cb435e8a8fd23ddb9b {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 7f8dc57e9d318a3aa6985db8ed27ab07 [[$./end_at#a7f8dc57e9d318a3aa6985db8ed27ab07 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e387ea635fb58c80bdb5c18956004a2a_exit  <<exitPoint>>
}
state " " as 3d979af40d15c22d409d8864f93c86aa_exit  <<exitPoint>>
}


start --> 3d979af40d15c22d409d8864f93c86aa_entry 
3d979af40d15c22d409d8864f93c86aa_entry --> 328a28f8a5e4e6cb1996d52c4560267a 
328a28f8a5e4e6cb1996d52c4560267a --> 3d979af40d15c22d409d8864f93c86aa_exit  : yes
328a28f8a5e4e6cb1996d52c4560267a -[#red]-> e387ea635fb58c80bdb5c18956004a2a_entry  : no

e387ea635fb58c80bdb5c18956004a2a_entry --> 8abec3f565cb62cb435e8a8fd23ddb9b 
8abec3f565cb62cb435e8a8fd23ddb9b --> e387ea635fb58c80bdb5c18956004a2a_exit  : yes
8abec3f565cb62cb435e8a8fd23ddb9b -[#red]-> 7f8dc57e9d318a3aa6985db8ed27ab07  : no

7f8dc57e9d318a3aa6985db8ed27ab07 --> e387ea635fb58c80bdb5c18956004a2a_exit  : yes
7f8dc57e9d318a3aa6985db8ed27ab07 -[#red]-> end  : no
e387ea635fb58c80bdb5c18956004a2a_exit --> 3d979af40d15c22d409d8864f93c86aa_exit 
3d979af40d15c22d409d8864f93c86aa_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a8abec3f565cb62cb435e8a8fd23ddb9b



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a7f8dc57e9d318a3aa6985db8ed27ab07



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a328a28f8a5e4e6cb1996d52c4560267a



`END_AT(结束时间)` ISNULL 






