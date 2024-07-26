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
state "[条件组]OR" as 9115502b95f419c3af3d0e01d7e8bd72 [[$./start_at#a9115502b95f419c3af3d0e01d7e8bd72 {"[条件组]OR"}]] {
state " " as 9115502b95f419c3af3d0e01d7e8bd72_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 3cf164eb00dba8bf4ecd2d9f60294962 [[$./start_at#a3cf164eb00dba8bf4ecd2d9f60294962 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 0f8d99a305337e1eca1722f4c82cf2e3 [[$./start_at#a0f8d99a305337e1eca1722f4c82cf2e3 {"[条件组]OR"}]] {
state " " as 0f8d99a305337e1eca1722f4c82cf2e3_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 8e86193934af96617ac3bd294419f3d4 [[$./start_at#a8e86193934af96617ac3bd294419f3d4 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 2a8417c8c6138a79e037d20173b67826 [[$./start_at#a2a8417c8c6138a79e037d20173b67826 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 0f8d99a305337e1eca1722f4c82cf2e3_exit  <<exitPoint>>
}
state " " as 9115502b95f419c3af3d0e01d7e8bd72_exit  <<exitPoint>>
}


start --> 9115502b95f419c3af3d0e01d7e8bd72_entry 
9115502b95f419c3af3d0e01d7e8bd72_entry --> 3cf164eb00dba8bf4ecd2d9f60294962 
3cf164eb00dba8bf4ecd2d9f60294962 --> 9115502b95f419c3af3d0e01d7e8bd72_exit  : yes
3cf164eb00dba8bf4ecd2d9f60294962 -[#red]-> 0f8d99a305337e1eca1722f4c82cf2e3_entry  : no

0f8d99a305337e1eca1722f4c82cf2e3_entry --> 8e86193934af96617ac3bd294419f3d4 
8e86193934af96617ac3bd294419f3d4 --> 0f8d99a305337e1eca1722f4c82cf2e3_exit  : yes
8e86193934af96617ac3bd294419f3d4 -[#red]-> 2a8417c8c6138a79e037d20173b67826  : no

2a8417c8c6138a79e037d20173b67826 --> 0f8d99a305337e1eca1722f4c82cf2e3_exit  : yes
2a8417c8c6138a79e037d20173b67826 -[#red]-> end  : no
0f8d99a305337e1eca1722f4c82cf2e3_exit --> 9115502b95f419c3af3d0e01d7e8bd72_exit 
9115502b95f419c3af3d0e01d7e8bd72_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a3cf164eb00dba8bf4ecd2d9f60294962



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a2a8417c8c6138a79e037d20173b67826



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a8e86193934af96617ac3bd294419f3d4



`END_AT(发布时间)` ISNULL 






