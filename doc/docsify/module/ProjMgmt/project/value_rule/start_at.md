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
state "[条件组]OR" as e5860296a7cda6acb611ff44f09d54b3 [[$./start_at#ae5860296a7cda6acb611ff44f09d54b3 {"[条件组]OR"}]] {
state " " as e5860296a7cda6acb611ff44f09d54b3_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as a3c495e8f2716934b2c87319e152ff90 [[$./start_at#aa3c495e8f2716934b2c87319e152ff90 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 92f0556ecaa64d767ff27111f57d0c6f [[$./start_at#a92f0556ecaa64d767ff27111f57d0c6f {"[条件组]OR"}]] {
state " " as 92f0556ecaa64d767ff27111f57d0c6f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as dc63e25f487a2d6cb583a9bee634532a [[$./start_at#adc63e25f487a2d6cb583a9bee634532a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as dd220c8845790ee44e3f74a7f7a89a37 [[$./start_at#add220c8845790ee44e3f74a7f7a89a37 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 92f0556ecaa64d767ff27111f57d0c6f_exit  <<exitPoint>>
}
state " " as e5860296a7cda6acb611ff44f09d54b3_exit  <<exitPoint>>
}


start --> e5860296a7cda6acb611ff44f09d54b3_entry 
e5860296a7cda6acb611ff44f09d54b3_entry --> a3c495e8f2716934b2c87319e152ff90 
a3c495e8f2716934b2c87319e152ff90 --> e5860296a7cda6acb611ff44f09d54b3_exit  : yes
a3c495e8f2716934b2c87319e152ff90 -[#red]-> 92f0556ecaa64d767ff27111f57d0c6f_entry  : no

92f0556ecaa64d767ff27111f57d0c6f_entry --> dc63e25f487a2d6cb583a9bee634532a 
dc63e25f487a2d6cb583a9bee634532a --> 92f0556ecaa64d767ff27111f57d0c6f_exit  : yes
dc63e25f487a2d6cb583a9bee634532a -[#red]-> dd220c8845790ee44e3f74a7f7a89a37  : no

dd220c8845790ee44e3f74a7f7a89a37 --> 92f0556ecaa64d767ff27111f57d0c6f_exit  : yes
dd220c8845790ee44e3f74a7f7a89a37 -[#red]-> end  : no
92f0556ecaa64d767ff27111f57d0c6f_exit --> e5860296a7cda6acb611ff44f09d54b3_exit 
e5860296a7cda6acb611ff44f09d54b3_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=add220c8845790ee44e3f74a7f7a89a37



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=aa3c495e8f2716934b2c87319e152ff90



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=adc63e25f487a2d6cb583a9bee634532a



`END_AT(结束时间)` ISNULL 






