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
state "[条件组]OR" as 12f95a2a012fb1f688f5ecb11d6998f0 [[$./end_at#a12f95a2a012fb1f688f5ecb11d6998f0 {"[条件组]OR"}]] {
state " " as 12f95a2a012fb1f688f5ecb11d6998f0_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 742797b9db3a685d1d0ea57566f6193c [[$./end_at#a742797b9db3a685d1d0ea57566f6193c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6455296f90a294ee8cbac2983c66438d [[$./end_at#a6455296f90a294ee8cbac2983c66438d {"[条件组]OR"}]] {
state " " as 6455296f90a294ee8cbac2983c66438d_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 9c644eb8b55ec1fb7da4d067151f0feb [[$./end_at#a9c644eb8b55ec1fb7da4d067151f0feb {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 618690399e9908f3c20a3e4a6ebcffa3 [[$./end_at#a618690399e9908f3c20a3e4a6ebcffa3 {"[常规条件] 值为空(Nil)"}]]
state " " as 6455296f90a294ee8cbac2983c66438d_exit  <<exitPoint>>
}
state " " as 12f95a2a012fb1f688f5ecb11d6998f0_exit  <<exitPoint>>
}


start --> 12f95a2a012fb1f688f5ecb11d6998f0_entry 
12f95a2a012fb1f688f5ecb11d6998f0_entry --> 742797b9db3a685d1d0ea57566f6193c 
742797b9db3a685d1d0ea57566f6193c --> 12f95a2a012fb1f688f5ecb11d6998f0_exit  : yes
742797b9db3a685d1d0ea57566f6193c -[#red]-> 6455296f90a294ee8cbac2983c66438d_entry  : no

6455296f90a294ee8cbac2983c66438d_entry --> 9c644eb8b55ec1fb7da4d067151f0feb 
9c644eb8b55ec1fb7da4d067151f0feb --> 6455296f90a294ee8cbac2983c66438d_exit  : yes
9c644eb8b55ec1fb7da4d067151f0feb -[#red]-> 618690399e9908f3c20a3e4a6ebcffa3  : no

618690399e9908f3c20a3e4a6ebcffa3 --> 6455296f90a294ee8cbac2983c66438d_exit  : yes
618690399e9908f3c20a3e4a6ebcffa3 -[#red]-> end  : no
6455296f90a294ee8cbac2983c66438d_exit --> 12f95a2a012fb1f688f5ecb11d6998f0_exit 
12f95a2a012fb1f688f5ecb11d6998f0_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a9c644eb8b55ec1fb7da4d067151f0feb



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a618690399e9908f3c20a3e4a6ebcffa3



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a742797b9db3a685d1d0ea57566f6193c



`END_AT(计划结束)` ISNULL 






