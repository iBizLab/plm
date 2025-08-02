## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as f4f6afdd313fc69d8acaa01bacea40ef [[$./start_at#af4f6afdd313fc69d8acaa01bacea40ef {"[条件组]OR"}]] {
state " " as f4f6afdd313fc69d8acaa01bacea40ef_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1f38ca245ea5dff460695d7cf86a365e [[$./start_at#a1f38ca245ea5dff460695d7cf86a365e {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 847068d5a7df3459056a5f72bc99d24a [[$./start_at#a847068d5a7df3459056a5f72bc99d24a {"[条件组]OR"}]] {
state " " as 847068d5a7df3459056a5f72bc99d24a_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0bbe2fd6c09f2c59c312319cfb3663c5 [[$./start_at#a0bbe2fd6c09f2c59c312319cfb3663c5 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 742797b9db3a685d1d0ea57566f6193c [[$./start_at#a742797b9db3a685d1d0ea57566f6193c {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 847068d5a7df3459056a5f72bc99d24a_exit  <<exitPoint>>
}
state " " as f4f6afdd313fc69d8acaa01bacea40ef_exit  <<exitPoint>>
}


start --> f4f6afdd313fc69d8acaa01bacea40ef_entry 
f4f6afdd313fc69d8acaa01bacea40ef_entry --> 1f38ca245ea5dff460695d7cf86a365e 
1f38ca245ea5dff460695d7cf86a365e --> f4f6afdd313fc69d8acaa01bacea40ef_exit  : yes
1f38ca245ea5dff460695d7cf86a365e -[#red]-> 847068d5a7df3459056a5f72bc99d24a_entry  : no

847068d5a7df3459056a5f72bc99d24a_entry --> 0bbe2fd6c09f2c59c312319cfb3663c5 
0bbe2fd6c09f2c59c312319cfb3663c5 --> 847068d5a7df3459056a5f72bc99d24a_exit  : yes
0bbe2fd6c09f2c59c312319cfb3663c5 -[#red]-> 742797b9db3a685d1d0ea57566f6193c  : no

742797b9db3a685d1d0ea57566f6193c --> 847068d5a7df3459056a5f72bc99d24a_exit  : yes
742797b9db3a685d1d0ea57566f6193c -[#red]-> end  : no
847068d5a7df3459056a5f72bc99d24a_exit --> f4f6afdd313fc69d8acaa01bacea40ef_exit 
f4f6afdd313fc69d8acaa01bacea40ef_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a1f38ca245ea5dff460695d7cf86a365e



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a0bbe2fd6c09f2c59c312319cfb3663c5



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a742797b9db3a685d1d0ea57566f6193c



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







