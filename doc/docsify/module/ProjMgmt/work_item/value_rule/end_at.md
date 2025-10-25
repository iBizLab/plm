## 截止时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 64527d56a93554d366d912102787619c [[$./end_at#a64527d56a93554d366d912102787619c {"[条件组]OR"}]] {
state " " as 64527d56a93554d366d912102787619c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 2e5f3c46a0dbd3d74fb4c0ccddb25898 [[$./end_at#a2e5f3c46a0dbd3d74fb4c0ccddb25898 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ad1c6ae54066487b036243adee341c1b [[$./end_at#aad1c6ae54066487b036243adee341c1b {"[条件组]OR"}]] {
state " " as ad1c6ae54066487b036243adee341c1b_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 60c0127638f567872cf231eb0fadb0fd [[$./end_at#a60c0127638f567872cf231eb0fadb0fd {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 7156cdddbf0181d78a8a4759c3c745ef [[$./end_at#a7156cdddbf0181d78a8a4759c3c745ef {"[常规条件] 值为空(Nil)"}]]
state " " as ad1c6ae54066487b036243adee341c1b_exit  <<exitPoint>>
}
state " " as 64527d56a93554d366d912102787619c_exit  <<exitPoint>>
}


start --> 64527d56a93554d366d912102787619c_entry 
64527d56a93554d366d912102787619c_entry --> 2e5f3c46a0dbd3d74fb4c0ccddb25898 
2e5f3c46a0dbd3d74fb4c0ccddb25898 --> 64527d56a93554d366d912102787619c_exit  : yes
2e5f3c46a0dbd3d74fb4c0ccddb25898 -[#red]-> ad1c6ae54066487b036243adee341c1b_entry  : no

ad1c6ae54066487b036243adee341c1b_entry --> 60c0127638f567872cf231eb0fadb0fd 
60c0127638f567872cf231eb0fadb0fd --> ad1c6ae54066487b036243adee341c1b_exit  : yes
60c0127638f567872cf231eb0fadb0fd -[#red]-> 7156cdddbf0181d78a8a4759c3c745ef  : no

7156cdddbf0181d78a8a4759c3c745ef --> ad1c6ae54066487b036243adee341c1b_exit  : yes
7156cdddbf0181d78a8a4759c3c745ef -[#red]-> end  : no
ad1c6ae54066487b036243adee341c1b_exit --> 64527d56a93554d366d912102787619c_exit 
64527d56a93554d366d912102787619c_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a7156cdddbf0181d78a8a4759c3c745ef



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a2e5f3c46a0dbd3d74fb4c0ccddb25898



`END_AT(截止时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a60c0127638f567872cf231eb0fadb0fd



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







