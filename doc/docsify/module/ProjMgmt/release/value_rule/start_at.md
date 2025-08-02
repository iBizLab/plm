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
state "[条件组]OR" as 87c931f77c58d4702463af4fd19a34fb [[$./start_at#a87c931f77c58d4702463af4fd19a34fb {"[条件组]OR"}]] {
state " " as 87c931f77c58d4702463af4fd19a34fb_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as dfab5df519ad42e8a9cf7e58ad9cf3db [[$./start_at#adfab5df519ad42e8a9cf7e58ad9cf3db {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 199af4f22eb3ddbfe99e3e54ecb0e9e9 [[$./start_at#a199af4f22eb3ddbfe99e3e54ecb0e9e9 {"[条件组]OR"}]] {
state " " as 199af4f22eb3ddbfe99e3e54ecb0e9e9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c0c4d376e02cd18d7a4fff2cddb84c2b [[$./start_at#ac0c4d376e02cd18d7a4fff2cddb84c2b {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 738be152939d62b11179179c4267f32c [[$./start_at#a738be152939d62b11179179c4267f32c {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 199af4f22eb3ddbfe99e3e54ecb0e9e9_exit  <<exitPoint>>
}
state " " as 87c931f77c58d4702463af4fd19a34fb_exit  <<exitPoint>>
}


start --> 87c931f77c58d4702463af4fd19a34fb_entry 
87c931f77c58d4702463af4fd19a34fb_entry --> dfab5df519ad42e8a9cf7e58ad9cf3db 
dfab5df519ad42e8a9cf7e58ad9cf3db --> 87c931f77c58d4702463af4fd19a34fb_exit  : yes
dfab5df519ad42e8a9cf7e58ad9cf3db -[#red]-> 199af4f22eb3ddbfe99e3e54ecb0e9e9_entry  : no

199af4f22eb3ddbfe99e3e54ecb0e9e9_entry --> c0c4d376e02cd18d7a4fff2cddb84c2b 
c0c4d376e02cd18d7a4fff2cddb84c2b --> 199af4f22eb3ddbfe99e3e54ecb0e9e9_exit  : yes
c0c4d376e02cd18d7a4fff2cddb84c2b -[#red]-> 738be152939d62b11179179c4267f32c  : no

738be152939d62b11179179c4267f32c --> 199af4f22eb3ddbfe99e3e54ecb0e9e9_exit  : yes
738be152939d62b11179179c4267f32c -[#red]-> end  : no
199af4f22eb3ddbfe99e3e54ecb0e9e9_exit --> 87c931f77c58d4702463af4fd19a34fb_exit 
87c931f77c58d4702463af4fd19a34fb_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=adfab5df519ad42e8a9cf7e58ad9cf3db



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a738be152939d62b11179179c4267f32c



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=ac0c4d376e02cd18d7a4fff2cddb84c2b



`END_AT(发布时间)` ISNULL 






