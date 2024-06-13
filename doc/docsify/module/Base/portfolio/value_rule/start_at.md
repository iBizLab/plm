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
state "[条件组]OR" as 7e44d13814c690b1878c416731403742 [[$./start_at#a7e44d13814c690b1878c416731403742 {"[条件组]OR"}]] {
state " " as 7e44d13814c690b1878c416731403742_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 609f965a74aa64a63858fa1511f7221c [[$./start_at#a609f965a74aa64a63858fa1511f7221c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6a2a0c15e166ffd3083d8776e841b7f5 [[$./start_at#a6a2a0c15e166ffd3083d8776e841b7f5 {"[条件组]OR"}]] {
state " " as 6a2a0c15e166ffd3083d8776e841b7f5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 828c941752a95eddb4a6c9adeb974999 [[$./start_at#a828c941752a95eddb4a6c9adeb974999 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 1078cc326ffb87db7f2ae16ecd420d37 [[$./start_at#a1078cc326ffb87db7f2ae16ecd420d37 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 6a2a0c15e166ffd3083d8776e841b7f5_exit  <<exitPoint>>
}
state " " as 7e44d13814c690b1878c416731403742_exit  <<exitPoint>>
}


start --> 7e44d13814c690b1878c416731403742_entry 
7e44d13814c690b1878c416731403742_entry --> 609f965a74aa64a63858fa1511f7221c 
609f965a74aa64a63858fa1511f7221c --> 7e44d13814c690b1878c416731403742_exit  : yes
609f965a74aa64a63858fa1511f7221c -[#red]-> 6a2a0c15e166ffd3083d8776e841b7f5_entry  : no

6a2a0c15e166ffd3083d8776e841b7f5_entry --> 828c941752a95eddb4a6c9adeb974999 
828c941752a95eddb4a6c9adeb974999 --> 6a2a0c15e166ffd3083d8776e841b7f5_exit  : yes
828c941752a95eddb4a6c9adeb974999 -[#red]-> 1078cc326ffb87db7f2ae16ecd420d37  : no

1078cc326ffb87db7f2ae16ecd420d37 --> 6a2a0c15e166ffd3083d8776e841b7f5_exit  : yes
1078cc326ffb87db7f2ae16ecd420d37 -[#red]-> end  : no
6a2a0c15e166ffd3083d8776e841b7f5_exit --> 7e44d13814c690b1878c416731403742_exit 
7e44d13814c690b1878c416731403742_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a828c941752a95eddb4a6c9adeb974999



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a609f965a74aa64a63858fa1511f7221c



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a1078cc326ffb87db7f2ae16ecd420d37



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







