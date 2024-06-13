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
state "[条件组]OR" as 809647480d636bc58b92bc70d27e7386 [[$./end_at#a809647480d636bc58b92bc70d27e7386 {"[条件组]OR"}]] {
state " " as 809647480d636bc58b92bc70d27e7386_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 881b355a4658ca694a63b764dc244443 [[$./end_at#a881b355a4658ca694a63b764dc244443 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c746bd1a8c6110aa406f35938146620e [[$./end_at#ac746bd1a8c6110aa406f35938146620e {"[条件组]OR"}]] {
state " " as c746bd1a8c6110aa406f35938146620e_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 61fffc61ace48ed7076e14224c3ba06a [[$./end_at#a61fffc61ace48ed7076e14224c3ba06a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 431e3a1e9bc0c0769c2a6aa8b0a09a43 [[$./end_at#a431e3a1e9bc0c0769c2a6aa8b0a09a43 {"[常规条件] 值为空(Nil)"}]]
state " " as c746bd1a8c6110aa406f35938146620e_exit  <<exitPoint>>
}
state " " as 809647480d636bc58b92bc70d27e7386_exit  <<exitPoint>>
}


start --> 809647480d636bc58b92bc70d27e7386_entry 
809647480d636bc58b92bc70d27e7386_entry --> 881b355a4658ca694a63b764dc244443 
881b355a4658ca694a63b764dc244443 --> 809647480d636bc58b92bc70d27e7386_exit  : yes
881b355a4658ca694a63b764dc244443 -[#red]-> c746bd1a8c6110aa406f35938146620e_entry  : no

c746bd1a8c6110aa406f35938146620e_entry --> 61fffc61ace48ed7076e14224c3ba06a 
61fffc61ace48ed7076e14224c3ba06a --> c746bd1a8c6110aa406f35938146620e_exit  : yes
61fffc61ace48ed7076e14224c3ba06a -[#red]-> 431e3a1e9bc0c0769c2a6aa8b0a09a43  : no

431e3a1e9bc0c0769c2a6aa8b0a09a43 --> c746bd1a8c6110aa406f35938146620e_exit  : yes
431e3a1e9bc0c0769c2a6aa8b0a09a43 -[#red]-> end  : no
c746bd1a8c6110aa406f35938146620e_exit --> 809647480d636bc58b92bc70d27e7386_exit 
809647480d636bc58b92bc70d27e7386_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a61fffc61ace48ed7076e14224c3ba06a



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a431e3a1e9bc0c0769c2a6aa8b0a09a43



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a881b355a4658ca694a63b764dc244443



`END_AT(结束时间)` ISNULL 






