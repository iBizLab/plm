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
state "[条件组]OR" as 83302daaa38268fa248623e40129b0dc [[$./end_at#a83302daaa38268fa248623e40129b0dc {"[条件组]OR"}]] {
state " " as 83302daaa38268fa248623e40129b0dc_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 8ab3ef0ff647bb7561c738279b87ff69 [[$./end_at#a8ab3ef0ff647bb7561c738279b87ff69 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f6a4892480fa585a68bc852890ea2073 [[$./end_at#af6a4892480fa585a68bc852890ea2073 {"[条件组]OR"}]] {
state " " as f6a4892480fa585a68bc852890ea2073_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as dca8cecb1e406a8889883b18eadfc416 [[$./end_at#adca8cecb1e406a8889883b18eadfc416 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 54946c5fd2f05d00381cb2e3f7f1e0db [[$./end_at#a54946c5fd2f05d00381cb2e3f7f1e0db {"[常规条件] 值为空(Nil)"}]]
state " " as f6a4892480fa585a68bc852890ea2073_exit  <<exitPoint>>
}
state " " as 83302daaa38268fa248623e40129b0dc_exit  <<exitPoint>>
}


start --> 83302daaa38268fa248623e40129b0dc_entry 
83302daaa38268fa248623e40129b0dc_entry --> 8ab3ef0ff647bb7561c738279b87ff69 
8ab3ef0ff647bb7561c738279b87ff69 --> 83302daaa38268fa248623e40129b0dc_exit  : yes
8ab3ef0ff647bb7561c738279b87ff69 -[#red]-> f6a4892480fa585a68bc852890ea2073_entry  : no

f6a4892480fa585a68bc852890ea2073_entry --> dca8cecb1e406a8889883b18eadfc416 
dca8cecb1e406a8889883b18eadfc416 --> f6a4892480fa585a68bc852890ea2073_exit  : yes
dca8cecb1e406a8889883b18eadfc416 -[#red]-> 54946c5fd2f05d00381cb2e3f7f1e0db  : no

54946c5fd2f05d00381cb2e3f7f1e0db --> f6a4892480fa585a68bc852890ea2073_exit  : yes
54946c5fd2f05d00381cb2e3f7f1e0db -[#red]-> end  : no
f6a4892480fa585a68bc852890ea2073_exit --> 83302daaa38268fa248623e40129b0dc_exit 
83302daaa38268fa248623e40129b0dc_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a8ab3ef0ff647bb7561c738279b87ff69



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a54946c5fd2f05d00381cb2e3f7f1e0db



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=adca8cecb1e406a8889883b18eadfc416



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







