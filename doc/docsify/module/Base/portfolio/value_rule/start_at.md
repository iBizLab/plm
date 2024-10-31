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
state "[条件组]OR" as 4a3a79c6481f4bd2080798fcb64b6529 [[$./start_at#a4a3a79c6481f4bd2080798fcb64b6529 {"[条件组]OR"}]] {
state " " as 4a3a79c6481f4bd2080798fcb64b6529_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 184be4d91964548418982b44619214a4 [[$./start_at#a184be4d91964548418982b44619214a4 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2f38fa971a442723789bc3b1d14b0ffe [[$./start_at#a2f38fa971a442723789bc3b1d14b0ffe {"[条件组]OR"}]] {
state " " as 2f38fa971a442723789bc3b1d14b0ffe_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b468add3c0ad7b60dcb07005f9542e9c [[$./start_at#ab468add3c0ad7b60dcb07005f9542e9c {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as d40bed763976f02fd7308611f60c50bb [[$./start_at#ad40bed763976f02fd7308611f60c50bb {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 2f38fa971a442723789bc3b1d14b0ffe_exit  <<exitPoint>>
}
state " " as 4a3a79c6481f4bd2080798fcb64b6529_exit  <<exitPoint>>
}


start --> 4a3a79c6481f4bd2080798fcb64b6529_entry 
4a3a79c6481f4bd2080798fcb64b6529_entry --> 184be4d91964548418982b44619214a4 
184be4d91964548418982b44619214a4 --> 4a3a79c6481f4bd2080798fcb64b6529_exit  : yes
184be4d91964548418982b44619214a4 -[#red]-> 2f38fa971a442723789bc3b1d14b0ffe_entry  : no

2f38fa971a442723789bc3b1d14b0ffe_entry --> b468add3c0ad7b60dcb07005f9542e9c 
b468add3c0ad7b60dcb07005f9542e9c --> 2f38fa971a442723789bc3b1d14b0ffe_exit  : yes
b468add3c0ad7b60dcb07005f9542e9c -[#red]-> d40bed763976f02fd7308611f60c50bb  : no

d40bed763976f02fd7308611f60c50bb --> 2f38fa971a442723789bc3b1d14b0ffe_exit  : yes
d40bed763976f02fd7308611f60c50bb -[#red]-> end  : no
2f38fa971a442723789bc3b1d14b0ffe_exit --> 4a3a79c6481f4bd2080798fcb64b6529_exit 
4a3a79c6481f4bd2080798fcb64b6529_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a184be4d91964548418982b44619214a4



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ad40bed763976f02fd7308611f60c50bb



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=ab468add3c0ad7b60dcb07005f9542e9c



`END_AT(结束时间)` ISNULL 






