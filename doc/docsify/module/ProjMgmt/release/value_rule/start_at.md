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
state "[条件组]OR" as 0f8d99a305337e1eca1722f4c82cf2e3 [[$./start_at#a0f8d99a305337e1eca1722f4c82cf2e3 {"[条件组]OR"}]] {
state " " as 0f8d99a305337e1eca1722f4c82cf2e3_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8e86193934af96617ac3bd294419f3d4 [[$./start_at#a8e86193934af96617ac3bd294419f3d4 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 16e6c80df22df825799462f12c3efc8f [[$./start_at#a16e6c80df22df825799462f12c3efc8f {"[条件组]OR"}]] {
state " " as 16e6c80df22df825799462f12c3efc8f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 01e962756381e4f517afbd8a733b6a10 [[$./start_at#a01e962756381e4f517afbd8a733b6a10 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 4c8b645c391675ce25ae73bdaf096a7f [[$./start_at#a4c8b645c391675ce25ae73bdaf096a7f {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 16e6c80df22df825799462f12c3efc8f_exit  <<exitPoint>>
}
state " " as 0f8d99a305337e1eca1722f4c82cf2e3_exit  <<exitPoint>>
}


start --> 0f8d99a305337e1eca1722f4c82cf2e3_entry 
0f8d99a305337e1eca1722f4c82cf2e3_entry --> 8e86193934af96617ac3bd294419f3d4 
8e86193934af96617ac3bd294419f3d4 --> 0f8d99a305337e1eca1722f4c82cf2e3_exit  : yes
8e86193934af96617ac3bd294419f3d4 -[#red]-> 16e6c80df22df825799462f12c3efc8f_entry  : no

16e6c80df22df825799462f12c3efc8f_entry --> 01e962756381e4f517afbd8a733b6a10 
01e962756381e4f517afbd8a733b6a10 --> 16e6c80df22df825799462f12c3efc8f_exit  : yes
01e962756381e4f517afbd8a733b6a10 -[#red]-> 4c8b645c391675ce25ae73bdaf096a7f  : no

4c8b645c391675ce25ae73bdaf096a7f --> 16e6c80df22df825799462f12c3efc8f_exit  : yes
4c8b645c391675ce25ae73bdaf096a7f -[#red]-> end  : no
16e6c80df22df825799462f12c3efc8f_exit --> 0f8d99a305337e1eca1722f4c82cf2e3_exit 
0f8d99a305337e1eca1722f4c82cf2e3_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a4c8b645c391675ce25ae73bdaf096a7f



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a01e962756381e4f517afbd8a733b6a10



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a8e86193934af96617ac3bd294419f3d4



`START_AT(开始时间)` ISNULL 






