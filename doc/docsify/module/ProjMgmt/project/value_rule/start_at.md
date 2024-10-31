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
state "[条件组]OR" as 2fb33edd1341f502cf8d045b89f2ca4c [[$./start_at#a2fb33edd1341f502cf8d045b89f2ca4c {"[条件组]OR"}]] {
state " " as 2fb33edd1341f502cf8d045b89f2ca4c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as bd98310a24504c87df890af1d83c0523 [[$./start_at#abd98310a24504c87df890af1d83c0523 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 11f0660e159db58405142ee49cb6b250 [[$./start_at#a11f0660e159db58405142ee49cb6b250 {"[条件组]OR"}]] {
state " " as 11f0660e159db58405142ee49cb6b250_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 20565e8717582d0b41c4512f871ec66f [[$./start_at#a20565e8717582d0b41c4512f871ec66f {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 9fefc08892fc2ebcca14d851c23160d3 [[$./start_at#a9fefc08892fc2ebcca14d851c23160d3 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 11f0660e159db58405142ee49cb6b250_exit  <<exitPoint>>
}
state " " as 2fb33edd1341f502cf8d045b89f2ca4c_exit  <<exitPoint>>
}


start --> 2fb33edd1341f502cf8d045b89f2ca4c_entry 
2fb33edd1341f502cf8d045b89f2ca4c_entry --> bd98310a24504c87df890af1d83c0523 
bd98310a24504c87df890af1d83c0523 --> 2fb33edd1341f502cf8d045b89f2ca4c_exit  : yes
bd98310a24504c87df890af1d83c0523 -[#red]-> 11f0660e159db58405142ee49cb6b250_entry  : no

11f0660e159db58405142ee49cb6b250_entry --> 20565e8717582d0b41c4512f871ec66f 
20565e8717582d0b41c4512f871ec66f --> 11f0660e159db58405142ee49cb6b250_exit  : yes
20565e8717582d0b41c4512f871ec66f -[#red]-> 9fefc08892fc2ebcca14d851c23160d3  : no

9fefc08892fc2ebcca14d851c23160d3 --> 11f0660e159db58405142ee49cb6b250_exit  : yes
9fefc08892fc2ebcca14d851c23160d3 -[#red]-> end  : no
11f0660e159db58405142ee49cb6b250_exit --> 2fb33edd1341f502cf8d045b89f2ca4c_exit 
2fb33edd1341f502cf8d045b89f2ca4c_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=abd98310a24504c87df890af1d83c0523



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a20565e8717582d0b41c4512f871ec66f



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a9fefc08892fc2ebcca14d851c23160d3



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







