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
state "[条件组]OR" as d8273efbc2e9bf0db2d00745043f870f [[$./end_at#ad8273efbc2e9bf0db2d00745043f870f {"[条件组]OR"}]] {
state " " as d8273efbc2e9bf0db2d00745043f870f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 8523337f20937463e19558c5e7f96cdb [[$./end_at#a8523337f20937463e19558c5e7f96cdb {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e62e21023c03191ff4366cec473ecf27 [[$./end_at#ae62e21023c03191ff4366cec473ecf27 {"[条件组]OR"}]] {
state " " as e62e21023c03191ff4366cec473ecf27_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as f808f632889c75b890de5cc6a003f53e [[$./end_at#af808f632889c75b890de5cc6a003f53e {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 5a685096264682c54128c7ff1eb70b9e [[$./end_at#a5a685096264682c54128c7ff1eb70b9e {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e62e21023c03191ff4366cec473ecf27_exit  <<exitPoint>>
}
state " " as d8273efbc2e9bf0db2d00745043f870f_exit  <<exitPoint>>
}


start --> d8273efbc2e9bf0db2d00745043f870f_entry 
d8273efbc2e9bf0db2d00745043f870f_entry --> 8523337f20937463e19558c5e7f96cdb 
8523337f20937463e19558c5e7f96cdb --> d8273efbc2e9bf0db2d00745043f870f_exit  : yes
8523337f20937463e19558c5e7f96cdb -[#red]-> e62e21023c03191ff4366cec473ecf27_entry  : no

e62e21023c03191ff4366cec473ecf27_entry --> f808f632889c75b890de5cc6a003f53e 
f808f632889c75b890de5cc6a003f53e --> e62e21023c03191ff4366cec473ecf27_exit  : yes
f808f632889c75b890de5cc6a003f53e -[#red]-> 5a685096264682c54128c7ff1eb70b9e  : no

5a685096264682c54128c7ff1eb70b9e --> e62e21023c03191ff4366cec473ecf27_exit  : yes
5a685096264682c54128c7ff1eb70b9e -[#red]-> end  : no
e62e21023c03191ff4366cec473ecf27_exit --> d8273efbc2e9bf0db2d00745043f870f_exit 
d8273efbc2e9bf0db2d00745043f870f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a8523337f20937463e19558c5e7f96cdb



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a5a685096264682c54128c7ff1eb70b9e



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=af808f632889c75b890de5cc6a003f53e



`START_AT(开始时间)` ISNULL 






