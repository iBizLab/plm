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
state "[条件组]OR" as 847068d5a7df3459056a5f72bc99d24a [[$./end_at#a847068d5a7df3459056a5f72bc99d24a {"[条件组]OR"}]] {
state " " as 847068d5a7df3459056a5f72bc99d24a_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0bbe2fd6c09f2c59c312319cfb3663c5 [[$./end_at#a0bbe2fd6c09f2c59c312319cfb3663c5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 541cde4c09901f721f9158bbea9ccca1 [[$./end_at#a541cde4c09901f721f9158bbea9ccca1 {"[条件组]OR"}]] {
state " " as 541cde4c09901f721f9158bbea9ccca1_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as cf5072176eb57a549b93e4bd5a181dc8 [[$./end_at#acf5072176eb57a549b93e4bd5a181dc8 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 9c644eb8b55ec1fb7da4d067151f0feb [[$./end_at#a9c644eb8b55ec1fb7da4d067151f0feb {"[常规条件] 值为空(Nil)"}]]
state " " as 541cde4c09901f721f9158bbea9ccca1_exit  <<exitPoint>>
}
state " " as 847068d5a7df3459056a5f72bc99d24a_exit  <<exitPoint>>
}


start --> 847068d5a7df3459056a5f72bc99d24a_entry 
847068d5a7df3459056a5f72bc99d24a_entry --> 0bbe2fd6c09f2c59c312319cfb3663c5 
0bbe2fd6c09f2c59c312319cfb3663c5 --> 847068d5a7df3459056a5f72bc99d24a_exit  : yes
0bbe2fd6c09f2c59c312319cfb3663c5 -[#red]-> 541cde4c09901f721f9158bbea9ccca1_entry  : no

541cde4c09901f721f9158bbea9ccca1_entry --> cf5072176eb57a549b93e4bd5a181dc8 
cf5072176eb57a549b93e4bd5a181dc8 --> 541cde4c09901f721f9158bbea9ccca1_exit  : yes
cf5072176eb57a549b93e4bd5a181dc8 -[#red]-> 9c644eb8b55ec1fb7da4d067151f0feb  : no

9c644eb8b55ec1fb7da4d067151f0feb --> 541cde4c09901f721f9158bbea9ccca1_exit  : yes
9c644eb8b55ec1fb7da4d067151f0feb -[#red]-> end  : no
541cde4c09901f721f9158bbea9ccca1_exit --> 847068d5a7df3459056a5f72bc99d24a_exit 
847068d5a7df3459056a5f72bc99d24a_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a9c644eb8b55ec1fb7da4d067151f0feb



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a0bbe2fd6c09f2c59c312319cfb3663c5



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=acf5072176eb57a549b93e4bd5a181dc8



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







