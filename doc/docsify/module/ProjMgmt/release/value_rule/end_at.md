## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as ff2e8ecb30700227d4afc0abf2ec6713 [[$./end_at#aff2e8ecb30700227d4afc0abf2ec6713 {"[条件组]OR"}]] {
state " " as ff2e8ecb30700227d4afc0abf2ec6713_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as fae0be5ca34fc4882e58ceba7ca6394c [[$./end_at#afae0be5ca34fc4882e58ceba7ca6394c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 64759ffdbda0ba58d2cd2f0edd6096df [[$./end_at#a64759ffdbda0ba58d2cd2f0edd6096df {"[条件组]OR"}]] {
state " " as 64759ffdbda0ba58d2cd2f0edd6096df_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 22487015b6f71302dde7ddb2161449f7 [[$./end_at#a22487015b6f71302dde7ddb2161449f7 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 083a677fd3eef648de0361fd528fc410 [[$./end_at#a083a677fd3eef648de0361fd528fc410 {"[常规条件] 值为空(Nil)"}]]
state " " as 64759ffdbda0ba58d2cd2f0edd6096df_exit  <<exitPoint>>
}
state " " as ff2e8ecb30700227d4afc0abf2ec6713_exit  <<exitPoint>>
}


start --> ff2e8ecb30700227d4afc0abf2ec6713_entry 
ff2e8ecb30700227d4afc0abf2ec6713_entry --> fae0be5ca34fc4882e58ceba7ca6394c 
fae0be5ca34fc4882e58ceba7ca6394c --> ff2e8ecb30700227d4afc0abf2ec6713_exit  : yes
fae0be5ca34fc4882e58ceba7ca6394c -[#red]-> 64759ffdbda0ba58d2cd2f0edd6096df_entry  : no

64759ffdbda0ba58d2cd2f0edd6096df_entry --> 22487015b6f71302dde7ddb2161449f7 
22487015b6f71302dde7ddb2161449f7 --> 64759ffdbda0ba58d2cd2f0edd6096df_exit  : yes
22487015b6f71302dde7ddb2161449f7 -[#red]-> 083a677fd3eef648de0361fd528fc410  : no

083a677fd3eef648de0361fd528fc410 --> 64759ffdbda0ba58d2cd2f0edd6096df_exit  : yes
083a677fd3eef648de0361fd528fc410 -[#red]-> end  : no
64759ffdbda0ba58d2cd2f0edd6096df_exit --> ff2e8ecb30700227d4afc0abf2ec6713_exit 
ff2e8ecb30700227d4afc0abf2ec6713_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=afae0be5ca34fc4882e58ceba7ca6394c



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a083a677fd3eef648de0361fd528fc410



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a22487015b6f71302dde7ddb2161449f7



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







