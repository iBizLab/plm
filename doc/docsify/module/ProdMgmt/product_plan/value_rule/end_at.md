## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 4c2dbd50fa30075ace2e467840452628 [[$./end_at#a4c2dbd50fa30075ace2e467840452628 {"[条件组]OR"}]] {
state " " as 4c2dbd50fa30075ace2e467840452628_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ef04641233a07fefdee1aa91a3f78789 [[$./end_at#aef04641233a07fefdee1aa91a3f78789 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as a889393b60ec4daca7addab406e30da8 [[$./end_at#aa889393b60ec4daca7addab406e30da8 {"[条件组]OR"}]] {
state " " as a889393b60ec4daca7addab406e30da8_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 15e3bff9cfa765c20551955b709dca7e [[$./end_at#a15e3bff9cfa765c20551955b709dca7e {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as bd97919e4618308db169b14765d3070f [[$./end_at#abd97919e4618308db169b14765d3070f {"[常规条件] 值为空(Nil)"}]]
state " " as a889393b60ec4daca7addab406e30da8_exit  <<exitPoint>>
}
state " " as 4c2dbd50fa30075ace2e467840452628_exit  <<exitPoint>>
}


start --> 4c2dbd50fa30075ace2e467840452628_entry 
4c2dbd50fa30075ace2e467840452628_entry --> ef04641233a07fefdee1aa91a3f78789 
ef04641233a07fefdee1aa91a3f78789 --> 4c2dbd50fa30075ace2e467840452628_exit  : yes
ef04641233a07fefdee1aa91a3f78789 -[#red]-> a889393b60ec4daca7addab406e30da8_entry  : no

a889393b60ec4daca7addab406e30da8_entry --> 15e3bff9cfa765c20551955b709dca7e 
15e3bff9cfa765c20551955b709dca7e --> a889393b60ec4daca7addab406e30da8_exit  : yes
15e3bff9cfa765c20551955b709dca7e -[#red]-> bd97919e4618308db169b14765d3070f  : no

bd97919e4618308db169b14765d3070f --> a889393b60ec4daca7addab406e30da8_exit  : yes
bd97919e4618308db169b14765d3070f -[#red]-> end  : no
a889393b60ec4daca7addab406e30da8_exit --> 4c2dbd50fa30075ace2e467840452628_exit 
4c2dbd50fa30075ace2e467840452628_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=aef04641233a07fefdee1aa91a3f78789



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=abd97919e4618308db169b14765d3070f



`START_AT(计划开始)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a15e3bff9cfa765c20551955b709dca7e



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







