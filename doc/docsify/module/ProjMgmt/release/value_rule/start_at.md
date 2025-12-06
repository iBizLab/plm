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
state "[条件组]OR" as 89e75fc2975205fcc704aaafcdf2221c [[$./start_at#a89e75fc2975205fcc704aaafcdf2221c {"[条件组]OR"}]] {
state " " as 89e75fc2975205fcc704aaafcdf2221c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 53eb0a1633835a7a7e45524c2d74695c [[$./start_at#a53eb0a1633835a7a7e45524c2d74695c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as eaf3d2ed5626899d91205b9a2fcc7736 [[$./start_at#aeaf3d2ed5626899d91205b9a2fcc7736 {"[条件组]OR"}]] {
state " " as eaf3d2ed5626899d91205b9a2fcc7736_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 29ed2962e1d17b4795407b0a55c6aee4 [[$./start_at#a29ed2962e1d17b4795407b0a55c6aee4 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as d7b382e09e2183364b997dcb1ef80113 [[$./start_at#ad7b382e09e2183364b997dcb1ef80113 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as eaf3d2ed5626899d91205b9a2fcc7736_exit  <<exitPoint>>
}
state " " as 89e75fc2975205fcc704aaafcdf2221c_exit  <<exitPoint>>
}


start --> 89e75fc2975205fcc704aaafcdf2221c_entry 
89e75fc2975205fcc704aaafcdf2221c_entry --> 53eb0a1633835a7a7e45524c2d74695c 
53eb0a1633835a7a7e45524c2d74695c --> 89e75fc2975205fcc704aaafcdf2221c_exit  : yes
53eb0a1633835a7a7e45524c2d74695c -[#red]-> eaf3d2ed5626899d91205b9a2fcc7736_entry  : no

eaf3d2ed5626899d91205b9a2fcc7736_entry --> 29ed2962e1d17b4795407b0a55c6aee4 
29ed2962e1d17b4795407b0a55c6aee4 --> eaf3d2ed5626899d91205b9a2fcc7736_exit  : yes
29ed2962e1d17b4795407b0a55c6aee4 -[#red]-> d7b382e09e2183364b997dcb1ef80113  : no

d7b382e09e2183364b997dcb1ef80113 --> eaf3d2ed5626899d91205b9a2fcc7736_exit  : yes
d7b382e09e2183364b997dcb1ef80113 -[#red]-> end  : no
eaf3d2ed5626899d91205b9a2fcc7736_exit --> 89e75fc2975205fcc704aaafcdf2221c_exit 
89e75fc2975205fcc704aaafcdf2221c_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a29ed2962e1d17b4795407b0a55c6aee4



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a53eb0a1633835a7a7e45524c2d74695c



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ad7b382e09e2183364b997dcb1ef80113



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







