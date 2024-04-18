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
state "[条件组]OR" as 4c4811f37fd3f5bb80423862c34c72bf [[$./start_at#a4c4811f37fd3f5bb80423862c34c72bf {"[条件组]OR"}]] {
state " " as 4c4811f37fd3f5bb80423862c34c72bf_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b7fa2281f0b6e8a6fa6a6ada20b07281 [[$./start_at#ab7fa2281f0b6e8a6fa6a6ada20b07281 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c14e82da81e35233eb35cd232cc07a62 [[$./start_at#ac14e82da81e35233eb35cd232cc07a62 {"[条件组]OR"}]] {
state " " as c14e82da81e35233eb35cd232cc07a62_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 1e01d3393bf7282e38cbed9b2fa53301 [[$./start_at#a1e01d3393bf7282e38cbed9b2fa53301 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as fc502d236395754dc165c86730650f34 [[$./start_at#afc502d236395754dc165c86730650f34 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c14e82da81e35233eb35cd232cc07a62_exit  <<exitPoint>>
}
state " " as 4c4811f37fd3f5bb80423862c34c72bf_exit  <<exitPoint>>
}


start --> 4c4811f37fd3f5bb80423862c34c72bf_entry 
4c4811f37fd3f5bb80423862c34c72bf_entry --> b7fa2281f0b6e8a6fa6a6ada20b07281 
b7fa2281f0b6e8a6fa6a6ada20b07281 --> 4c4811f37fd3f5bb80423862c34c72bf_exit  : yes
b7fa2281f0b6e8a6fa6a6ada20b07281 -[#red]-> c14e82da81e35233eb35cd232cc07a62_entry  : no

c14e82da81e35233eb35cd232cc07a62_entry --> 1e01d3393bf7282e38cbed9b2fa53301 
1e01d3393bf7282e38cbed9b2fa53301 --> c14e82da81e35233eb35cd232cc07a62_exit  : yes
1e01d3393bf7282e38cbed9b2fa53301 -[#red]-> fc502d236395754dc165c86730650f34  : no

fc502d236395754dc165c86730650f34 --> c14e82da81e35233eb35cd232cc07a62_exit  : yes
fc502d236395754dc165c86730650f34 -[#red]-> end  : no
c14e82da81e35233eb35cd232cc07a62_exit --> 4c4811f37fd3f5bb80423862c34c72bf_exit 
4c4811f37fd3f5bb80423862c34c72bf_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=afc502d236395754dc165c86730650f34



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=ab7fa2281f0b6e8a6fa6a6ada20b07281



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a1e01d3393bf7282e38cbed9b2fa53301



`END_AT(结束时间)` ISNULL 






