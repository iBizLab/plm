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
state "[条件组]OR" as e45ec164823de8f71bfcb933bec37f40 [[$./start_at#ae45ec164823de8f71bfcb933bec37f40 {"[条件组]OR"}]] {
state " " as e45ec164823de8f71bfcb933bec37f40_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8c4751e2aa1a7328de2983f977c490d3 [[$./start_at#a8c4751e2aa1a7328de2983f977c490d3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d2a778912682e821a9112ad60008a9c1 [[$./start_at#ad2a778912682e821a9112ad60008a9c1 {"[条件组]OR"}]] {
state " " as d2a778912682e821a9112ad60008a9c1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0e7d809a4761730b14c21f7e68d4aa81 [[$./start_at#a0e7d809a4761730b14c21f7e68d4aa81 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as a9be785fa96ee55a6c19e2065c6551a0 [[$./start_at#aa9be785fa96ee55a6c19e2065c6551a0 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as d2a778912682e821a9112ad60008a9c1_exit  <<exitPoint>>
}
state " " as e45ec164823de8f71bfcb933bec37f40_exit  <<exitPoint>>
}


start --> e45ec164823de8f71bfcb933bec37f40_entry 
e45ec164823de8f71bfcb933bec37f40_entry --> 8c4751e2aa1a7328de2983f977c490d3 
8c4751e2aa1a7328de2983f977c490d3 --> e45ec164823de8f71bfcb933bec37f40_exit  : yes
8c4751e2aa1a7328de2983f977c490d3 -[#red]-> d2a778912682e821a9112ad60008a9c1_entry  : no

d2a778912682e821a9112ad60008a9c1_entry --> 0e7d809a4761730b14c21f7e68d4aa81 
0e7d809a4761730b14c21f7e68d4aa81 --> d2a778912682e821a9112ad60008a9c1_exit  : yes
0e7d809a4761730b14c21f7e68d4aa81 -[#red]-> a9be785fa96ee55a6c19e2065c6551a0  : no

a9be785fa96ee55a6c19e2065c6551a0 --> d2a778912682e821a9112ad60008a9c1_exit  : yes
a9be785fa96ee55a6c19e2065c6551a0 -[#red]-> end  : no
d2a778912682e821a9112ad60008a9c1_exit --> e45ec164823de8f71bfcb933bec37f40_exit 
e45ec164823de8f71bfcb933bec37f40_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aa9be785fa96ee55a6c19e2065c6551a0



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a8c4751e2aa1a7328de2983f977c490d3



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a0e7d809a4761730b14c21f7e68d4aa81



`END_AT(结束时间)` ISNULL 






