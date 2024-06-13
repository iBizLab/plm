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
state "[条件组]OR" as e96ba95c84e888f1233c004918757920 [[$./end_at#ae96ba95c84e888f1233c004918757920 {"[条件组]OR"}]] {
state " " as e96ba95c84e888f1233c004918757920_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f4de2d56416aed637ff870af49c71447 [[$./end_at#af4de2d56416aed637ff870af49c71447 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 843dc3413f49d9d9ba034239f20bd2fb [[$./end_at#a843dc3413f49d9d9ba034239f20bd2fb {"[条件组]OR"}]] {
state " " as 843dc3413f49d9d9ba034239f20bd2fb_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as c7e2bab24fd031ab9b0d25d8e7c2b3b1 [[$./end_at#ac7e2bab24fd031ab9b0d25d8e7c2b3b1 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as d2166528a6cc680806453253dda9ec2d [[$./end_at#ad2166528a6cc680806453253dda9ec2d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 843dc3413f49d9d9ba034239f20bd2fb_exit  <<exitPoint>>
}
state " " as e96ba95c84e888f1233c004918757920_exit  <<exitPoint>>
}


start --> e96ba95c84e888f1233c004918757920_entry 
e96ba95c84e888f1233c004918757920_entry --> f4de2d56416aed637ff870af49c71447 
f4de2d56416aed637ff870af49c71447 --> e96ba95c84e888f1233c004918757920_exit  : yes
f4de2d56416aed637ff870af49c71447 -[#red]-> 843dc3413f49d9d9ba034239f20bd2fb_entry  : no

843dc3413f49d9d9ba034239f20bd2fb_entry --> c7e2bab24fd031ab9b0d25d8e7c2b3b1 
c7e2bab24fd031ab9b0d25d8e7c2b3b1 --> 843dc3413f49d9d9ba034239f20bd2fb_exit  : yes
c7e2bab24fd031ab9b0d25d8e7c2b3b1 -[#red]-> d2166528a6cc680806453253dda9ec2d  : no

d2166528a6cc680806453253dda9ec2d --> 843dc3413f49d9d9ba034239f20bd2fb_exit  : yes
d2166528a6cc680806453253dda9ec2d -[#red]-> end  : no
843dc3413f49d9d9ba034239f20bd2fb_exit --> e96ba95c84e888f1233c004918757920_exit 
e96ba95c84e888f1233c004918757920_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=af4de2d56416aed637ff870af49c71447



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ad2166528a6cc680806453253dda9ec2d



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ac7e2bab24fd031ab9b0d25d8e7c2b3b1



`START_AT(开始时间)` ISNULL 






