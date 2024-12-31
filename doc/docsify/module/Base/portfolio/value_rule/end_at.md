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
state "[条件组]OR" as 3ad4970ed00c9c0f48cdf56937b27721 [[$./end_at#a3ad4970ed00c9c0f48cdf56937b27721 {"[条件组]OR"}]] {
state " " as 3ad4970ed00c9c0f48cdf56937b27721_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0c7e1a8f4fb8fa4773353b2fd8c55cd0 [[$./end_at#a0c7e1a8f4fb8fa4773353b2fd8c55cd0 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 4890670f5e4c1c2c57de8275bd6a4206 [[$./end_at#a4890670f5e4c1c2c57de8275bd6a4206 {"[条件组]OR"}]] {
state " " as 4890670f5e4c1c2c57de8275bd6a4206_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 7988f6512fab43139da532966bdab504 [[$./end_at#a7988f6512fab43139da532966bdab504 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 001b19a5c56048018931f06ab9152a70 [[$./end_at#a001b19a5c56048018931f06ab9152a70 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 4890670f5e4c1c2c57de8275bd6a4206_exit  <<exitPoint>>
}
state " " as 3ad4970ed00c9c0f48cdf56937b27721_exit  <<exitPoint>>
}


start --> 3ad4970ed00c9c0f48cdf56937b27721_entry 
3ad4970ed00c9c0f48cdf56937b27721_entry --> 0c7e1a8f4fb8fa4773353b2fd8c55cd0 
0c7e1a8f4fb8fa4773353b2fd8c55cd0 --> 3ad4970ed00c9c0f48cdf56937b27721_exit  : yes
0c7e1a8f4fb8fa4773353b2fd8c55cd0 -[#red]-> 4890670f5e4c1c2c57de8275bd6a4206_entry  : no

4890670f5e4c1c2c57de8275bd6a4206_entry --> 7988f6512fab43139da532966bdab504 
7988f6512fab43139da532966bdab504 --> 4890670f5e4c1c2c57de8275bd6a4206_exit  : yes
7988f6512fab43139da532966bdab504 -[#red]-> 001b19a5c56048018931f06ab9152a70  : no

001b19a5c56048018931f06ab9152a70 --> 4890670f5e4c1c2c57de8275bd6a4206_exit  : yes
001b19a5c56048018931f06ab9152a70 -[#red]-> end  : no
4890670f5e4c1c2c57de8275bd6a4206_exit --> 3ad4970ed00c9c0f48cdf56937b27721_exit 
3ad4970ed00c9c0f48cdf56937b27721_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a7988f6512fab43139da532966bdab504



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a001b19a5c56048018931f06ab9152a70



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a0c7e1a8f4fb8fa4773353b2fd8c55cd0



`END_AT(结束时间)` ISNULL 






