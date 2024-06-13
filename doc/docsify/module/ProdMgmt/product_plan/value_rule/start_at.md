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
state "[条件组]OR" as db0e035a5c4b676156299ad4b7ff68dc [[$./start_at#adb0e035a5c4b676156299ad4b7ff68dc {"[条件组]OR"}]] {
state " " as db0e035a5c4b676156299ad4b7ff68dc_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cff5b794a032fc867977512b8126caf5 [[$./start_at#acff5b794a032fc867977512b8126caf5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6c6206feafd1134c77e94bcf1d666e71 [[$./start_at#a6c6206feafd1134c77e94bcf1d666e71 {"[条件组]OR"}]] {
state " " as 6c6206feafd1134c77e94bcf1d666e71_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f3cc251348a7a1e0f851d2887c1a784a [[$./start_at#af3cc251348a7a1e0f851d2887c1a784a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0218279c897c74888b2f9c344937ba2f [[$./start_at#a0218279c897c74888b2f9c344937ba2f {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 6c6206feafd1134c77e94bcf1d666e71_exit  <<exitPoint>>
}
state " " as db0e035a5c4b676156299ad4b7ff68dc_exit  <<exitPoint>>
}


start --> db0e035a5c4b676156299ad4b7ff68dc_entry 
db0e035a5c4b676156299ad4b7ff68dc_entry --> cff5b794a032fc867977512b8126caf5 
cff5b794a032fc867977512b8126caf5 --> db0e035a5c4b676156299ad4b7ff68dc_exit  : yes
cff5b794a032fc867977512b8126caf5 -[#red]-> 6c6206feafd1134c77e94bcf1d666e71_entry  : no

6c6206feafd1134c77e94bcf1d666e71_entry --> f3cc251348a7a1e0f851d2887c1a784a 
f3cc251348a7a1e0f851d2887c1a784a --> 6c6206feafd1134c77e94bcf1d666e71_exit  : yes
f3cc251348a7a1e0f851d2887c1a784a -[#red]-> 0218279c897c74888b2f9c344937ba2f  : no

0218279c897c74888b2f9c344937ba2f --> 6c6206feafd1134c77e94bcf1d666e71_exit  : yes
0218279c897c74888b2f9c344937ba2f -[#red]-> end  : no
6c6206feafd1134c77e94bcf1d666e71_exit --> db0e035a5c4b676156299ad4b7ff68dc_exit 
db0e035a5c4b676156299ad4b7ff68dc_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0218279c897c74888b2f9c344937ba2f



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=acff5b794a032fc867977512b8126caf5



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=af3cc251348a7a1e0f851d2887c1a784a



`END_AT(计划结束)` ISNULL 






