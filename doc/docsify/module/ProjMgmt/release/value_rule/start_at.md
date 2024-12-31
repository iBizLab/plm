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
state "[条件组]OR" as 7c5ce1de5c60121816ed75c25cb9a683 [[$./start_at#a7c5ce1de5c60121816ed75c25cb9a683 {"[条件组]OR"}]] {
state " " as 7c5ce1de5c60121816ed75c25cb9a683_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b3f986b09b78dde77ca196bee94cc59d [[$./start_at#ab3f986b09b78dde77ca196bee94cc59d {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ef5f152432dbef04005468b0683f4454 [[$./start_at#aef5f152432dbef04005468b0683f4454 {"[条件组]OR"}]] {
state " " as ef5f152432dbef04005468b0683f4454_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as aa68c7d924ab1ad75e3009f87bb3b3eb [[$./start_at#aaa68c7d924ab1ad75e3009f87bb3b3eb {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 1edaaa03d123440abddaa1f629402058 [[$./start_at#a1edaaa03d123440abddaa1f629402058 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as ef5f152432dbef04005468b0683f4454_exit  <<exitPoint>>
}
state " " as 7c5ce1de5c60121816ed75c25cb9a683_exit  <<exitPoint>>
}


start --> 7c5ce1de5c60121816ed75c25cb9a683_entry 
7c5ce1de5c60121816ed75c25cb9a683_entry --> b3f986b09b78dde77ca196bee94cc59d 
b3f986b09b78dde77ca196bee94cc59d --> 7c5ce1de5c60121816ed75c25cb9a683_exit  : yes
b3f986b09b78dde77ca196bee94cc59d -[#red]-> ef5f152432dbef04005468b0683f4454_entry  : no

ef5f152432dbef04005468b0683f4454_entry --> aa68c7d924ab1ad75e3009f87bb3b3eb 
aa68c7d924ab1ad75e3009f87bb3b3eb --> ef5f152432dbef04005468b0683f4454_exit  : yes
aa68c7d924ab1ad75e3009f87bb3b3eb -[#red]-> 1edaaa03d123440abddaa1f629402058  : no

1edaaa03d123440abddaa1f629402058 --> ef5f152432dbef04005468b0683f4454_exit  : yes
1edaaa03d123440abddaa1f629402058 -[#red]-> end  : no
ef5f152432dbef04005468b0683f4454_exit --> 7c5ce1de5c60121816ed75c25cb9a683_exit 
7c5ce1de5c60121816ed75c25cb9a683_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=aaa68c7d924ab1ad75e3009f87bb3b3eb



`END_AT(发布时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a1edaaa03d123440abddaa1f629402058



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=ab3f986b09b78dde77ca196bee94cc59d



`START_AT(开始时间)` ISNULL 






