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
state "[条件组]OR" as 4e3dbb9a09e5aee65823f2c1cdf70ead [[$./start_at#a4e3dbb9a09e5aee65823f2c1cdf70ead {"[条件组]OR"}]] {
state " " as 4e3dbb9a09e5aee65823f2c1cdf70ead_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as f7165bd7c1be668131b1f3bf0550a722 [[$./start_at#af7165bd7c1be668131b1f3bf0550a722 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2f4ca300385230a30a7f090f652f2415 [[$./start_at#a2f4ca300385230a30a7f090f652f2415 {"[条件组]OR"}]] {
state " " as 2f4ca300385230a30a7f090f652f2415_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 28530137f6bca8edfd3482b7510785b2 [[$./start_at#a28530137f6bca8edfd3482b7510785b2 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 489329445d1063408f0e13097fabeae5 [[$./start_at#a489329445d1063408f0e13097fabeae5 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 2f4ca300385230a30a7f090f652f2415_exit  <<exitPoint>>
}
state " " as 4e3dbb9a09e5aee65823f2c1cdf70ead_exit  <<exitPoint>>
}


start --> 4e3dbb9a09e5aee65823f2c1cdf70ead_entry 
4e3dbb9a09e5aee65823f2c1cdf70ead_entry --> f7165bd7c1be668131b1f3bf0550a722 
f7165bd7c1be668131b1f3bf0550a722 --> 4e3dbb9a09e5aee65823f2c1cdf70ead_exit  : yes
f7165bd7c1be668131b1f3bf0550a722 -[#red]-> 2f4ca300385230a30a7f090f652f2415_entry  : no

2f4ca300385230a30a7f090f652f2415_entry --> 28530137f6bca8edfd3482b7510785b2 
28530137f6bca8edfd3482b7510785b2 --> 2f4ca300385230a30a7f090f652f2415_exit  : yes
28530137f6bca8edfd3482b7510785b2 -[#red]-> 489329445d1063408f0e13097fabeae5  : no

489329445d1063408f0e13097fabeae5 --> 2f4ca300385230a30a7f090f652f2415_exit  : yes
489329445d1063408f0e13097fabeae5 -[#red]-> end  : no
2f4ca300385230a30a7f090f652f2415_exit --> 4e3dbb9a09e5aee65823f2c1cdf70ead_exit 
4e3dbb9a09e5aee65823f2c1cdf70ead_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=af7165bd7c1be668131b1f3bf0550a722



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a28530137f6bca8edfd3482b7510785b2



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a489329445d1063408f0e13097fabeae5



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







