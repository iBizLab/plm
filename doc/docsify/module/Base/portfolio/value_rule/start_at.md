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
state "[条件组]OR" as c95371cda30443249331b7e57c859216 [[$./start_at#ac95371cda30443249331b7e57c859216 {"[条件组]OR"}]] {
state " " as c95371cda30443249331b7e57c859216_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as eb93037eb81a9b57562bd38da2c5f927 [[$./start_at#aeb93037eb81a9b57562bd38da2c5f927 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6a32f5e42a1e3c746db8ad9f0f32a6de [[$./start_at#a6a32f5e42a1e3c746db8ad9f0f32a6de {"[条件组]OR"}]] {
state " " as 6a32f5e42a1e3c746db8ad9f0f32a6de_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 659db712efacb2b17b55888f48df8da2 [[$./start_at#a659db712efacb2b17b55888f48df8da2 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 18b6f176f1861d0190fe4b3f79b92e9d [[$./start_at#a18b6f176f1861d0190fe4b3f79b92e9d {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 6a32f5e42a1e3c746db8ad9f0f32a6de_exit  <<exitPoint>>
}
state " " as c95371cda30443249331b7e57c859216_exit  <<exitPoint>>
}


start --> c95371cda30443249331b7e57c859216_entry 
c95371cda30443249331b7e57c859216_entry --> eb93037eb81a9b57562bd38da2c5f927 
eb93037eb81a9b57562bd38da2c5f927 --> c95371cda30443249331b7e57c859216_exit  : yes
eb93037eb81a9b57562bd38da2c5f927 -[#red]-> 6a32f5e42a1e3c746db8ad9f0f32a6de_entry  : no

6a32f5e42a1e3c746db8ad9f0f32a6de_entry --> 659db712efacb2b17b55888f48df8da2 
659db712efacb2b17b55888f48df8da2 --> 6a32f5e42a1e3c746db8ad9f0f32a6de_exit  : yes
659db712efacb2b17b55888f48df8da2 -[#red]-> 18b6f176f1861d0190fe4b3f79b92e9d  : no

18b6f176f1861d0190fe4b3f79b92e9d --> 6a32f5e42a1e3c746db8ad9f0f32a6de_exit  : yes
18b6f176f1861d0190fe4b3f79b92e9d -[#red]-> end  : no
6a32f5e42a1e3c746db8ad9f0f32a6de_exit --> c95371cda30443249331b7e57c859216_exit 
c95371cda30443249331b7e57c859216_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=aeb93037eb81a9b57562bd38da2c5f927



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a18b6f176f1861d0190fe4b3f79b92e9d



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a659db712efacb2b17b55888f48df8da2



`END_AT(结束时间)` ISNULL 






