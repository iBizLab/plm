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
state "[条件组]OR" as f37868b6ef98bfabe2d2592bfcfe6b64 [[$./end_at#af37868b6ef98bfabe2d2592bfcfe6b64 {"[条件组]OR"}]] {
state " " as f37868b6ef98bfabe2d2592bfcfe6b64_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 04bd0e80bd32bbbc832a28c981aa4082 [[$./end_at#a04bd0e80bd32bbbc832a28c981aa4082 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as a530cdecb8696ed710724cd2b53e4b30 [[$./end_at#aa530cdecb8696ed710724cd2b53e4b30 {"[条件组]OR"}]] {
state " " as a530cdecb8696ed710724cd2b53e4b30_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as ea55a9440dcda9b19e5be8d2dbbd2c82 [[$./end_at#aea55a9440dcda9b19e5be8d2dbbd2c82 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 9f0c8f2abea71814ac10d11105f284d9 [[$./end_at#a9f0c8f2abea71814ac10d11105f284d9 {"[常规条件] 值为空(Nil)"}]]
state " " as a530cdecb8696ed710724cd2b53e4b30_exit  <<exitPoint>>
}
state " " as f37868b6ef98bfabe2d2592bfcfe6b64_exit  <<exitPoint>>
}


start --> f37868b6ef98bfabe2d2592bfcfe6b64_entry 
f37868b6ef98bfabe2d2592bfcfe6b64_entry --> 04bd0e80bd32bbbc832a28c981aa4082 
04bd0e80bd32bbbc832a28c981aa4082 --> f37868b6ef98bfabe2d2592bfcfe6b64_exit  : yes
04bd0e80bd32bbbc832a28c981aa4082 -[#red]-> a530cdecb8696ed710724cd2b53e4b30_entry  : no

a530cdecb8696ed710724cd2b53e4b30_entry --> ea55a9440dcda9b19e5be8d2dbbd2c82 
ea55a9440dcda9b19e5be8d2dbbd2c82 --> a530cdecb8696ed710724cd2b53e4b30_exit  : yes
ea55a9440dcda9b19e5be8d2dbbd2c82 -[#red]-> 9f0c8f2abea71814ac10d11105f284d9  : no

9f0c8f2abea71814ac10d11105f284d9 --> a530cdecb8696ed710724cd2b53e4b30_exit  : yes
9f0c8f2abea71814ac10d11105f284d9 -[#red]-> end  : no
a530cdecb8696ed710724cd2b53e4b30_exit --> f37868b6ef98bfabe2d2592bfcfe6b64_exit 
f37868b6ef98bfabe2d2592bfcfe6b64_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aea55a9440dcda9b19e5be8d2dbbd2c82



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a04bd0e80bd32bbbc832a28c981aa4082



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a9f0c8f2abea71814ac10d11105f284d9



`START_AT(开始时间)` ISNULL 






