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
state "[条件组]OR" as 8ae17cd78bd6aad9067e1cd8639c6b9f [[$./end_at#a8ae17cd78bd6aad9067e1cd8639c6b9f {"[条件组]OR"}]] {
state " " as 8ae17cd78bd6aad9067e1cd8639c6b9f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 3dab4d5cff0c9154f2c8c857a72b3955 [[$./end_at#a3dab4d5cff0c9154f2c8c857a72b3955 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d0f3aab7e7ef7f8c6d0ecefd0a4c0844 [[$./end_at#ad0f3aab7e7ef7f8c6d0ecefd0a4c0844 {"[条件组]OR"}]] {
state " " as d0f3aab7e7ef7f8c6d0ecefd0a4c0844_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1ac8155c043246878342ed18de47c21f [[$./end_at#a1ac8155c043246878342ed18de47c21f {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as eb9075243d88a436dc02ab7848feae9a [[$./end_at#aeb9075243d88a436dc02ab7848feae9a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit  <<exitPoint>>
}
state " " as 8ae17cd78bd6aad9067e1cd8639c6b9f_exit  <<exitPoint>>
}


start --> 8ae17cd78bd6aad9067e1cd8639c6b9f_entry 
8ae17cd78bd6aad9067e1cd8639c6b9f_entry --> 3dab4d5cff0c9154f2c8c857a72b3955 
3dab4d5cff0c9154f2c8c857a72b3955 --> 8ae17cd78bd6aad9067e1cd8639c6b9f_exit  : yes
3dab4d5cff0c9154f2c8c857a72b3955 -[#red]-> d0f3aab7e7ef7f8c6d0ecefd0a4c0844_entry  : no

d0f3aab7e7ef7f8c6d0ecefd0a4c0844_entry --> 1ac8155c043246878342ed18de47c21f 
1ac8155c043246878342ed18de47c21f --> d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit  : yes
1ac8155c043246878342ed18de47c21f -[#red]-> eb9075243d88a436dc02ab7848feae9a  : no

eb9075243d88a436dc02ab7848feae9a --> d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit  : yes
eb9075243d88a436dc02ab7848feae9a -[#red]-> end  : no
d0f3aab7e7ef7f8c6d0ecefd0a4c0844_exit --> 8ae17cd78bd6aad9067e1cd8639c6b9f_exit 
8ae17cd78bd6aad9067e1cd8639c6b9f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aeb9075243d88a436dc02ab7848feae9a



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a3dab4d5cff0c9154f2c8c857a72b3955



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a1ac8155c043246878342ed18de47c21f



`START_AT(开始时间)` ISNULL 






