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
state "[条件组]OR" as 645649c775a1d6cdf90db25eb46a5b78 [[$./start_at#a645649c775a1d6cdf90db25eb46a5b78 {"[条件组]OR"}]] {
state " " as 645649c775a1d6cdf90db25eb46a5b78_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 651d6263bf8a062e6f8793b1a53feee1 [[$./start_at#a651d6263bf8a062e6f8793b1a53feee1 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c5f61b562eb73a760178c9b107127a26 [[$./start_at#ac5f61b562eb73a760178c9b107127a26 {"[条件组]OR"}]] {
state " " as c5f61b562eb73a760178c9b107127a26_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 8acecb870c7b24c7391009b2d51a1d99 [[$./start_at#a8acecb870c7b24c7391009b2d51a1d99 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 607ebd210bcd7f858b2bc95cae70b10a [[$./start_at#a607ebd210bcd7f858b2bc95cae70b10a {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c5f61b562eb73a760178c9b107127a26_exit  <<exitPoint>>
}
state " " as 645649c775a1d6cdf90db25eb46a5b78_exit  <<exitPoint>>
}


start --> 645649c775a1d6cdf90db25eb46a5b78_entry 
645649c775a1d6cdf90db25eb46a5b78_entry --> 651d6263bf8a062e6f8793b1a53feee1 
651d6263bf8a062e6f8793b1a53feee1 --> 645649c775a1d6cdf90db25eb46a5b78_exit  : yes
651d6263bf8a062e6f8793b1a53feee1 -[#red]-> c5f61b562eb73a760178c9b107127a26_entry  : no

c5f61b562eb73a760178c9b107127a26_entry --> 8acecb870c7b24c7391009b2d51a1d99 
8acecb870c7b24c7391009b2d51a1d99 --> c5f61b562eb73a760178c9b107127a26_exit  : yes
8acecb870c7b24c7391009b2d51a1d99 -[#red]-> 607ebd210bcd7f858b2bc95cae70b10a  : no

607ebd210bcd7f858b2bc95cae70b10a --> c5f61b562eb73a760178c9b107127a26_exit  : yes
607ebd210bcd7f858b2bc95cae70b10a -[#red]-> end  : no
c5f61b562eb73a760178c9b107127a26_exit --> 645649c775a1d6cdf90db25eb46a5b78_exit 
645649c775a1d6cdf90db25eb46a5b78_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a607ebd210bcd7f858b2bc95cae70b10a



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a8acecb870c7b24c7391009b2d51a1d99



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a651d6263bf8a062e6f8793b1a53feee1



`START_AT(开始时间)` ISNULL 






