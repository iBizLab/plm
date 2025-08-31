## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 199af4f22eb3ddbfe99e3e54ecb0e9e9 [[$./end_at#a199af4f22eb3ddbfe99e3e54ecb0e9e9 {"[条件组]OR"}]] {
state " " as 199af4f22eb3ddbfe99e3e54ecb0e9e9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c0c4d376e02cd18d7a4fff2cddb84c2b [[$./end_at#ac0c4d376e02cd18d7a4fff2cddb84c2b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 801adca9f50174fa8f44046d2cfa0895 [[$./end_at#a801adca9f50174fa8f44046d2cfa0895 {"[条件组]OR"}]] {
state " " as 801adca9f50174fa8f44046d2cfa0895_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 965030c14661642b15a991a23d732f65 [[$./end_at#a965030c14661642b15a991a23d732f65 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 65f824dd9a4fd52c083fdc629051ac40 [[$./end_at#a65f824dd9a4fd52c083fdc629051ac40 {"[常规条件] 值为空(Nil)"}]]
state " " as 801adca9f50174fa8f44046d2cfa0895_exit  <<exitPoint>>
}
state " " as 199af4f22eb3ddbfe99e3e54ecb0e9e9_exit  <<exitPoint>>
}


start --> 199af4f22eb3ddbfe99e3e54ecb0e9e9_entry 
199af4f22eb3ddbfe99e3e54ecb0e9e9_entry --> c0c4d376e02cd18d7a4fff2cddb84c2b 
c0c4d376e02cd18d7a4fff2cddb84c2b --> 199af4f22eb3ddbfe99e3e54ecb0e9e9_exit  : yes
c0c4d376e02cd18d7a4fff2cddb84c2b -[#red]-> 801adca9f50174fa8f44046d2cfa0895_entry  : no

801adca9f50174fa8f44046d2cfa0895_entry --> 965030c14661642b15a991a23d732f65 
965030c14661642b15a991a23d732f65 --> 801adca9f50174fa8f44046d2cfa0895_exit  : yes
965030c14661642b15a991a23d732f65 -[#red]-> 65f824dd9a4fd52c083fdc629051ac40  : no

65f824dd9a4fd52c083fdc629051ac40 --> 801adca9f50174fa8f44046d2cfa0895_exit  : yes
65f824dd9a4fd52c083fdc629051ac40 -[#red]-> end  : no
801adca9f50174fa8f44046d2cfa0895_exit --> 199af4f22eb3ddbfe99e3e54ecb0e9e9_exit 
199af4f22eb3ddbfe99e3e54ecb0e9e9_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a965030c14661642b15a991a23d732f65



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a65f824dd9a4fd52c083fdc629051ac40



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ac0c4d376e02cd18d7a4fff2cddb84c2b



`END_AT(发布时间)` ISNULL 






