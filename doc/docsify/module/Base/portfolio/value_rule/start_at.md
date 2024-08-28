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
state "[条件组]OR" as 6b4b4017bedfd3d024d6d0c4a46aa0d1 [[$./start_at#a6b4b4017bedfd3d024d6d0c4a46aa0d1 {"[条件组]OR"}]] {
state " " as 6b4b4017bedfd3d024d6d0c4a46aa0d1_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ae0fd0b82a8546dd9c2ff32787f6b48d [[$./start_at#aae0fd0b82a8546dd9c2ff32787f6b48d {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f20b6e848c6325be46b7f722a742590f [[$./start_at#af20b6e848c6325be46b7f722a742590f {"[条件组]OR"}]] {
state " " as f20b6e848c6325be46b7f722a742590f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 5f53a51a36b142f488804dcbd3d5288e [[$./start_at#a5f53a51a36b142f488804dcbd3d5288e {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0f5332cfc51c3b2f3b23b8627e740e4b [[$./start_at#a0f5332cfc51c3b2f3b23b8627e740e4b {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as f20b6e848c6325be46b7f722a742590f_exit  <<exitPoint>>
}
state " " as 6b4b4017bedfd3d024d6d0c4a46aa0d1_exit  <<exitPoint>>
}


start --> 6b4b4017bedfd3d024d6d0c4a46aa0d1_entry 
6b4b4017bedfd3d024d6d0c4a46aa0d1_entry --> ae0fd0b82a8546dd9c2ff32787f6b48d 
ae0fd0b82a8546dd9c2ff32787f6b48d --> 6b4b4017bedfd3d024d6d0c4a46aa0d1_exit  : yes
ae0fd0b82a8546dd9c2ff32787f6b48d -[#red]-> f20b6e848c6325be46b7f722a742590f_entry  : no

f20b6e848c6325be46b7f722a742590f_entry --> 5f53a51a36b142f488804dcbd3d5288e 
5f53a51a36b142f488804dcbd3d5288e --> f20b6e848c6325be46b7f722a742590f_exit  : yes
5f53a51a36b142f488804dcbd3d5288e -[#red]-> 0f5332cfc51c3b2f3b23b8627e740e4b  : no

0f5332cfc51c3b2f3b23b8627e740e4b --> f20b6e848c6325be46b7f722a742590f_exit  : yes
0f5332cfc51c3b2f3b23b8627e740e4b -[#red]-> end  : no
f20b6e848c6325be46b7f722a742590f_exit --> 6b4b4017bedfd3d024d6d0c4a46aa0d1_exit 
6b4b4017bedfd3d024d6d0c4a46aa0d1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a5f53a51a36b142f488804dcbd3d5288e



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aae0fd0b82a8546dd9c2ff32787f6b48d



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0f5332cfc51c3b2f3b23b8627e740e4b



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







