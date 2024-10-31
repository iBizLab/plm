## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 7fd8ac657c89a877e7cc5dba65920223 [[$./end_at#a7fd8ac657c89a877e7cc5dba65920223 {"[条件组]OR"}]] {
state " " as 7fd8ac657c89a877e7cc5dba65920223_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as dac7dbe9d312f52d3527fa2052da57d6 [[$./end_at#adac7dbe9d312f52d3527fa2052da57d6 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as bae3dce7e2621a33ab15e3af0caa220a [[$./end_at#abae3dce7e2621a33ab15e3af0caa220a {"[条件组]OR"}]] {
state " " as bae3dce7e2621a33ab15e3af0caa220a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 15982819b908212ab609ef3b1b14b131 [[$./end_at#a15982819b908212ab609ef3b1b14b131 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as ad064fa59599a43106dfae257b852b2d [[$./end_at#aad064fa59599a43106dfae257b852b2d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as bae3dce7e2621a33ab15e3af0caa220a_exit  <<exitPoint>>
}
state " " as 7fd8ac657c89a877e7cc5dba65920223_exit  <<exitPoint>>
}


start --> 7fd8ac657c89a877e7cc5dba65920223_entry 
7fd8ac657c89a877e7cc5dba65920223_entry --> dac7dbe9d312f52d3527fa2052da57d6 
dac7dbe9d312f52d3527fa2052da57d6 --> 7fd8ac657c89a877e7cc5dba65920223_exit  : yes
dac7dbe9d312f52d3527fa2052da57d6 -[#red]-> bae3dce7e2621a33ab15e3af0caa220a_entry  : no

bae3dce7e2621a33ab15e3af0caa220a_entry --> 15982819b908212ab609ef3b1b14b131 
15982819b908212ab609ef3b1b14b131 --> bae3dce7e2621a33ab15e3af0caa220a_exit  : yes
15982819b908212ab609ef3b1b14b131 -[#red]-> ad064fa59599a43106dfae257b852b2d  : no

ad064fa59599a43106dfae257b852b2d --> bae3dce7e2621a33ab15e3af0caa220a_exit  : yes
ad064fa59599a43106dfae257b852b2d -[#red]-> end  : no
bae3dce7e2621a33ab15e3af0caa220a_exit --> 7fd8ac657c89a877e7cc5dba65920223_exit 
7fd8ac657c89a877e7cc5dba65920223_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a15982819b908212ab609ef3b1b14b131



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=adac7dbe9d312f52d3527fa2052da57d6



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aad064fa59599a43106dfae257b852b2d



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







