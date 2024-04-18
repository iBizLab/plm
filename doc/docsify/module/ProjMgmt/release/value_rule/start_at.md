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
state "[条件组]OR" as 334c25038a747c909817a478b8c1ffca [[$./start_at#a334c25038a747c909817a478b8c1ffca {"[条件组]OR"}]] {
state " " as 334c25038a747c909817a478b8c1ffca_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 2a346efe40a3ad69d2228d07cdc5986c [[$./start_at#a2a346efe40a3ad69d2228d07cdc5986c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 8f2e2ae73ef16ae4c42968a4505831ff [[$./start_at#a8f2e2ae73ef16ae4c42968a4505831ff {"[条件组]OR"}]] {
state " " as 8f2e2ae73ef16ae4c42968a4505831ff_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 457575bd95b7567cdea0b2444812a6c2 [[$./start_at#a457575bd95b7567cdea0b2444812a6c2 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 7bcef9952067f01b5d1bbf01ed47622c [[$./start_at#a7bcef9952067f01b5d1bbf01ed47622c {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 8f2e2ae73ef16ae4c42968a4505831ff_exit  <<exitPoint>>
}
state " " as 334c25038a747c909817a478b8c1ffca_exit  <<exitPoint>>
}


start --> 334c25038a747c909817a478b8c1ffca_entry 
334c25038a747c909817a478b8c1ffca_entry --> 2a346efe40a3ad69d2228d07cdc5986c 
2a346efe40a3ad69d2228d07cdc5986c --> 334c25038a747c909817a478b8c1ffca_exit  : yes
2a346efe40a3ad69d2228d07cdc5986c -[#red]-> 8f2e2ae73ef16ae4c42968a4505831ff_entry  : no

8f2e2ae73ef16ae4c42968a4505831ff_entry --> 457575bd95b7567cdea0b2444812a6c2 
457575bd95b7567cdea0b2444812a6c2 --> 8f2e2ae73ef16ae4c42968a4505831ff_exit  : yes
457575bd95b7567cdea0b2444812a6c2 -[#red]-> 7bcef9952067f01b5d1bbf01ed47622c  : no

7bcef9952067f01b5d1bbf01ed47622c --> 8f2e2ae73ef16ae4c42968a4505831ff_exit  : yes
7bcef9952067f01b5d1bbf01ed47622c -[#red]-> end  : no
8f2e2ae73ef16ae4c42968a4505831ff_exit --> 334c25038a747c909817a478b8c1ffca_exit 
334c25038a747c909817a478b8c1ffca_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a7bcef9952067f01b5d1bbf01ed47622c



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a2a346efe40a3ad69d2228d07cdc5986c



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a457575bd95b7567cdea0b2444812a6c2



`END_AT(发布时间)` ISNULL 






