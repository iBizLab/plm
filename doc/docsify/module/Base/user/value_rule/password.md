## 密码(PASSWORD) <!-- {docsify-ignore-all} -->

   

### 两次密码不一致 :id=PASSWORD

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
state "[条件组]OR" as a6231db22a6308c73ad4626602d99016 [[$./password#aa6231db22a6308c73ad4626602d99016 {"[条件组]OR"}]] {
state " " as a6231db22a6308c73ad4626602d99016_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 2a84f78dd12d39b7f688b56a77aa88d1 [[$./password#a2a84f78dd12d39b7f688b56a77aa88d1 {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 3dd786e6248bd620cf28a643c934eea5 [[$./password#a3dd786e6248bd620cf28a643c934eea5 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 1eaf58e99848857b2d27b4cb77c0d2be [[$./password#a1eaf58e99848857b2d27b4cb77c0d2be {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as a6231db22a6308c73ad4626602d99016_exit  <<exitPoint>>
}


start --> a6231db22a6308c73ad4626602d99016_entry 
a6231db22a6308c73ad4626602d99016_entry --> 2a84f78dd12d39b7f688b56a77aa88d1 
2a84f78dd12d39b7f688b56a77aa88d1 --> a6231db22a6308c73ad4626602d99016_exit  : yes
2a84f78dd12d39b7f688b56a77aa88d1 -[#red]-> 3dd786e6248bd620cf28a643c934eea5  : no

3dd786e6248bd620cf28a643c934eea5 --> a6231db22a6308c73ad4626602d99016_exit  : yes
3dd786e6248bd620cf28a643c934eea5 -[#red]-> 1eaf58e99848857b2d27b4cb77c0d2be  : no

1eaf58e99848857b2d27b4cb77c0d2be --> a6231db22a6308c73ad4626602d99016_exit  : yes
1eaf58e99848857b2d27b4cb77c0d2be -[#red]-> end  : no
a6231db22a6308c73ad4626602d99016_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a1eaf58e99848857b2d27b4cb77c0d2be



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (new_password) 值为空(Nil) :id=a3dd786e6248bd620cf28a643c934eea5



`new_password` ISNULL 

##### (sure_password) 值为空(Nil) :id=a2a84f78dd12d39b7f688b56a77aa88d1



`sure_password` ISNULL 


### 默认规则 :id=Default

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
state "默认字符串长度" as b6d3fc3d7ea17583696c78b3670bfd22 [[$./password#ab6d3fc3d7ea17583696c78b3670bfd22 {"默认字符串长度"}]]


start --> b6d3fc3d7ea17583696c78b3670bfd22 
b6d3fc3d7ea17583696c78b3670bfd22 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ab6d3fc3d7ea17583696c78b3670bfd22


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







