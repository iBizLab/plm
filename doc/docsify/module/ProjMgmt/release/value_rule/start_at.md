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
state "[条件组]OR" as 0938f7ef95fb25af381a187a6b80ca1c [[$./start_at#a0938f7ef95fb25af381a187a6b80ca1c {"[条件组]OR"}]] {
state " " as 0938f7ef95fb25af381a187a6b80ca1c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0a5bf0f0bb5d851282e62a75fa1c02a3 [[$./start_at#a0a5bf0f0bb5d851282e62a75fa1c02a3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 88b7bc2e844bda7e915c63e9e891a8e3 [[$./start_at#a88b7bc2e844bda7e915c63e9e891a8e3 {"[条件组]OR"}]] {
state " " as 88b7bc2e844bda7e915c63e9e891a8e3_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 66fbc851b1f304143b0e01d945e93fea [[$./start_at#a66fbc851b1f304143b0e01d945e93fea {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 2e2132678562756b345e28253735f7ec [[$./start_at#a2e2132678562756b345e28253735f7ec {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 88b7bc2e844bda7e915c63e9e891a8e3_exit  <<exitPoint>>
}
state " " as 0938f7ef95fb25af381a187a6b80ca1c_exit  <<exitPoint>>
}


start --> 0938f7ef95fb25af381a187a6b80ca1c_entry 
0938f7ef95fb25af381a187a6b80ca1c_entry --> 0a5bf0f0bb5d851282e62a75fa1c02a3 
0a5bf0f0bb5d851282e62a75fa1c02a3 --> 0938f7ef95fb25af381a187a6b80ca1c_exit  : yes
0a5bf0f0bb5d851282e62a75fa1c02a3 -[#red]-> 88b7bc2e844bda7e915c63e9e891a8e3_entry  : no

88b7bc2e844bda7e915c63e9e891a8e3_entry --> 66fbc851b1f304143b0e01d945e93fea 
66fbc851b1f304143b0e01d945e93fea --> 88b7bc2e844bda7e915c63e9e891a8e3_exit  : yes
66fbc851b1f304143b0e01d945e93fea -[#red]-> 2e2132678562756b345e28253735f7ec  : no

2e2132678562756b345e28253735f7ec --> 88b7bc2e844bda7e915c63e9e891a8e3_exit  : yes
2e2132678562756b345e28253735f7ec -[#red]-> end  : no
88b7bc2e844bda7e915c63e9e891a8e3_exit --> 0938f7ef95fb25af381a187a6b80ca1c_exit 
0938f7ef95fb25af381a187a6b80ca1c_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a0a5bf0f0bb5d851282e62a75fa1c02a3



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a2e2132678562756b345e28253735f7ec



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a66fbc851b1f304143b0e01d945e93fea



`END_AT(发布时间)` ISNULL 






