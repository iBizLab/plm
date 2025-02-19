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
state "[条件组]OR" as 109bbdee4e712ae9f05acef5089baf8a [[$./start_at#a109bbdee4e712ae9f05acef5089baf8a {"[条件组]OR"}]] {
state " " as 109bbdee4e712ae9f05acef5089baf8a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as c87a42443f26798bfd55018038bad3dd [[$./start_at#ac87a42443f26798bfd55018038bad3dd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as b436b82c917c0e93b4e5962c7f61044d [[$./start_at#ab436b82c917c0e93b4e5962c7f61044d {"[条件组]OR"}]] {
state " " as b436b82c917c0e93b4e5962c7f61044d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 19918bb3dbeb85d911a0e2085eca7fa2 [[$./start_at#a19918bb3dbeb85d911a0e2085eca7fa2 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 2dc3eb84ffe119d378d8071826b8c0f7 [[$./start_at#a2dc3eb84ffe119d378d8071826b8c0f7 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as b436b82c917c0e93b4e5962c7f61044d_exit  <<exitPoint>>
}
state " " as 109bbdee4e712ae9f05acef5089baf8a_exit  <<exitPoint>>
}


start --> 109bbdee4e712ae9f05acef5089baf8a_entry 
109bbdee4e712ae9f05acef5089baf8a_entry --> c87a42443f26798bfd55018038bad3dd 
c87a42443f26798bfd55018038bad3dd --> 109bbdee4e712ae9f05acef5089baf8a_exit  : yes
c87a42443f26798bfd55018038bad3dd -[#red]-> b436b82c917c0e93b4e5962c7f61044d_entry  : no

b436b82c917c0e93b4e5962c7f61044d_entry --> 19918bb3dbeb85d911a0e2085eca7fa2 
19918bb3dbeb85d911a0e2085eca7fa2 --> b436b82c917c0e93b4e5962c7f61044d_exit  : yes
19918bb3dbeb85d911a0e2085eca7fa2 -[#red]-> 2dc3eb84ffe119d378d8071826b8c0f7  : no

2dc3eb84ffe119d378d8071826b8c0f7 --> b436b82c917c0e93b4e5962c7f61044d_exit  : yes
2dc3eb84ffe119d378d8071826b8c0f7 -[#red]-> end  : no
b436b82c917c0e93b4e5962c7f61044d_exit --> 109bbdee4e712ae9f05acef5089baf8a_exit 
109bbdee4e712ae9f05acef5089baf8a_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ac87a42443f26798bfd55018038bad3dd



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a19918bb3dbeb85d911a0e2085eca7fa2



`END_AT(截止时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a2dc3eb84ffe119d378d8071826b8c0f7



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







