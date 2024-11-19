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
state "[条件组]OR" as 3b966233ba943a7d2c11dec8e16283d8 [[$./start_at#a3b966233ba943a7d2c11dec8e16283d8 {"[条件组]OR"}]] {
state " " as 3b966233ba943a7d2c11dec8e16283d8_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 81921b82ad71a201ce8b1bd2dbb9128e [[$./start_at#a81921b82ad71a201ce8b1bd2dbb9128e {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as da056a7dbe675942fafd401a2faeeadb [[$./start_at#ada056a7dbe675942fafd401a2faeeadb {"[条件组]OR"}]] {
state " " as da056a7dbe675942fafd401a2faeeadb_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9fefc08892fc2ebcca14d851c23160d3 [[$./start_at#a9fefc08892fc2ebcca14d851c23160d3 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as dc17d3b0f3e2ba3819d2a72dce974e42 [[$./start_at#adc17d3b0f3e2ba3819d2a72dce974e42 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as da056a7dbe675942fafd401a2faeeadb_exit  <<exitPoint>>
}
state " " as 3b966233ba943a7d2c11dec8e16283d8_exit  <<exitPoint>>
}


start --> 3b966233ba943a7d2c11dec8e16283d8_entry 
3b966233ba943a7d2c11dec8e16283d8_entry --> 81921b82ad71a201ce8b1bd2dbb9128e 
81921b82ad71a201ce8b1bd2dbb9128e --> 3b966233ba943a7d2c11dec8e16283d8_exit  : yes
81921b82ad71a201ce8b1bd2dbb9128e -[#red]-> da056a7dbe675942fafd401a2faeeadb_entry  : no

da056a7dbe675942fafd401a2faeeadb_entry --> 9fefc08892fc2ebcca14d851c23160d3 
9fefc08892fc2ebcca14d851c23160d3 --> da056a7dbe675942fafd401a2faeeadb_exit  : yes
9fefc08892fc2ebcca14d851c23160d3 -[#red]-> dc17d3b0f3e2ba3819d2a72dce974e42  : no

dc17d3b0f3e2ba3819d2a72dce974e42 --> da056a7dbe675942fafd401a2faeeadb_exit  : yes
dc17d3b0f3e2ba3819d2a72dce974e42 -[#red]-> end  : no
da056a7dbe675942fafd401a2faeeadb_exit --> 3b966233ba943a7d2c11dec8e16283d8_exit 
3b966233ba943a7d2c11dec8e16283d8_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a81921b82ad71a201ce8b1bd2dbb9128e



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=adc17d3b0f3e2ba3819d2a72dce974e42



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a9fefc08892fc2ebcca14d851c23160d3



`END_AT(结束时间)` ISNULL 






