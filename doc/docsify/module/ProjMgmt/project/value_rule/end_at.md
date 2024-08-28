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
state "[条件组]OR" as d0f3aab7e7ef7f8c6d0ecefd0a4c0844 [[$./end_at#ad0f3aab7e7ef7f8c6d0ecefd0a4c0844 {"[条件组]OR"}]] {
state " " as d0f3aab7e7ef7f8c6d0ecefd0a4c0844_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 1ac8155c043246878342ed18de47c21f [[$./end_at#a1ac8155c043246878342ed18de47c21f {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e1be883585ac88a6a70ee65f7e1cc032 [[$./end_at#ae1be883585ac88a6a70ee65f7e1cc032 {"[条件组]OR"}]] {
state " " as e1be883585ac88a6a70ee65f7e1cc032_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0c0ca90b7c2add7758739f82ef7062c5 [[$./end_at#a0c0ca90b7c2add7758739f82ef7062c5 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 706669012f8c57ad7999c009fb1ec342 [[$./end_at#a706669012f8c57ad7999c009fb1ec342 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e1be883585ac88a6a70ee65f7e1cc032_exit  <<exitPoint>>
}
state " " as d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit  <<exitPoint>>
}


start --> d0f3aab7e7ef7f8c6d0ecefd0a4c0844_entry 
d0f3aab7e7ef7f8c6d0ecefd0a4c0844_entry --> 1ac8155c043246878342ed18de47c21f 
1ac8155c043246878342ed18de47c21f --> d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit  : yes
1ac8155c043246878342ed18de47c21f -[#red]-> e1be883585ac88a6a70ee65f7e1cc032_entry  : no

e1be883585ac88a6a70ee65f7e1cc032_entry --> 0c0ca90b7c2add7758739f82ef7062c5 
0c0ca90b7c2add7758739f82ef7062c5 --> e1be883585ac88a6a70ee65f7e1cc032_exit  : yes
0c0ca90b7c2add7758739f82ef7062c5 -[#red]-> 706669012f8c57ad7999c009fb1ec342  : no

706669012f8c57ad7999c009fb1ec342 --> e1be883585ac88a6a70ee65f7e1cc032_exit  : yes
706669012f8c57ad7999c009fb1ec342 -[#red]-> end  : no
e1be883585ac88a6a70ee65f7e1cc032_exit --> d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit 
d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a706669012f8c57ad7999c009fb1ec342



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a1ac8155c043246878342ed18de47c21f



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a0c0ca90b7c2add7758739f82ef7062c5



`START_AT(开始时间)` ISNULL 






