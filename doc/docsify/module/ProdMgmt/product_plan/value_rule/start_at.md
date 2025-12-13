## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 652d6ba270405a6dd19136822decf360 [[$./start_at#a652d6ba270405a6dd19136822decf360 {"[条件组]OR"}]] {
state " " as 652d6ba270405a6dd19136822decf360_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as aa7efbc2d83063defeffda99eae8f6d7 [[$./start_at#aaa7efbc2d83063defeffda99eae8f6d7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c784d99db24c05847645c23d460f6a9b [[$./start_at#ac784d99db24c05847645c23d460f6a9b {"[条件组]OR"}]] {
state " " as c784d99db24c05847645c23d460f6a9b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as e514da9816480933b019d375c21bdf6b [[$./start_at#ae514da9816480933b019d375c21bdf6b {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as cef92c1ca6765c1a85ee1285c86ff837 [[$./start_at#acef92c1ca6765c1a85ee1285c86ff837 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c784d99db24c05847645c23d460f6a9b_exit  <<exitPoint>>
}
state " " as 652d6ba270405a6dd19136822decf360_exit  <<exitPoint>>
}


start --> 652d6ba270405a6dd19136822decf360_entry 
652d6ba270405a6dd19136822decf360_entry --> aa7efbc2d83063defeffda99eae8f6d7 
aa7efbc2d83063defeffda99eae8f6d7 --> 652d6ba270405a6dd19136822decf360_exit  : yes
aa7efbc2d83063defeffda99eae8f6d7 -[#red]-> c784d99db24c05847645c23d460f6a9b_entry  : no

c784d99db24c05847645c23d460f6a9b_entry --> e514da9816480933b019d375c21bdf6b 
e514da9816480933b019d375c21bdf6b --> c784d99db24c05847645c23d460f6a9b_exit  : yes
e514da9816480933b019d375c21bdf6b -[#red]-> cef92c1ca6765c1a85ee1285c86ff837  : no

cef92c1ca6765c1a85ee1285c86ff837 --> c784d99db24c05847645c23d460f6a9b_exit  : yes
cef92c1ca6765c1a85ee1285c86ff837 -[#red]-> end  : no
c784d99db24c05847645c23d460f6a9b_exit --> 652d6ba270405a6dd19136822decf360_exit 
652d6ba270405a6dd19136822decf360_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ae514da9816480933b019d375c21bdf6b



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aaa7efbc2d83063defeffda99eae8f6d7



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=acef92c1ca6765c1a85ee1285c86ff837



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







