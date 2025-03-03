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
state "[条件组]OR" as d9f60ddcbb509f7c9778df79bb7da318 [[$./start_at#ad9f60ddcbb509f7c9778df79bb7da318 {"[条件组]OR"}]] {
state " " as d9f60ddcbb509f7c9778df79bb7da318_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ce45fc7f5e103b54814d69367ffe0d91 [[$./start_at#ace45fc7f5e103b54814d69367ffe0d91 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 73377030c5bcc117ec6f1c2dd1942dd4 [[$./start_at#a73377030c5bcc117ec6f1c2dd1942dd4 {"[条件组]OR"}]] {
state " " as 73377030c5bcc117ec6f1c2dd1942dd4_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as abaa5eacdf18362643dfcbcbfe5e7c4f [[$./start_at#aabaa5eacdf18362643dfcbcbfe5e7c4f {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 9c6a260c542c4fdbb066737276198e82 [[$./start_at#a9c6a260c542c4fdbb066737276198e82 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 73377030c5bcc117ec6f1c2dd1942dd4_exit  <<exitPoint>>
}
state " " as d9f60ddcbb509f7c9778df79bb7da318_exit  <<exitPoint>>
}


start --> d9f60ddcbb509f7c9778df79bb7da318_entry 
d9f60ddcbb509f7c9778df79bb7da318_entry --> ce45fc7f5e103b54814d69367ffe0d91 
ce45fc7f5e103b54814d69367ffe0d91 --> d9f60ddcbb509f7c9778df79bb7da318_exit  : yes
ce45fc7f5e103b54814d69367ffe0d91 -[#red]-> 73377030c5bcc117ec6f1c2dd1942dd4_entry  : no

73377030c5bcc117ec6f1c2dd1942dd4_entry --> abaa5eacdf18362643dfcbcbfe5e7c4f 
abaa5eacdf18362643dfcbcbfe5e7c4f --> 73377030c5bcc117ec6f1c2dd1942dd4_exit  : yes
abaa5eacdf18362643dfcbcbfe5e7c4f -[#red]-> 9c6a260c542c4fdbb066737276198e82  : no

9c6a260c542c4fdbb066737276198e82 --> 73377030c5bcc117ec6f1c2dd1942dd4_exit  : yes
9c6a260c542c4fdbb066737276198e82 -[#red]-> end  : no
73377030c5bcc117ec6f1c2dd1942dd4_exit --> d9f60ddcbb509f7c9778df79bb7da318_exit 
d9f60ddcbb509f7c9778df79bb7da318_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ace45fc7f5e103b54814d69367ffe0d91



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aabaa5eacdf18362643dfcbcbfe5e7c4f



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a9c6a260c542c4fdbb066737276198e82



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







