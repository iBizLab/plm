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
state "[条件组]OR" as ea010c7d2a3fc77653cba9b795eb298e [[$./start_at#aea010c7d2a3fc77653cba9b795eb298e {"[条件组]OR"}]] {
state " " as ea010c7d2a3fc77653cba9b795eb298e_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as c87ddb864ee84361b385d0f14ed566c6 [[$./start_at#ac87ddb864ee84361b385d0f14ed566c6 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as a44fda8237f960818e49437c9148fd9c [[$./start_at#aa44fda8237f960818e49437c9148fd9c {"[条件组]OR"}]] {
state " " as a44fda8237f960818e49437c9148fd9c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b3f89dc36cf2ee17aa2e8ff771461598 [[$./start_at#ab3f89dc36cf2ee17aa2e8ff771461598 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 637b0e7c3d891df1efc8e0297527e0a9 [[$./start_at#a637b0e7c3d891df1efc8e0297527e0a9 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as a44fda8237f960818e49437c9148fd9c_exit  <<exitPoint>>
}
state " " as ea010c7d2a3fc77653cba9b795eb298e_exit  <<exitPoint>>
}


start --> ea010c7d2a3fc77653cba9b795eb298e_entry 
ea010c7d2a3fc77653cba9b795eb298e_entry --> c87ddb864ee84361b385d0f14ed566c6 
c87ddb864ee84361b385d0f14ed566c6 --> ea010c7d2a3fc77653cba9b795eb298e_exit  : yes
c87ddb864ee84361b385d0f14ed566c6 -[#red]-> a44fda8237f960818e49437c9148fd9c_entry  : no

a44fda8237f960818e49437c9148fd9c_entry --> b3f89dc36cf2ee17aa2e8ff771461598 
b3f89dc36cf2ee17aa2e8ff771461598 --> a44fda8237f960818e49437c9148fd9c_exit  : yes
b3f89dc36cf2ee17aa2e8ff771461598 -[#red]-> 637b0e7c3d891df1efc8e0297527e0a9  : no

637b0e7c3d891df1efc8e0297527e0a9 --> a44fda8237f960818e49437c9148fd9c_exit  : yes
637b0e7c3d891df1efc8e0297527e0a9 -[#red]-> end  : no
a44fda8237f960818e49437c9148fd9c_exit --> ea010c7d2a3fc77653cba9b795eb298e_exit 
ea010c7d2a3fc77653cba9b795eb298e_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ab3f89dc36cf2ee17aa2e8ff771461598



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a637b0e7c3d891df1efc8e0297527e0a9



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=ac87ddb864ee84361b385d0f14ed566c6



`START_AT(开始时间)` ISNULL 






