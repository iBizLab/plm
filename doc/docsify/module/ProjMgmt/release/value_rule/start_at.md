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
state "[条件组]OR" as ccd0f30f850c8b311efd2f6007b19000 [[$./start_at#accd0f30f850c8b311efd2f6007b19000 {"[条件组]OR"}]] {
state " " as ccd0f30f850c8b311efd2f6007b19000_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1c9da577ca8e33538584d2b59ce2fb44 [[$./start_at#a1c9da577ca8e33538584d2b59ce2fb44 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 90f93a41b1109d83b81f8bb7d14a9419 [[$./start_at#a90f93a41b1109d83b81f8bb7d14a9419 {"[条件组]OR"}]] {
state " " as 90f93a41b1109d83b81f8bb7d14a9419_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d8ca47de814d01c8816fba8b9f46a02d [[$./start_at#ad8ca47de814d01c8816fba8b9f46a02d {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 214b130699e5131455e21389033068ed [[$./start_at#a214b130699e5131455e21389033068ed {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 90f93a41b1109d83b81f8bb7d14a9419_exit  <<exitPoint>>
}
state " " as ccd0f30f850c8b311efd2f6007b19000_exit  <<exitPoint>>
}


start --> ccd0f30f850c8b311efd2f6007b19000_entry 
ccd0f30f850c8b311efd2f6007b19000_entry --> 1c9da577ca8e33538584d2b59ce2fb44 
1c9da577ca8e33538584d2b59ce2fb44 --> ccd0f30f850c8b311efd2f6007b19000_exit  : yes
1c9da577ca8e33538584d2b59ce2fb44 -[#red]-> 90f93a41b1109d83b81f8bb7d14a9419_entry  : no

90f93a41b1109d83b81f8bb7d14a9419_entry --> d8ca47de814d01c8816fba8b9f46a02d 
d8ca47de814d01c8816fba8b9f46a02d --> 90f93a41b1109d83b81f8bb7d14a9419_exit  : yes
d8ca47de814d01c8816fba8b9f46a02d -[#red]-> 214b130699e5131455e21389033068ed  : no

214b130699e5131455e21389033068ed --> 90f93a41b1109d83b81f8bb7d14a9419_exit  : yes
214b130699e5131455e21389033068ed -[#red]-> end  : no
90f93a41b1109d83b81f8bb7d14a9419_exit --> ccd0f30f850c8b311efd2f6007b19000_exit 
ccd0f30f850c8b311efd2f6007b19000_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a214b130699e5131455e21389033068ed



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a1c9da577ca8e33538584d2b59ce2fb44



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ad8ca47de814d01c8816fba8b9f46a02d



`END_AT(发布时间)` ISNULL 






