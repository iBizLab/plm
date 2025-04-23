## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as f37db016d6c1ccecd3111a875684f8b0 [[$./end_at#af37db016d6c1ccecd3111a875684f8b0 {"[条件组]OR"}]] {
state " " as f37db016d6c1ccecd3111a875684f8b0_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9b87d79aa8ce2a2727f5788daea10069 [[$./end_at#a9b87d79aa8ce2a2727f5788daea10069 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6580bf810cf720ef1cc4b35baef1c77b [[$./end_at#a6580bf810cf720ef1cc4b35baef1c77b {"[条件组]OR"}]] {
state " " as 6580bf810cf720ef1cc4b35baef1c77b_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0e709e166b70b0cbc5bd7fbde5a95bbe [[$./end_at#a0e709e166b70b0cbc5bd7fbde5a95bbe {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 5582d5e552b6664fec173ea2b9c05038 [[$./end_at#a5582d5e552b6664fec173ea2b9c05038 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 6580bf810cf720ef1cc4b35baef1c77b_exit  <<exitPoint>>
}
state " " as f37db016d6c1ccecd3111a875684f8b0_exit  <<exitPoint>>
}


start --> f37db016d6c1ccecd3111a875684f8b0_entry 
f37db016d6c1ccecd3111a875684f8b0_entry --> 9b87d79aa8ce2a2727f5788daea10069 
9b87d79aa8ce2a2727f5788daea10069 --> f37db016d6c1ccecd3111a875684f8b0_exit  : yes
9b87d79aa8ce2a2727f5788daea10069 -[#red]-> 6580bf810cf720ef1cc4b35baef1c77b_entry  : no

6580bf810cf720ef1cc4b35baef1c77b_entry --> 0e709e166b70b0cbc5bd7fbde5a95bbe 
0e709e166b70b0cbc5bd7fbde5a95bbe --> 6580bf810cf720ef1cc4b35baef1c77b_exit  : yes
0e709e166b70b0cbc5bd7fbde5a95bbe -[#red]-> 5582d5e552b6664fec173ea2b9c05038  : no

5582d5e552b6664fec173ea2b9c05038 --> 6580bf810cf720ef1cc4b35baef1c77b_exit  : yes
5582d5e552b6664fec173ea2b9c05038 -[#red]-> end  : no
6580bf810cf720ef1cc4b35baef1c77b_exit --> f37db016d6c1ccecd3111a875684f8b0_exit 
f37db016d6c1ccecd3111a875684f8b0_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a5582d5e552b6664fec173ea2b9c05038



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a9b87d79aa8ce2a2727f5788daea10069



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a0e709e166b70b0cbc5bd7fbde5a95bbe



`START_AT(开始时间)` ISNULL 






