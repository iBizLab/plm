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
state "[条件组]OR" as 86ea1357dad5d98b2f8d03e91b0c3fd9 [[$./start_at#a86ea1357dad5d98b2f8d03e91b0c3fd9 {"[条件组]OR"}]] {
state " " as 86ea1357dad5d98b2f8d03e91b0c3fd9_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 6a34d259fe777768be6a371dc9f79a22 [[$./start_at#a6a34d259fe777768be6a371dc9f79a22 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3b966233ba943a7d2c11dec8e16283d8 [[$./start_at#a3b966233ba943a7d2c11dec8e16283d8 {"[条件组]OR"}]] {
state " " as 3b966233ba943a7d2c11dec8e16283d8_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 81921b82ad71a201ce8b1bd2dbb9128e [[$./start_at#a81921b82ad71a201ce8b1bd2dbb9128e {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 20565e8717582d0b41c4512f871ec66f [[$./start_at#a20565e8717582d0b41c4512f871ec66f {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 3b966233ba943a7d2c11dec8e16283d8_exit  <<exitPoint>>
}
state " " as 86ea1357dad5d98b2f8d03e91b0c3fd9_exit  <<exitPoint>>
}


start --> 86ea1357dad5d98b2f8d03e91b0c3fd9_entry 
86ea1357dad5d98b2f8d03e91b0c3fd9_entry --> 6a34d259fe777768be6a371dc9f79a22 
6a34d259fe777768be6a371dc9f79a22 --> 86ea1357dad5d98b2f8d03e91b0c3fd9_exit  : yes
6a34d259fe777768be6a371dc9f79a22 -[#red]-> 3b966233ba943a7d2c11dec8e16283d8_entry  : no

3b966233ba943a7d2c11dec8e16283d8_entry --> 81921b82ad71a201ce8b1bd2dbb9128e 
81921b82ad71a201ce8b1bd2dbb9128e --> 3b966233ba943a7d2c11dec8e16283d8_exit  : yes
81921b82ad71a201ce8b1bd2dbb9128e -[#red]-> 20565e8717582d0b41c4512f871ec66f  : no

20565e8717582d0b41c4512f871ec66f --> 3b966233ba943a7d2c11dec8e16283d8_exit  : yes
20565e8717582d0b41c4512f871ec66f -[#red]-> end  : no
3b966233ba943a7d2c11dec8e16283d8_exit --> 86ea1357dad5d98b2f8d03e91b0c3fd9_exit 
86ea1357dad5d98b2f8d03e91b0c3fd9_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a81921b82ad71a201ce8b1bd2dbb9128e



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a20565e8717582d0b41c4512f871ec66f



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a6a34d259fe777768be6a371dc9f79a22



`START_AT(计划开始)` ISNULL 






