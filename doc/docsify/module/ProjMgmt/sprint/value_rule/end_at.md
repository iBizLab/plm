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
state "[条件组]OR" as 344e01e4cf71311f5dd8a673a07b5a79 [[$./end_at#a344e01e4cf71311f5dd8a673a07b5a79 {"[条件组]OR"}]] {
state " " as 344e01e4cf71311f5dd8a673a07b5a79_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 99b25374c3b4608c6650b5fccfefa2b6 [[$./end_at#a99b25374c3b4608c6650b5fccfefa2b6 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as a5b3054fddfcff8812ecbd53233e43a6 [[$./end_at#aa5b3054fddfcff8812ecbd53233e43a6 {"[条件组]OR"}]] {
state " " as a5b3054fddfcff8812ecbd53233e43a6_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 73626bd1279ed2bd04c6ebd7985d5172 [[$./end_at#a73626bd1279ed2bd04c6ebd7985d5172 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 6eb2b9707e1a87350535149430fae709 [[$./end_at#a6eb2b9707e1a87350535149430fae709 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as a5b3054fddfcff8812ecbd53233e43a6_exit  <<exitPoint>>
}
state " " as 344e01e4cf71311f5dd8a673a07b5a79_exit  <<exitPoint>>
}


start --> 344e01e4cf71311f5dd8a673a07b5a79_entry 
344e01e4cf71311f5dd8a673a07b5a79_entry --> 99b25374c3b4608c6650b5fccfefa2b6 
99b25374c3b4608c6650b5fccfefa2b6 --> 344e01e4cf71311f5dd8a673a07b5a79_exit  : yes
99b25374c3b4608c6650b5fccfefa2b6 -[#red]-> a5b3054fddfcff8812ecbd53233e43a6_entry  : no

a5b3054fddfcff8812ecbd53233e43a6_entry --> 73626bd1279ed2bd04c6ebd7985d5172 
73626bd1279ed2bd04c6ebd7985d5172 --> a5b3054fddfcff8812ecbd53233e43a6_exit  : yes
73626bd1279ed2bd04c6ebd7985d5172 -[#red]-> 6eb2b9707e1a87350535149430fae709  : no

6eb2b9707e1a87350535149430fae709 --> a5b3054fddfcff8812ecbd53233e43a6_exit  : yes
6eb2b9707e1a87350535149430fae709 -[#red]-> end  : no
a5b3054fddfcff8812ecbd53233e43a6_exit --> 344e01e4cf71311f5dd8a673a07b5a79_exit 
344e01e4cf71311f5dd8a673a07b5a79_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a6eb2b9707e1a87350535149430fae709



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a99b25374c3b4608c6650b5fccfefa2b6



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a73626bd1279ed2bd04c6ebd7985d5172



`START_AT(开始时间)` ISNULL 






