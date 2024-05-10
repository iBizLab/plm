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
state "[条件组]OR" as e406756c7978d0a99e49952f5461c958 [[$./start_at#ae406756c7978d0a99e49952f5461c958 {"[条件组]OR"}]] {
state " " as e406756c7978d0a99e49952f5461c958_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 00dee1ffaf77f2d2f99fa2c192151e72 [[$./start_at#a00dee1ffaf77f2d2f99fa2c192151e72 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f98fe4ff17aabfee31a30bfd1924f9f5 [[$./start_at#af98fe4ff17aabfee31a30bfd1924f9f5 {"[条件组]OR"}]] {
state " " as f98fe4ff17aabfee31a30bfd1924f9f5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as cbeb5c5e660565de4141875064339032 [[$./start_at#acbeb5c5e660565de4141875064339032 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 86a806b6021f10a4de3193c4e6d84705 [[$./start_at#a86a806b6021f10a4de3193c4e6d84705 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as f98fe4ff17aabfee31a30bfd1924f9f5_exit  <<exitPoint>>
}
state " " as e406756c7978d0a99e49952f5461c958_exit  <<exitPoint>>
}


start --> e406756c7978d0a99e49952f5461c958_entry 
e406756c7978d0a99e49952f5461c958_entry --> 00dee1ffaf77f2d2f99fa2c192151e72 
00dee1ffaf77f2d2f99fa2c192151e72 --> e406756c7978d0a99e49952f5461c958_exit  : yes
00dee1ffaf77f2d2f99fa2c192151e72 -[#red]-> f98fe4ff17aabfee31a30bfd1924f9f5_entry  : no

f98fe4ff17aabfee31a30bfd1924f9f5_entry --> cbeb5c5e660565de4141875064339032 
cbeb5c5e660565de4141875064339032 --> f98fe4ff17aabfee31a30bfd1924f9f5_exit  : yes
cbeb5c5e660565de4141875064339032 -[#red]-> 86a806b6021f10a4de3193c4e6d84705  : no

86a806b6021f10a4de3193c4e6d84705 --> f98fe4ff17aabfee31a30bfd1924f9f5_exit  : yes
86a806b6021f10a4de3193c4e6d84705 -[#red]-> end  : no
f98fe4ff17aabfee31a30bfd1924f9f5_exit --> e406756c7978d0a99e49952f5461c958_exit 
e406756c7978d0a99e49952f5461c958_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=acbeb5c5e660565de4141875064339032



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a86a806b6021f10a4de3193c4e6d84705



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a00dee1ffaf77f2d2f99fa2c192151e72



`START_AT(开始时间)` ISNULL 






