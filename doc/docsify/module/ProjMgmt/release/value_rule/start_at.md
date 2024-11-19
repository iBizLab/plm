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
state "[条件组]OR" as 7081ae2927d3d890e9661cf7115c95f0 [[$./start_at#a7081ae2927d3d890e9661cf7115c95f0 {"[条件组]OR"}]] {
state " " as 7081ae2927d3d890e9661cf7115c95f0_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 607ebd210bcd7f858b2bc95cae70b10a [[$./start_at#a607ebd210bcd7f858b2bc95cae70b10a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e5926f9f55a4ce3bdfefb9807546ea59 [[$./start_at#ae5926f9f55a4ce3bdfefb9807546ea59 {"[条件组]OR"}]] {
state " " as e5926f9f55a4ce3bdfefb9807546ea59_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 15867ed50e8b644f9848996377f20fe6 [[$./start_at#a15867ed50e8b644f9848996377f20fe6 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as ecfd8daeb32d9452f266779e1e033359 [[$./start_at#aecfd8daeb32d9452f266779e1e033359 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as e5926f9f55a4ce3bdfefb9807546ea59_exit  <<exitPoint>>
}
state " " as 7081ae2927d3d890e9661cf7115c95f0_exit  <<exitPoint>>
}


start --> 7081ae2927d3d890e9661cf7115c95f0_entry 
7081ae2927d3d890e9661cf7115c95f0_entry --> 607ebd210bcd7f858b2bc95cae70b10a 
607ebd210bcd7f858b2bc95cae70b10a --> 7081ae2927d3d890e9661cf7115c95f0_exit  : yes
607ebd210bcd7f858b2bc95cae70b10a -[#red]-> e5926f9f55a4ce3bdfefb9807546ea59_entry  : no

e5926f9f55a4ce3bdfefb9807546ea59_entry --> 15867ed50e8b644f9848996377f20fe6 
15867ed50e8b644f9848996377f20fe6 --> e5926f9f55a4ce3bdfefb9807546ea59_exit  : yes
15867ed50e8b644f9848996377f20fe6 -[#red]-> ecfd8daeb32d9452f266779e1e033359  : no

ecfd8daeb32d9452f266779e1e033359 --> e5926f9f55a4ce3bdfefb9807546ea59_exit  : yes
ecfd8daeb32d9452f266779e1e033359 -[#red]-> end  : no
e5926f9f55a4ce3bdfefb9807546ea59_exit --> 7081ae2927d3d890e9661cf7115c95f0_exit 
7081ae2927d3d890e9661cf7115c95f0_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a607ebd210bcd7f858b2bc95cae70b10a



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aecfd8daeb32d9452f266779e1e033359



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a15867ed50e8b644f9848996377f20fe6



`END_AT(发布时间)` ISNULL 






