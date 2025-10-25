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
state "[条件组]OR" as 708d689a18788b734cba1167ab359349 [[$./start_at#a708d689a18788b734cba1167ab359349 {"[条件组]OR"}]] {
state " " as 708d689a18788b734cba1167ab359349_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as bcded0349026354731e0e46ae8ac5ece [[$./start_at#abcded0349026354731e0e46ae8ac5ece {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1e98dbddb76458897ae22aa2078dba6b [[$./start_at#a1e98dbddb76458897ae22aa2078dba6b {"[条件组]OR"}]] {
state " " as 1e98dbddb76458897ae22aa2078dba6b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f7688c7e5b78bd4dd12e60eb6f7b2d52 [[$./start_at#af7688c7e5b78bd4dd12e60eb6f7b2d52 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as c85a169900dbd2de273a56b5f23167b0 [[$./start_at#ac85a169900dbd2de273a56b5f23167b0 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 1e98dbddb76458897ae22aa2078dba6b_exit  <<exitPoint>>
}
state " " as 708d689a18788b734cba1167ab359349_exit  <<exitPoint>>
}


start --> 708d689a18788b734cba1167ab359349_entry 
708d689a18788b734cba1167ab359349_entry --> bcded0349026354731e0e46ae8ac5ece 
bcded0349026354731e0e46ae8ac5ece --> 708d689a18788b734cba1167ab359349_exit  : yes
bcded0349026354731e0e46ae8ac5ece -[#red]-> 1e98dbddb76458897ae22aa2078dba6b_entry  : no

1e98dbddb76458897ae22aa2078dba6b_entry --> f7688c7e5b78bd4dd12e60eb6f7b2d52 
f7688c7e5b78bd4dd12e60eb6f7b2d52 --> 1e98dbddb76458897ae22aa2078dba6b_exit  : yes
f7688c7e5b78bd4dd12e60eb6f7b2d52 -[#red]-> c85a169900dbd2de273a56b5f23167b0  : no

c85a169900dbd2de273a56b5f23167b0 --> 1e98dbddb76458897ae22aa2078dba6b_exit  : yes
c85a169900dbd2de273a56b5f23167b0 -[#red]-> end  : no
1e98dbddb76458897ae22aa2078dba6b_exit --> 708d689a18788b734cba1167ab359349_exit 
708d689a18788b734cba1167ab359349_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=af7688c7e5b78bd4dd12e60eb6f7b2d52



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ac85a169900dbd2de273a56b5f23167b0



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=abcded0349026354731e0e46ae8ac5ece



`START_AT(计划开始)` ISNULL 






