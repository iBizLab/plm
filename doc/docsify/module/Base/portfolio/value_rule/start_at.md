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
state "[条件组]OR" as c6ab6bbf141a0ecc5872a45afb9e63be [[$./start_at#ac6ab6bbf141a0ecc5872a45afb9e63be {"[条件组]OR"}]] {
state " " as c6ab6bbf141a0ecc5872a45afb9e63be_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 71629b118744af31025e9673ac923968 [[$./start_at#a71629b118744af31025e9673ac923968 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2bc000693562c1e3f753704150112516 [[$./start_at#a2bc000693562c1e3f753704150112516 {"[条件组]OR"}]] {
state " " as 2bc000693562c1e3f753704150112516_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a68b40f36b132b6b1363c3ffa7a20129 [[$./start_at#aa68b40f36b132b6b1363c3ffa7a20129 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 86bddc14b4432d264746ce3313063438 [[$./start_at#a86bddc14b4432d264746ce3313063438 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 2bc000693562c1e3f753704150112516_exit  <<exitPoint>>
}
state " " as c6ab6bbf141a0ecc5872a45afb9e63be_exit  <<exitPoint>>
}


start --> c6ab6bbf141a0ecc5872a45afb9e63be_entry 
c6ab6bbf141a0ecc5872a45afb9e63be_entry --> 71629b118744af31025e9673ac923968 
71629b118744af31025e9673ac923968 --> c6ab6bbf141a0ecc5872a45afb9e63be_exit  : yes
71629b118744af31025e9673ac923968 -[#red]-> 2bc000693562c1e3f753704150112516_entry  : no

2bc000693562c1e3f753704150112516_entry --> a68b40f36b132b6b1363c3ffa7a20129 
a68b40f36b132b6b1363c3ffa7a20129 --> 2bc000693562c1e3f753704150112516_exit  : yes
a68b40f36b132b6b1363c3ffa7a20129 -[#red]-> 86bddc14b4432d264746ce3313063438  : no

86bddc14b4432d264746ce3313063438 --> 2bc000693562c1e3f753704150112516_exit  : yes
86bddc14b4432d264746ce3313063438 -[#red]-> end  : no
2bc000693562c1e3f753704150112516_exit --> c6ab6bbf141a0ecc5872a45afb9e63be_exit 
c6ab6bbf141a0ecc5872a45afb9e63be_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a71629b118744af31025e9673ac923968



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a86bddc14b4432d264746ce3313063438



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=aa68b40f36b132b6b1363c3ffa7a20129



`END_AT(结束时间)` ISNULL 






