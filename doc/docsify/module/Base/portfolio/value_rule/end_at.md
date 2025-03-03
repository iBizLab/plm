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
state "[条件组]OR" as 59a8610e4eda296860620bf3376b089f [[$./end_at#a59a8610e4eda296860620bf3376b089f {"[条件组]OR"}]] {
state " " as 59a8610e4eda296860620bf3376b089f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 7f45efe71521accbc58deedbd47f78d3 [[$./end_at#a7f45efe71521accbc58deedbd47f78d3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6802745748e326611e9ff6d3c5270834 [[$./end_at#a6802745748e326611e9ff6d3c5270834 {"[条件组]OR"}]] {
state " " as 6802745748e326611e9ff6d3c5270834_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as bcf8276ad958cb14e15f0bf9ee564416 [[$./end_at#abcf8276ad958cb14e15f0bf9ee564416 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as c2bc5c731f671ac810da8a12f29518c1 [[$./end_at#ac2bc5c731f671ac810da8a12f29518c1 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 6802745748e326611e9ff6d3c5270834_exit  <<exitPoint>>
}
state " " as 59a8610e4eda296860620bf3376b089f_exit  <<exitPoint>>
}


start --> 59a8610e4eda296860620bf3376b089f_entry 
59a8610e4eda296860620bf3376b089f_entry --> 7f45efe71521accbc58deedbd47f78d3 
7f45efe71521accbc58deedbd47f78d3 --> 59a8610e4eda296860620bf3376b089f_exit  : yes
7f45efe71521accbc58deedbd47f78d3 -[#red]-> 6802745748e326611e9ff6d3c5270834_entry  : no

6802745748e326611e9ff6d3c5270834_entry --> bcf8276ad958cb14e15f0bf9ee564416 
bcf8276ad958cb14e15f0bf9ee564416 --> 6802745748e326611e9ff6d3c5270834_exit  : yes
bcf8276ad958cb14e15f0bf9ee564416 -[#red]-> c2bc5c731f671ac810da8a12f29518c1  : no

c2bc5c731f671ac810da8a12f29518c1 --> 6802745748e326611e9ff6d3c5270834_exit  : yes
c2bc5c731f671ac810da8a12f29518c1 -[#red]-> end  : no
6802745748e326611e9ff6d3c5270834_exit --> 59a8610e4eda296860620bf3376b089f_exit 
59a8610e4eda296860620bf3376b089f_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=abcf8276ad958cb14e15f0bf9ee564416



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a7f45efe71521accbc58deedbd47f78d3



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ac2bc5c731f671ac810da8a12f29518c1



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







