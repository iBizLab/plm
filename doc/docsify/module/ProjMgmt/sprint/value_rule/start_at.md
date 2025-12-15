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
state "[条件组]OR" as 4c17887cb5f7c08f0a276a3633127f1d [[$./start_at#a4c17887cb5f7c08f0a276a3633127f1d {"[条件组]OR"}]] {
state " " as 4c17887cb5f7c08f0a276a3633127f1d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 588b948fefb819d25315415fecfbab49 [[$./start_at#a588b948fefb819d25315415fecfbab49 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as fed54f223ea59bb6066a7212c4144085 [[$./start_at#afed54f223ea59bb6066a7212c4144085 {"[条件组]OR"}]] {
state " " as fed54f223ea59bb6066a7212c4144085_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b5c22a1088bdab46269b3bb21b5c9ef0 [[$./start_at#ab5c22a1088bdab46269b3bb21b5c9ef0 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0313a20b3a1c22f36a22ad2ff7e6b2bc [[$./start_at#a0313a20b3a1c22f36a22ad2ff7e6b2bc {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as fed54f223ea59bb6066a7212c4144085_exit  <<exitPoint>>
}
state " " as 4c17887cb5f7c08f0a276a3633127f1d_exit  <<exitPoint>>
}


start --> 4c17887cb5f7c08f0a276a3633127f1d_entry 
4c17887cb5f7c08f0a276a3633127f1d_entry --> 588b948fefb819d25315415fecfbab49 
588b948fefb819d25315415fecfbab49 --> 4c17887cb5f7c08f0a276a3633127f1d_exit  : yes
588b948fefb819d25315415fecfbab49 -[#red]-> fed54f223ea59bb6066a7212c4144085_entry  : no

fed54f223ea59bb6066a7212c4144085_entry --> b5c22a1088bdab46269b3bb21b5c9ef0 
b5c22a1088bdab46269b3bb21b5c9ef0 --> fed54f223ea59bb6066a7212c4144085_exit  : yes
b5c22a1088bdab46269b3bb21b5c9ef0 -[#red]-> 0313a20b3a1c22f36a22ad2ff7e6b2bc  : no

0313a20b3a1c22f36a22ad2ff7e6b2bc --> fed54f223ea59bb6066a7212c4144085_exit  : yes
0313a20b3a1c22f36a22ad2ff7e6b2bc -[#red]-> end  : no
fed54f223ea59bb6066a7212c4144085_exit --> 4c17887cb5f7c08f0a276a3633127f1d_exit 
4c17887cb5f7c08f0a276a3633127f1d_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ab5c22a1088bdab46269b3bb21b5c9ef0



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0313a20b3a1c22f36a22ad2ff7e6b2bc



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a588b948fefb819d25315415fecfbab49



`START_AT(开始时间)` ISNULL 






