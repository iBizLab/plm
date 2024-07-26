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
state "[条件组]OR" as 9279c04eb6515842a95d0678ba3d2b12 [[$./end_at#a9279c04eb6515842a95d0678ba3d2b12 {"[条件组]OR"}]] {
state " " as 9279c04eb6515842a95d0678ba3d2b12_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a723b993425276549def156fc93ef910 [[$./end_at#aa723b993425276549def156fc93ef910 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f7c9a92537592d17b79e63c406f13dd7 [[$./end_at#af7c9a92537592d17b79e63c406f13dd7 {"[条件组]OR"}]] {
state " " as f7c9a92537592d17b79e63c406f13dd7_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 [[$./end_at#a7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as cee6eb508f5a5322549d56aa056beb4b [[$./end_at#acee6eb508f5a5322549d56aa056beb4b {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as f7c9a92537592d17b79e63c406f13dd7_exit  <<exitPoint>>
}
state " " as 9279c04eb6515842a95d0678ba3d2b12_exit  <<exitPoint>>
}


start --> 9279c04eb6515842a95d0678ba3d2b12_entry 
9279c04eb6515842a95d0678ba3d2b12_entry --> a723b993425276549def156fc93ef910 
a723b993425276549def156fc93ef910 --> 9279c04eb6515842a95d0678ba3d2b12_exit  : yes
a723b993425276549def156fc93ef910 -[#red]-> f7c9a92537592d17b79e63c406f13dd7_entry  : no

f7c9a92537592d17b79e63c406f13dd7_entry --> 7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 
7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 --> f7c9a92537592d17b79e63c406f13dd7_exit  : yes
7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 -[#red]-> cee6eb508f5a5322549d56aa056beb4b  : no

cee6eb508f5a5322549d56aa056beb4b --> f7c9a92537592d17b79e63c406f13dd7_exit  : yes
cee6eb508f5a5322549d56aa056beb4b -[#red]-> end  : no
f7c9a92537592d17b79e63c406f13dd7_exit --> 9279c04eb6515842a95d0678ba3d2b12_exit 
9279c04eb6515842a95d0678ba3d2b12_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=acee6eb508f5a5322549d56aa056beb4b



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=aa723b993425276549def156fc93ef910



`END_AT(结束时间)` ISNULL 






