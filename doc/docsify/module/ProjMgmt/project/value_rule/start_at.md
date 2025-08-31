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
state "[条件组]OR" as 59ab2ee175f35aeea314576f8d0d8dc9 [[$./start_at#a59ab2ee175f35aeea314576f8d0d8dc9 {"[条件组]OR"}]] {
state " " as 59ab2ee175f35aeea314576f8d0d8dc9_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1cb4ec9d07d92df221b7ecd2ee466bf4 [[$./start_at#a1cb4ec9d07d92df221b7ecd2ee466bf4 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3a09270b37ebe645409dadb27a084914 [[$./start_at#a3a09270b37ebe645409dadb27a084914 {"[条件组]OR"}]] {
state " " as 3a09270b37ebe645409dadb27a084914_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 49dda5283e8cc6bd01ceadf0135bbf30 [[$./start_at#a49dda5283e8cc6bd01ceadf0135bbf30 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 6cfeee9c5698a279dee2db046ae68d38 [[$./start_at#a6cfeee9c5698a279dee2db046ae68d38 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 3a09270b37ebe645409dadb27a084914_exit  <<exitPoint>>
}
state " " as 59ab2ee175f35aeea314576f8d0d8dc9_exit  <<exitPoint>>
}


start --> 59ab2ee175f35aeea314576f8d0d8dc9_entry 
59ab2ee175f35aeea314576f8d0d8dc9_entry --> 1cb4ec9d07d92df221b7ecd2ee466bf4 
1cb4ec9d07d92df221b7ecd2ee466bf4 --> 59ab2ee175f35aeea314576f8d0d8dc9_exit  : yes
1cb4ec9d07d92df221b7ecd2ee466bf4 -[#red]-> 3a09270b37ebe645409dadb27a084914_entry  : no

3a09270b37ebe645409dadb27a084914_entry --> 49dda5283e8cc6bd01ceadf0135bbf30 
49dda5283e8cc6bd01ceadf0135bbf30 --> 3a09270b37ebe645409dadb27a084914_exit  : yes
49dda5283e8cc6bd01ceadf0135bbf30 -[#red]-> 6cfeee9c5698a279dee2db046ae68d38  : no

6cfeee9c5698a279dee2db046ae68d38 --> 3a09270b37ebe645409dadb27a084914_exit  : yes
6cfeee9c5698a279dee2db046ae68d38 -[#red]-> end  : no
3a09270b37ebe645409dadb27a084914_exit --> 59ab2ee175f35aeea314576f8d0d8dc9_exit 
59ab2ee175f35aeea314576f8d0d8dc9_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a6cfeee9c5698a279dee2db046ae68d38



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a1cb4ec9d07d92df221b7ecd2ee466bf4



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a49dda5283e8cc6bd01ceadf0135bbf30



`END_AT(结束时间)` ISNULL 






