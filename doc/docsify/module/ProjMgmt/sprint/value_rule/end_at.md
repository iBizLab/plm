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
state "[条件组]OR" as c10a77723f32f8c39f2ed04e70e26c09 [[$./end_at#ac10a77723f32f8c39f2ed04e70e26c09 {"[条件组]OR"}]] {
state " " as c10a77723f32f8c39f2ed04e70e26c09_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as df7f6c57700a83a1d18cb37d7aee2a07 [[$./end_at#adf7f6c57700a83a1d18cb37d7aee2a07 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c4d68f0eac2a754b39c2607f5a36f4ce [[$./end_at#ac4d68f0eac2a754b39c2607f5a36f4ce {"[条件组]OR"}]] {
state " " as c4d68f0eac2a754b39c2607f5a36f4ce_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 6c3763c69e6db8649b8649a1b9ee123d [[$./end_at#a6c3763c69e6db8649b8649a1b9ee123d {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 073b0f2a061adac1963dcfc269b5e848 [[$./end_at#a073b0f2a061adac1963dcfc269b5e848 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as c4d68f0eac2a754b39c2607f5a36f4ce_exit  <<exitPoint>>
}
state " " as c10a77723f32f8c39f2ed04e70e26c09_exit  <<exitPoint>>
}


start --> c10a77723f32f8c39f2ed04e70e26c09_entry 
c10a77723f32f8c39f2ed04e70e26c09_entry --> df7f6c57700a83a1d18cb37d7aee2a07 
df7f6c57700a83a1d18cb37d7aee2a07 --> c10a77723f32f8c39f2ed04e70e26c09_exit  : yes
df7f6c57700a83a1d18cb37d7aee2a07 -[#red]-> c4d68f0eac2a754b39c2607f5a36f4ce_entry  : no

c4d68f0eac2a754b39c2607f5a36f4ce_entry --> 6c3763c69e6db8649b8649a1b9ee123d 
6c3763c69e6db8649b8649a1b9ee123d --> c4d68f0eac2a754b39c2607f5a36f4ce_exit  : yes
6c3763c69e6db8649b8649a1b9ee123d -[#red]-> 073b0f2a061adac1963dcfc269b5e848  : no

073b0f2a061adac1963dcfc269b5e848 --> c4d68f0eac2a754b39c2607f5a36f4ce_exit  : yes
073b0f2a061adac1963dcfc269b5e848 -[#red]-> end  : no
c4d68f0eac2a754b39c2607f5a36f4ce_exit --> c10a77723f32f8c39f2ed04e70e26c09_exit 
c10a77723f32f8c39f2ed04e70e26c09_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a6c3763c69e6db8649b8649a1b9ee123d



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a073b0f2a061adac1963dcfc269b5e848



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=adf7f6c57700a83a1d18cb37d7aee2a07



`END_AT(结束时间)` ISNULL 






