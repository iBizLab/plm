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
state "[条件组]OR" as ac5a68a7e014ea05f099a0eba85c6a98 [[$./start_at#aac5a68a7e014ea05f099a0eba85c6a98 {"[条件组]OR"}]] {
state " " as ac5a68a7e014ea05f099a0eba85c6a98_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 200f36b008e40aea5b0f2a610afcc7cb [[$./start_at#a200f36b008e40aea5b0f2a610afcc7cb {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 8714ccaa89a59ad6585359fd230c88d5 [[$./start_at#a8714ccaa89a59ad6585359fd230c88d5 {"[条件组]OR"}]] {
state " " as 8714ccaa89a59ad6585359fd230c88d5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 133e3cead5a76620e018a82ac99c60ea [[$./start_at#a133e3cead5a76620e018a82ac99c60ea {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as ae0fd0b82a8546dd9c2ff32787f6b48d [[$./start_at#aae0fd0b82a8546dd9c2ff32787f6b48d {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 8714ccaa89a59ad6585359fd230c88d5_exit  <<exitPoint>>
}
state " " as ac5a68a7e014ea05f099a0eba85c6a98_exit  <<exitPoint>>
}


start --> ac5a68a7e014ea05f099a0eba85c6a98_entry 
ac5a68a7e014ea05f099a0eba85c6a98_entry --> 200f36b008e40aea5b0f2a610afcc7cb 
200f36b008e40aea5b0f2a610afcc7cb --> ac5a68a7e014ea05f099a0eba85c6a98_exit  : yes
200f36b008e40aea5b0f2a610afcc7cb -[#red]-> 8714ccaa89a59ad6585359fd230c88d5_entry  : no

8714ccaa89a59ad6585359fd230c88d5_entry --> 133e3cead5a76620e018a82ac99c60ea 
133e3cead5a76620e018a82ac99c60ea --> 8714ccaa89a59ad6585359fd230c88d5_exit  : yes
133e3cead5a76620e018a82ac99c60ea -[#red]-> ae0fd0b82a8546dd9c2ff32787f6b48d  : no

ae0fd0b82a8546dd9c2ff32787f6b48d --> 8714ccaa89a59ad6585359fd230c88d5_exit  : yes
ae0fd0b82a8546dd9c2ff32787f6b48d -[#red]-> end  : no
8714ccaa89a59ad6585359fd230c88d5_exit --> ac5a68a7e014ea05f099a0eba85c6a98_exit 
ac5a68a7e014ea05f099a0eba85c6a98_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a133e3cead5a76620e018a82ac99c60ea



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aae0fd0b82a8546dd9c2ff32787f6b48d



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a200f36b008e40aea5b0f2a610afcc7cb



`START_AT(开始时间)` ISNULL 






