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
state "[条件组]OR" as 478cdc975526e304ad4b276dc88a46b2 [[$./end_at#a478cdc975526e304ad4b276dc88a46b2 {"[条件组]OR"}]] {
state " " as 478cdc975526e304ad4b276dc88a46b2_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d64f1cbbc00fa1e4dba4fc2e0ee905b3 [[$./end_at#ad64f1cbbc00fa1e4dba4fc2e0ee905b3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 02b17de7e673dbe2b21ecf0d898a76f7 [[$./end_at#a02b17de7e673dbe2b21ecf0d898a76f7 {"[条件组]OR"}]] {
state " " as 02b17de7e673dbe2b21ecf0d898a76f7_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 738be152939d62b11179179c4267f32c [[$./end_at#a738be152939d62b11179179c4267f32c {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 965030c14661642b15a991a23d732f65 [[$./end_at#a965030c14661642b15a991a23d732f65 {"[常规条件] 值为空(Nil)"}]]
state " " as 02b17de7e673dbe2b21ecf0d898a76f7_exit  <<exitPoint>>
}
state " " as 478cdc975526e304ad4b276dc88a46b2_exit  <<exitPoint>>
}


start --> 478cdc975526e304ad4b276dc88a46b2_entry 
478cdc975526e304ad4b276dc88a46b2_entry --> d64f1cbbc00fa1e4dba4fc2e0ee905b3 
d64f1cbbc00fa1e4dba4fc2e0ee905b3 --> 478cdc975526e304ad4b276dc88a46b2_exit  : yes
d64f1cbbc00fa1e4dba4fc2e0ee905b3 -[#red]-> 02b17de7e673dbe2b21ecf0d898a76f7_entry  : no

02b17de7e673dbe2b21ecf0d898a76f7_entry --> 738be152939d62b11179179c4267f32c 
738be152939d62b11179179c4267f32c --> 02b17de7e673dbe2b21ecf0d898a76f7_exit  : yes
738be152939d62b11179179c4267f32c -[#red]-> 965030c14661642b15a991a23d732f65  : no

965030c14661642b15a991a23d732f65 --> 02b17de7e673dbe2b21ecf0d898a76f7_exit  : yes
965030c14661642b15a991a23d732f65 -[#red]-> end  : no
02b17de7e673dbe2b21ecf0d898a76f7_exit --> 478cdc975526e304ad4b276dc88a46b2_exit 
478cdc975526e304ad4b276dc88a46b2_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ad64f1cbbc00fa1e4dba4fc2e0ee905b3



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a965030c14661642b15a991a23d732f65



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a738be152939d62b11179179c4267f32c



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







