## 截止时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as b9c6f62ee0a771534a7b5d365ed01c85 [[$./end_at#ab9c6f62ee0a771534a7b5d365ed01c85 {"[条件组]OR"}]] {
state " " as b9c6f62ee0a771534a7b5d365ed01c85_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 6673488864d6456913c9ba9ec0c8c3de [[$./end_at#a6673488864d6456913c9ba9ec0c8c3de {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1a3fe8b4dcb62ec4299d93fb72fe29b9 [[$./end_at#a1a3fe8b4dcb62ec4299d93fb72fe29b9 {"[条件组]OR"}]] {
state " " as 1a3fe8b4dcb62ec4299d93fb72fe29b9_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 6c3388590f86a53ef6ad9c5e7c68d730 [[$./end_at#a6c3388590f86a53ef6ad9c5e7c68d730 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 2913cec647470ad8b4fb73783c572ac5 [[$./end_at#a2913cec647470ad8b4fb73783c572ac5 {"[常规条件] 值为空(Nil)"}]]
state " " as 1a3fe8b4dcb62ec4299d93fb72fe29b9_exit  <<exitPoint>>
}
state " " as b9c6f62ee0a771534a7b5d365ed01c85_exit  <<exitPoint>>
}


start --> b9c6f62ee0a771534a7b5d365ed01c85_entry 
b9c6f62ee0a771534a7b5d365ed01c85_entry --> 6673488864d6456913c9ba9ec0c8c3de 
6673488864d6456913c9ba9ec0c8c3de --> b9c6f62ee0a771534a7b5d365ed01c85_exit  : yes
6673488864d6456913c9ba9ec0c8c3de -[#red]-> 1a3fe8b4dcb62ec4299d93fb72fe29b9_entry  : no

1a3fe8b4dcb62ec4299d93fb72fe29b9_entry --> 6c3388590f86a53ef6ad9c5e7c68d730 
6c3388590f86a53ef6ad9c5e7c68d730 --> 1a3fe8b4dcb62ec4299d93fb72fe29b9_exit  : yes
6c3388590f86a53ef6ad9c5e7c68d730 -[#red]-> 2913cec647470ad8b4fb73783c572ac5  : no

2913cec647470ad8b4fb73783c572ac5 --> 1a3fe8b4dcb62ec4299d93fb72fe29b9_exit  : yes
2913cec647470ad8b4fb73783c572ac5 -[#red]-> end  : no
1a3fe8b4dcb62ec4299d93fb72fe29b9_exit --> b9c6f62ee0a771534a7b5d365ed01c85_exit 
b9c6f62ee0a771534a7b5d365ed01c85_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a6673488864d6456913c9ba9ec0c8c3de



`END_AT(截止时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a6c3388590f86a53ef6ad9c5e7c68d730



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a2913cec647470ad8b4fb73783c572ac5



`START_AT(开始时间)` ISNULL 






