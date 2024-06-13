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
state "[条件组]OR" as 70a12d153869ea5d37a15436dfefe6ec [[$./start_at#a70a12d153869ea5d37a15436dfefe6ec {"[条件组]OR"}]] {
state " " as 70a12d153869ea5d37a15436dfefe6ec_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 87934a47a809d42e6deb3eddd8c7e153 [[$./start_at#a87934a47a809d42e6deb3eddd8c7e153 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 949c35aa293864b5c392b66f3bb4f733 [[$./start_at#a949c35aa293864b5c392b66f3bb4f733 {"[条件组]OR"}]] {
state " " as 949c35aa293864b5c392b66f3bb4f733_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a723b993425276549def156fc93ef910 [[$./start_at#aa723b993425276549def156fc93ef910 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 73a9a815422ad7833e3aaf2766ac2349 [[$./start_at#a73a9a815422ad7833e3aaf2766ac2349 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 949c35aa293864b5c392b66f3bb4f733_exit  <<exitPoint>>
}
state " " as 70a12d153869ea5d37a15436dfefe6ec_exit  <<exitPoint>>
}


start --> 70a12d153869ea5d37a15436dfefe6ec_entry 
70a12d153869ea5d37a15436dfefe6ec_entry --> 87934a47a809d42e6deb3eddd8c7e153 
87934a47a809d42e6deb3eddd8c7e153 --> 70a12d153869ea5d37a15436dfefe6ec_exit  : yes
87934a47a809d42e6deb3eddd8c7e153 -[#red]-> 949c35aa293864b5c392b66f3bb4f733_entry  : no

949c35aa293864b5c392b66f3bb4f733_entry --> a723b993425276549def156fc93ef910 
a723b993425276549def156fc93ef910 --> 949c35aa293864b5c392b66f3bb4f733_exit  : yes
a723b993425276549def156fc93ef910 -[#red]-> 73a9a815422ad7833e3aaf2766ac2349  : no

73a9a815422ad7833e3aaf2766ac2349 --> 949c35aa293864b5c392b66f3bb4f733_exit  : yes
73a9a815422ad7833e3aaf2766ac2349 -[#red]-> end  : no
949c35aa293864b5c392b66f3bb4f733_exit --> 70a12d153869ea5d37a15436dfefe6ec_exit 
70a12d153869ea5d37a15436dfefe6ec_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a87934a47a809d42e6deb3eddd8c7e153



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a73a9a815422ad7833e3aaf2766ac2349



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=aa723b993425276549def156fc93ef910



`END_AT(结束时间)` ISNULL 






