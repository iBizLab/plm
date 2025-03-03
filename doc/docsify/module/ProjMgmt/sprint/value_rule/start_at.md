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
state "[条件组]OR" as 170b73ad8a6f0eef72e9a97eaad8329c [[$./start_at#a170b73ad8a6f0eef72e9a97eaad8329c {"[条件组]OR"}]] {
state " " as 170b73ad8a6f0eef72e9a97eaad8329c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 84bfd199523ccbeb610a22d58915356b [[$./start_at#a84bfd199523ccbeb610a22d58915356b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e18e58540646b0cc15ff3fdc2c2f7914 [[$./start_at#ae18e58540646b0cc15ff3fdc2c2f7914 {"[条件组]OR"}]] {
state " " as e18e58540646b0cc15ff3fdc2c2f7914_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c2f95931806f2b3fd1af9f4008619c56 [[$./start_at#ac2f95931806f2b3fd1af9f4008619c56 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 204d80efcc1e86c45fd0d19bc7db6259 [[$./start_at#a204d80efcc1e86c45fd0d19bc7db6259 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as e18e58540646b0cc15ff3fdc2c2f7914_exit  <<exitPoint>>
}
state " " as 170b73ad8a6f0eef72e9a97eaad8329c_exit  <<exitPoint>>
}


start --> 170b73ad8a6f0eef72e9a97eaad8329c_entry 
170b73ad8a6f0eef72e9a97eaad8329c_entry --> 84bfd199523ccbeb610a22d58915356b 
84bfd199523ccbeb610a22d58915356b --> 170b73ad8a6f0eef72e9a97eaad8329c_exit  : yes
84bfd199523ccbeb610a22d58915356b -[#red]-> e18e58540646b0cc15ff3fdc2c2f7914_entry  : no

e18e58540646b0cc15ff3fdc2c2f7914_entry --> c2f95931806f2b3fd1af9f4008619c56 
c2f95931806f2b3fd1af9f4008619c56 --> e18e58540646b0cc15ff3fdc2c2f7914_exit  : yes
c2f95931806f2b3fd1af9f4008619c56 -[#red]-> 204d80efcc1e86c45fd0d19bc7db6259  : no

204d80efcc1e86c45fd0d19bc7db6259 --> e18e58540646b0cc15ff3fdc2c2f7914_exit  : yes
204d80efcc1e86c45fd0d19bc7db6259 -[#red]-> end  : no
e18e58540646b0cc15ff3fdc2c2f7914_exit --> 170b73ad8a6f0eef72e9a97eaad8329c_exit 
170b73ad8a6f0eef72e9a97eaad8329c_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac2f95931806f2b3fd1af9f4008619c56



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a84bfd199523ccbeb610a22d58915356b



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a204d80efcc1e86c45fd0d19bc7db6259



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







