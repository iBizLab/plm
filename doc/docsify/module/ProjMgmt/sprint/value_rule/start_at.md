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
state "[条件组]OR" as 0c48bbbc7342a9af622974e67c5a9f65 [[$./start_at#a0c48bbbc7342a9af622974e67c5a9f65 {"[条件组]OR"}]] {
state " " as 0c48bbbc7342a9af622974e67c5a9f65_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as fdc557dd36a647e255398be260619ab3 [[$./start_at#afdc557dd36a647e255398be260619ab3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 52078220c99cd4a7c5f56e04da1e71f9 [[$./start_at#a52078220c99cd4a7c5f56e04da1e71f9 {"[条件组]OR"}]] {
state " " as 52078220c99cd4a7c5f56e04da1e71f9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c896d08e36d5dcae2c79c17f39a29d1e [[$./start_at#ac896d08e36d5dcae2c79c17f39a29d1e {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 7be5fbb29bcd68c90892cb912a805541 [[$./start_at#a7be5fbb29bcd68c90892cb912a805541 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 52078220c99cd4a7c5f56e04da1e71f9_exit  <<exitPoint>>
}
state " " as 0c48bbbc7342a9af622974e67c5a9f65_exit  <<exitPoint>>
}


start --> 0c48bbbc7342a9af622974e67c5a9f65_entry 
0c48bbbc7342a9af622974e67c5a9f65_entry --> fdc557dd36a647e255398be260619ab3 
fdc557dd36a647e255398be260619ab3 --> 0c48bbbc7342a9af622974e67c5a9f65_exit  : yes
fdc557dd36a647e255398be260619ab3 -[#red]-> 52078220c99cd4a7c5f56e04da1e71f9_entry  : no

52078220c99cd4a7c5f56e04da1e71f9_entry --> c896d08e36d5dcae2c79c17f39a29d1e 
c896d08e36d5dcae2c79c17f39a29d1e --> 52078220c99cd4a7c5f56e04da1e71f9_exit  : yes
c896d08e36d5dcae2c79c17f39a29d1e -[#red]-> 7be5fbb29bcd68c90892cb912a805541  : no

7be5fbb29bcd68c90892cb912a805541 --> 52078220c99cd4a7c5f56e04da1e71f9_exit  : yes
7be5fbb29bcd68c90892cb912a805541 -[#red]-> end  : no
52078220c99cd4a7c5f56e04da1e71f9_exit --> 0c48bbbc7342a9af622974e67c5a9f65_exit 
0c48bbbc7342a9af622974e67c5a9f65_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac896d08e36d5dcae2c79c17f39a29d1e



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=afdc557dd36a647e255398be260619ab3



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a7be5fbb29bcd68c90892cb912a805541



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







