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
state "[条件组]OR" as 1873e5e40da1abb2777e68d83510fb15 [[$./end_at#a1873e5e40da1abb2777e68d83510fb15 {"[条件组]OR"}]] {
state " " as 1873e5e40da1abb2777e68d83510fb15_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d8d83e10824d3cdca5d392714e52f3de [[$./end_at#ad8d83e10824d3cdca5d392714e52f3de {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 81387329c43c6c196700acc5189eb7fd [[$./end_at#a81387329c43c6c196700acc5189eb7fd {"[条件组]OR"}]] {
state " " as 81387329c43c6c196700acc5189eb7fd_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as af3d59cd75d164cc729ba10662e283d4 [[$./end_at#aaf3d59cd75d164cc729ba10662e283d4 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 77880bba5d75bd69019eea99bf5ea9b8 [[$./end_at#a77880bba5d75bd69019eea99bf5ea9b8 {"[常规条件] 值为空(Nil)"}]]
state " " as 81387329c43c6c196700acc5189eb7fd_exit  <<exitPoint>>
}
state " " as 1873e5e40da1abb2777e68d83510fb15_exit  <<exitPoint>>
}


start --> 1873e5e40da1abb2777e68d83510fb15_entry 
1873e5e40da1abb2777e68d83510fb15_entry --> d8d83e10824d3cdca5d392714e52f3de 
d8d83e10824d3cdca5d392714e52f3de --> 1873e5e40da1abb2777e68d83510fb15_exit  : yes
d8d83e10824d3cdca5d392714e52f3de -[#red]-> 81387329c43c6c196700acc5189eb7fd_entry  : no

81387329c43c6c196700acc5189eb7fd_entry --> af3d59cd75d164cc729ba10662e283d4 
af3d59cd75d164cc729ba10662e283d4 --> 81387329c43c6c196700acc5189eb7fd_exit  : yes
af3d59cd75d164cc729ba10662e283d4 -[#red]-> 77880bba5d75bd69019eea99bf5ea9b8  : no

77880bba5d75bd69019eea99bf5ea9b8 --> 81387329c43c6c196700acc5189eb7fd_exit  : yes
77880bba5d75bd69019eea99bf5ea9b8 -[#red]-> end  : no
81387329c43c6c196700acc5189eb7fd_exit --> 1873e5e40da1abb2777e68d83510fb15_exit 
1873e5e40da1abb2777e68d83510fb15_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ad8d83e10824d3cdca5d392714e52f3de



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aaf3d59cd75d164cc729ba10662e283d4



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a77880bba5d75bd69019eea99bf5ea9b8



`START_AT(计划开始)` ISNULL 






