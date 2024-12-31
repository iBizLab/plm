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
state "[条件组]OR" as dbe518f4042e184537ffa96cb2399a62 [[$./start_at#adbe518f4042e184537ffa96cb2399a62 {"[条件组]OR"}]] {
state " " as dbe518f4042e184537ffa96cb2399a62_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ea1b4e925ec8ca7c65b9ea2c017e7aa1 [[$./start_at#aea1b4e925ec8ca7c65b9ea2c017e7aa1 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 4291def8b874d4ccdad6b18170da8a46 [[$./start_at#a4291def8b874d4ccdad6b18170da8a46 {"[条件组]OR"}]] {
state " " as 4291def8b874d4ccdad6b18170da8a46_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 60a7dad18316526d2143d50ebc392251 [[$./start_at#a60a7dad18316526d2143d50ebc392251 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 4160172e2f8324590e47d8be82095319 [[$./start_at#a4160172e2f8324590e47d8be82095319 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 4291def8b874d4ccdad6b18170da8a46_exit  <<exitPoint>>
}
state " " as dbe518f4042e184537ffa96cb2399a62_exit  <<exitPoint>>
}


start --> dbe518f4042e184537ffa96cb2399a62_entry 
dbe518f4042e184537ffa96cb2399a62_entry --> ea1b4e925ec8ca7c65b9ea2c017e7aa1 
ea1b4e925ec8ca7c65b9ea2c017e7aa1 --> dbe518f4042e184537ffa96cb2399a62_exit  : yes
ea1b4e925ec8ca7c65b9ea2c017e7aa1 -[#red]-> 4291def8b874d4ccdad6b18170da8a46_entry  : no

4291def8b874d4ccdad6b18170da8a46_entry --> 60a7dad18316526d2143d50ebc392251 
60a7dad18316526d2143d50ebc392251 --> 4291def8b874d4ccdad6b18170da8a46_exit  : yes
60a7dad18316526d2143d50ebc392251 -[#red]-> 4160172e2f8324590e47d8be82095319  : no

4160172e2f8324590e47d8be82095319 --> 4291def8b874d4ccdad6b18170da8a46_exit  : yes
4160172e2f8324590e47d8be82095319 -[#red]-> end  : no
4291def8b874d4ccdad6b18170da8a46_exit --> dbe518f4042e184537ffa96cb2399a62_exit 
dbe518f4042e184537ffa96cb2399a62_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=aea1b4e925ec8ca7c65b9ea2c017e7aa1



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a60a7dad18316526d2143d50ebc392251



`END_AT(截止时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a4160172e2f8324590e47d8be82095319



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







