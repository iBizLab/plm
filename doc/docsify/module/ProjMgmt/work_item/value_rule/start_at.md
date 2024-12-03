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
state "[条件组]OR" as c1308b6f78d3b3699d9886f810338562 [[$./start_at#ac1308b6f78d3b3699d9886f810338562 {"[条件组]OR"}]] {
state " " as c1308b6f78d3b3699d9886f810338562_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 66a94df72887fc732017c446f897dd01 [[$./start_at#a66a94df72887fc732017c446f897dd01 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3b38234c232c6402d55f314fb348a42f [[$./start_at#a3b38234c232c6402d55f314fb348a42f {"[条件组]OR"}]] {
state " " as 3b38234c232c6402d55f314fb348a42f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a2494aa7aa1e9ca73b88d9edefbf5c13 [[$./start_at#aa2494aa7aa1e9ca73b88d9edefbf5c13 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 774a7f8b20e9510a32daabe235034038 [[$./start_at#a774a7f8b20e9510a32daabe235034038 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 3b38234c232c6402d55f314fb348a42f_exit  <<exitPoint>>
}
state " " as c1308b6f78d3b3699d9886f810338562_exit  <<exitPoint>>
}


start --> c1308b6f78d3b3699d9886f810338562_entry 
c1308b6f78d3b3699d9886f810338562_entry --> 66a94df72887fc732017c446f897dd01 
66a94df72887fc732017c446f897dd01 --> c1308b6f78d3b3699d9886f810338562_exit  : yes
66a94df72887fc732017c446f897dd01 -[#red]-> 3b38234c232c6402d55f314fb348a42f_entry  : no

3b38234c232c6402d55f314fb348a42f_entry --> a2494aa7aa1e9ca73b88d9edefbf5c13 
a2494aa7aa1e9ca73b88d9edefbf5c13 --> 3b38234c232c6402d55f314fb348a42f_exit  : yes
a2494aa7aa1e9ca73b88d9edefbf5c13 -[#red]-> 774a7f8b20e9510a32daabe235034038  : no

774a7f8b20e9510a32daabe235034038 --> 3b38234c232c6402d55f314fb348a42f_exit  : yes
774a7f8b20e9510a32daabe235034038 -[#red]-> end  : no
3b38234c232c6402d55f314fb348a42f_exit --> c1308b6f78d3b3699d9886f810338562_exit 
c1308b6f78d3b3699d9886f810338562_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a774a7f8b20e9510a32daabe235034038



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=aa2494aa7aa1e9ca73b88d9edefbf5c13



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a66a94df72887fc732017c446f897dd01



`START_AT(开始时间)` ISNULL 






