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
state "[条件组]OR" as 2d3dafbcd050910a497cae92e51a8e6a [[$./start_at#a2d3dafbcd050910a497cae92e51a8e6a {"[条件组]OR"}]] {
state " " as 2d3dafbcd050910a497cae92e51a8e6a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9e3d6d5b7b6ec0eeffbb36ff09862053 [[$./start_at#a9e3d6d5b7b6ec0eeffbb36ff09862053 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d101b24a164cdaa9ea998563e0cc05d2 [[$./start_at#ad101b24a164cdaa9ea998563e0cc05d2 {"[条件组]OR"}]] {
state " " as d101b24a164cdaa9ea998563e0cc05d2_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 454f3430375a3ceb9cea4e9a9a9c4eeb [[$./start_at#a454f3430375a3ceb9cea4e9a9a9c4eeb {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 1a0ee2926db96b5e5de978839f263c9a [[$./start_at#a1a0ee2926db96b5e5de978839f263c9a {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as d101b24a164cdaa9ea998563e0cc05d2_exit  <<exitPoint>>
}
state " " as 2d3dafbcd050910a497cae92e51a8e6a_exit  <<exitPoint>>
}


start --> 2d3dafbcd050910a497cae92e51a8e6a_entry 
2d3dafbcd050910a497cae92e51a8e6a_entry --> 9e3d6d5b7b6ec0eeffbb36ff09862053 
9e3d6d5b7b6ec0eeffbb36ff09862053 --> 2d3dafbcd050910a497cae92e51a8e6a_exit  : yes
9e3d6d5b7b6ec0eeffbb36ff09862053 -[#red]-> d101b24a164cdaa9ea998563e0cc05d2_entry  : no

d101b24a164cdaa9ea998563e0cc05d2_entry --> 454f3430375a3ceb9cea4e9a9a9c4eeb 
454f3430375a3ceb9cea4e9a9a9c4eeb --> d101b24a164cdaa9ea998563e0cc05d2_exit  : yes
454f3430375a3ceb9cea4e9a9a9c4eeb -[#red]-> 1a0ee2926db96b5e5de978839f263c9a  : no

1a0ee2926db96b5e5de978839f263c9a --> d101b24a164cdaa9ea998563e0cc05d2_exit  : yes
1a0ee2926db96b5e5de978839f263c9a -[#red]-> end  : no
d101b24a164cdaa9ea998563e0cc05d2_exit --> 2d3dafbcd050910a497cae92e51a8e6a_exit 
2d3dafbcd050910a497cae92e51a8e6a_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a1a0ee2926db96b5e5de978839f263c9a



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a454f3430375a3ceb9cea4e9a9a9c4eeb



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a9e3d6d5b7b6ec0eeffbb36ff09862053



`START_AT(开始时间)` ISNULL 






