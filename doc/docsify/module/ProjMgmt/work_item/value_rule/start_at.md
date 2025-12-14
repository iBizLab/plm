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
state "[条件组]OR" as edac0802f8a6fdf601c2ec24db2d1cb2 [[$./start_at#aedac0802f8a6fdf601c2ec24db2d1cb2 {"[条件组]OR"}]] {
state " " as edac0802f8a6fdf601c2ec24db2d1cb2_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8a923810c9b69b165d38e12e91623ce3 [[$./start_at#a8a923810c9b69b165d38e12e91623ce3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6cbbfde6edb0b99b20d9181fc6babe32 [[$./start_at#a6cbbfde6edb0b99b20d9181fc6babe32 {"[条件组]OR"}]] {
state " " as 6cbbfde6edb0b99b20d9181fc6babe32_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as fdcf8910e109337bbd80fa62a7333ea8 [[$./start_at#afdcf8910e109337bbd80fa62a7333ea8 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as aee31b5b7ed88b88178d93ae21fcce1f [[$./start_at#aaee31b5b7ed88b88178d93ae21fcce1f {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 6cbbfde6edb0b99b20d9181fc6babe32_exit  <<exitPoint>>
}
state " " as edac0802f8a6fdf601c2ec24db2d1cb2_exit  <<exitPoint>>
}


start --> edac0802f8a6fdf601c2ec24db2d1cb2_entry 
edac0802f8a6fdf601c2ec24db2d1cb2_entry --> 8a923810c9b69b165d38e12e91623ce3 
8a923810c9b69b165d38e12e91623ce3 --> edac0802f8a6fdf601c2ec24db2d1cb2_exit  : yes
8a923810c9b69b165d38e12e91623ce3 -[#red]-> 6cbbfde6edb0b99b20d9181fc6babe32_entry  : no

6cbbfde6edb0b99b20d9181fc6babe32_entry --> fdcf8910e109337bbd80fa62a7333ea8 
fdcf8910e109337bbd80fa62a7333ea8 --> 6cbbfde6edb0b99b20d9181fc6babe32_exit  : yes
fdcf8910e109337bbd80fa62a7333ea8 -[#red]-> aee31b5b7ed88b88178d93ae21fcce1f  : no

aee31b5b7ed88b88178d93ae21fcce1f --> 6cbbfde6edb0b99b20d9181fc6babe32_exit  : yes
aee31b5b7ed88b88178d93ae21fcce1f -[#red]-> end  : no
6cbbfde6edb0b99b20d9181fc6babe32_exit --> edac0802f8a6fdf601c2ec24db2d1cb2_exit 
edac0802f8a6fdf601c2ec24db2d1cb2_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a8a923810c9b69b165d38e12e91623ce3



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aaee31b5b7ed88b88178d93ae21fcce1f



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=afdcf8910e109337bbd80fa62a7333ea8



`END_AT(截止时间)` ISNULL 






