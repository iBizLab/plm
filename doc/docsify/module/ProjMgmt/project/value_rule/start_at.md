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
state "[条件组]OR" as 92f0556ecaa64d767ff27111f57d0c6f [[$./start_at#a92f0556ecaa64d767ff27111f57d0c6f {"[条件组]OR"}]] {
state " " as 92f0556ecaa64d767ff27111f57d0c6f_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as dc63e25f487a2d6cb583a9bee634532a [[$./start_at#adc63e25f487a2d6cb583a9bee634532a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 9679df6bebd4fa529d214eeb6571e781 [[$./start_at#a9679df6bebd4fa529d214eeb6571e781 {"[条件组]OR"}]] {
state " " as 9679df6bebd4fa529d214eeb6571e781_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d763edc38a7deed11d4e3abe96beec80 [[$./start_at#ad763edc38a7deed11d4e3abe96beec80 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 7981f3feeed5a494416eb0d482149f24 [[$./start_at#a7981f3feeed5a494416eb0d482149f24 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 9679df6bebd4fa529d214eeb6571e781_exit  <<exitPoint>>
}
state " " as 92f0556ecaa64d767ff27111f57d0c6f_exit  <<exitPoint>>
}


start --> 92f0556ecaa64d767ff27111f57d0c6f_entry 
92f0556ecaa64d767ff27111f57d0c6f_entry --> dc63e25f487a2d6cb583a9bee634532a 
dc63e25f487a2d6cb583a9bee634532a --> 92f0556ecaa64d767ff27111f57d0c6f_exit  : yes
dc63e25f487a2d6cb583a9bee634532a -[#red]-> 9679df6bebd4fa529d214eeb6571e781_entry  : no

9679df6bebd4fa529d214eeb6571e781_entry --> d763edc38a7deed11d4e3abe96beec80 
d763edc38a7deed11d4e3abe96beec80 --> 9679df6bebd4fa529d214eeb6571e781_exit  : yes
d763edc38a7deed11d4e3abe96beec80 -[#red]-> 7981f3feeed5a494416eb0d482149f24  : no

7981f3feeed5a494416eb0d482149f24 --> 9679df6bebd4fa529d214eeb6571e781_exit  : yes
7981f3feeed5a494416eb0d482149f24 -[#red]-> end  : no
9679df6bebd4fa529d214eeb6571e781_exit --> 92f0556ecaa64d767ff27111f57d0c6f_exit 
92f0556ecaa64d767ff27111f57d0c6f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ad763edc38a7deed11d4e3abe96beec80



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a7981f3feeed5a494416eb0d482149f24



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=adc63e25f487a2d6cb583a9bee634532a



`START_AT(开始时间)` ISNULL 






