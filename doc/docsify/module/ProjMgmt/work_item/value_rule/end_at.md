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
state "[条件组]OR" as 242e813e1236aaaf4433e0bbabb5a7a9 [[$./end_at#a242e813e1236aaaf4433e0bbabb5a7a9 {"[条件组]OR"}]] {
state " " as 242e813e1236aaaf4433e0bbabb5a7a9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 290de4cf69ae80525b01e1de8881eae3 [[$./end_at#a290de4cf69ae80525b01e1de8881eae3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2b4b9cc7a98483524ad14ab337877b71 [[$./end_at#a2b4b9cc7a98483524ad14ab337877b71 {"[条件组]OR"}]] {
state " " as 2b4b9cc7a98483524ad14ab337877b71_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 18fdf63eedd039d6cf8da8cabafb001b [[$./end_at#a18fdf63eedd039d6cf8da8cabafb001b {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 12ba80224cf53685fc527faa0681e809 [[$./end_at#a12ba80224cf53685fc527faa0681e809 {"[常规条件] 值为空(Nil)"}]]
state " " as 2b4b9cc7a98483524ad14ab337877b71_exit  <<exitPoint>>
}
state " " as 242e813e1236aaaf4433e0bbabb5a7a9_exit  <<exitPoint>>
}


start --> 242e813e1236aaaf4433e0bbabb5a7a9_entry 
242e813e1236aaaf4433e0bbabb5a7a9_entry --> 290de4cf69ae80525b01e1de8881eae3 
290de4cf69ae80525b01e1de8881eae3 --> 242e813e1236aaaf4433e0bbabb5a7a9_exit  : yes
290de4cf69ae80525b01e1de8881eae3 -[#red]-> 2b4b9cc7a98483524ad14ab337877b71_entry  : no

2b4b9cc7a98483524ad14ab337877b71_entry --> 18fdf63eedd039d6cf8da8cabafb001b 
18fdf63eedd039d6cf8da8cabafb001b --> 2b4b9cc7a98483524ad14ab337877b71_exit  : yes
18fdf63eedd039d6cf8da8cabafb001b -[#red]-> 12ba80224cf53685fc527faa0681e809  : no

12ba80224cf53685fc527faa0681e809 --> 2b4b9cc7a98483524ad14ab337877b71_exit  : yes
12ba80224cf53685fc527faa0681e809 -[#red]-> end  : no
2b4b9cc7a98483524ad14ab337877b71_exit --> 242e813e1236aaaf4433e0bbabb5a7a9_exit 
242e813e1236aaaf4433e0bbabb5a7a9_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a18fdf63eedd039d6cf8da8cabafb001b



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a290de4cf69ae80525b01e1de8881eae3



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a12ba80224cf53685fc527faa0681e809



`START_AT(开始时间)` ISNULL 






