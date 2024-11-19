## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 2e6e3b9eece36e3f81ef1908a583aa18 [[$./end_at#a2e6e3b9eece36e3f81ef1908a583aa18 {"[条件组]OR"}]] {
state " " as 2e6e3b9eece36e3f81ef1908a583aa18_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as fbef636d8b7ae821120316aee9589323 [[$./end_at#afbef636d8b7ae821120316aee9589323 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ef2c338b56b972bd3d5cc7f4718e9c92 [[$./end_at#aef2c338b56b972bd3d5cc7f4718e9c92 {"[条件组]OR"}]] {
state " " as ef2c338b56b972bd3d5cc7f4718e9c92_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 893aab4a0d3ca26514c8a1cb251127b7 [[$./end_at#a893aab4a0d3ca26514c8a1cb251127b7 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 7011e1f448c14606006ae8074454535b [[$./end_at#a7011e1f448c14606006ae8074454535b {"[常规条件] 值为空(Nil)"}]]
state " " as ef2c338b56b972bd3d5cc7f4718e9c92_exit  <<exitPoint>>
}
state " " as 2e6e3b9eece36e3f81ef1908a583aa18_exit  <<exitPoint>>
}


start --> 2e6e3b9eece36e3f81ef1908a583aa18_entry 
2e6e3b9eece36e3f81ef1908a583aa18_entry --> fbef636d8b7ae821120316aee9589323 
fbef636d8b7ae821120316aee9589323 --> 2e6e3b9eece36e3f81ef1908a583aa18_exit  : yes
fbef636d8b7ae821120316aee9589323 -[#red]-> ef2c338b56b972bd3d5cc7f4718e9c92_entry  : no

ef2c338b56b972bd3d5cc7f4718e9c92_entry --> 893aab4a0d3ca26514c8a1cb251127b7 
893aab4a0d3ca26514c8a1cb251127b7 --> ef2c338b56b972bd3d5cc7f4718e9c92_exit  : yes
893aab4a0d3ca26514c8a1cb251127b7 -[#red]-> 7011e1f448c14606006ae8074454535b  : no

7011e1f448c14606006ae8074454535b --> ef2c338b56b972bd3d5cc7f4718e9c92_exit  : yes
7011e1f448c14606006ae8074454535b -[#red]-> end  : no
ef2c338b56b972bd3d5cc7f4718e9c92_exit --> 2e6e3b9eece36e3f81ef1908a583aa18_exit 
2e6e3b9eece36e3f81ef1908a583aa18_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a7011e1f448c14606006ae8074454535b



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a893aab4a0d3ca26514c8a1cb251127b7



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=afbef636d8b7ae821120316aee9589323



`END_AT(发布时间)` ISNULL 






