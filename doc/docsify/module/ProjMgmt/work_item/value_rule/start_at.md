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
state "[条件组]OR" as 513453fb8724ba465e0b90e23a202659 [[$./start_at#a513453fb8724ba465e0b90e23a202659 {"[条件组]OR"}]] {
state " " as 513453fb8724ba465e0b90e23a202659_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0e816195ba6355b418d0f280dd149811 [[$./start_at#a0e816195ba6355b418d0f280dd149811 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3b66d5606317c60820f17f477d45d4eb [[$./start_at#a3b66d5606317c60820f17f477d45d4eb {"[条件组]OR"}]] {
state " " as 3b66d5606317c60820f17f477d45d4eb_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 1edaaa03d123440abddaa1f629402058 [[$./start_at#a1edaaa03d123440abddaa1f629402058 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as e9bc9045088399db40a82317d180afc7 [[$./start_at#ae9bc9045088399db40a82317d180afc7 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 3b66d5606317c60820f17f477d45d4eb_exit  <<exitPoint>>
}
state " " as 513453fb8724ba465e0b90e23a202659_exit  <<exitPoint>>
}


start --> 513453fb8724ba465e0b90e23a202659_entry 
513453fb8724ba465e0b90e23a202659_entry --> 0e816195ba6355b418d0f280dd149811 
0e816195ba6355b418d0f280dd149811 --> 513453fb8724ba465e0b90e23a202659_exit  : yes
0e816195ba6355b418d0f280dd149811 -[#red]-> 3b66d5606317c60820f17f477d45d4eb_entry  : no

3b66d5606317c60820f17f477d45d4eb_entry --> 1edaaa03d123440abddaa1f629402058 
1edaaa03d123440abddaa1f629402058 --> 3b66d5606317c60820f17f477d45d4eb_exit  : yes
1edaaa03d123440abddaa1f629402058 -[#red]-> e9bc9045088399db40a82317d180afc7  : no

e9bc9045088399db40a82317d180afc7 --> 3b66d5606317c60820f17f477d45d4eb_exit  : yes
e9bc9045088399db40a82317d180afc7 -[#red]-> end  : no
3b66d5606317c60820f17f477d45d4eb_exit --> 513453fb8724ba465e0b90e23a202659_exit 
513453fb8724ba465e0b90e23a202659_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a0e816195ba6355b418d0f280dd149811



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ae9bc9045088399db40a82317d180afc7



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a1edaaa03d123440abddaa1f629402058



`END_AT(截止时间)` ISNULL 






