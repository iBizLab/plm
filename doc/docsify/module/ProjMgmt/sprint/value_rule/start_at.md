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
state "[条件组]OR" as 07cc74d644b187b2351062d72ad09403 [[$./start_at#a07cc74d644b187b2351062d72ad09403 {"[条件组]OR"}]] {
state " " as 07cc74d644b187b2351062d72ad09403_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cf695888e1bb71e81186a5cdde568d45 [[$./start_at#acf695888e1bb71e81186a5cdde568d45 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6b45c3b6f749db607d2a7db449ea0ec4 [[$./start_at#a6b45c3b6f749db607d2a7db449ea0ec4 {"[条件组]OR"}]] {
state " " as 6b45c3b6f749db607d2a7db449ea0ec4_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 69f81a0e5ca62fcc3f2a9be3ff7c28d4 [[$./start_at#a69f81a0e5ca62fcc3f2a9be3ff7c28d4 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 8d04871e406073fc09d85dc779ffccea [[$./start_at#a8d04871e406073fc09d85dc779ffccea {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 6b45c3b6f749db607d2a7db449ea0ec4_exit  <<exitPoint>>
}
state " " as 07cc74d644b187b2351062d72ad09403_exit  <<exitPoint>>
}


start --> 07cc74d644b187b2351062d72ad09403_entry 
07cc74d644b187b2351062d72ad09403_entry --> cf695888e1bb71e81186a5cdde568d45 
cf695888e1bb71e81186a5cdde568d45 --> 07cc74d644b187b2351062d72ad09403_exit  : yes
cf695888e1bb71e81186a5cdde568d45 -[#red]-> 6b45c3b6f749db607d2a7db449ea0ec4_entry  : no

6b45c3b6f749db607d2a7db449ea0ec4_entry --> 69f81a0e5ca62fcc3f2a9be3ff7c28d4 
69f81a0e5ca62fcc3f2a9be3ff7c28d4 --> 6b45c3b6f749db607d2a7db449ea0ec4_exit  : yes
69f81a0e5ca62fcc3f2a9be3ff7c28d4 -[#red]-> 8d04871e406073fc09d85dc779ffccea  : no

8d04871e406073fc09d85dc779ffccea --> 6b45c3b6f749db607d2a7db449ea0ec4_exit  : yes
8d04871e406073fc09d85dc779ffccea -[#red]-> end  : no
6b45c3b6f749db607d2a7db449ea0ec4_exit --> 07cc74d644b187b2351062d72ad09403_exit 
07cc74d644b187b2351062d72ad09403_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=acf695888e1bb71e81186a5cdde568d45



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a8d04871e406073fc09d85dc779ffccea



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a69f81a0e5ca62fcc3f2a9be3ff7c28d4



`END_AT(结束时间)` ISNULL 






