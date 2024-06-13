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
state "[条件组]OR" as fc69d42d48637f957c5d5285861c66dd [[$./password#afc69d42d48637f957c5d5285861c66dd {"[条件组]OR"}]] {
state " " as fc69d42d48637f957c5d5285861c66dd_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as d1694973acffd513059f668d119db9ef [[$./password#ad1694973acffd513059f668d119db9ef {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 200f36b008e40aea5b0f2a610afcc7cb [[$./password#a200f36b008e40aea5b0f2a610afcc7cb {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 02e609fc31eb82965f790178555f17ef [[$./password#a02e609fc31eb82965f790178555f17ef {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as fc69d42d48637f957c5d5285861c66dd_exit  <<exitPoint>>
}


start --> fc69d42d48637f957c5d5285861c66dd_entry 
fc69d42d48637f957c5d5285861c66dd_entry --> d1694973acffd513059f668d119db9ef 
d1694973acffd513059f668d119db9ef --> fc69d42d48637f957c5d5285861c66dd_exit  : yes
d1694973acffd513059f668d119db9ef -[#red]-> 200f36b008e40aea5b0f2a610afcc7cb  : no

200f36b008e40aea5b0f2a610afcc7cb --> fc69d42d48637f957c5d5285861c66dd_exit  : yes
200f36b008e40aea5b0f2a610afcc7cb -[#red]-> 02e609fc31eb82965f790178555f17ef  : no

02e609fc31eb82965f790178555f17ef --> fc69d42d48637f957c5d5285861c66dd_exit  : yes
02e609fc31eb82965f790178555f17ef -[#red]-> end  : no
fc69d42d48637f957c5d5285861c66dd_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a02e609fc31eb82965f790178555f17ef



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (sure_password) 值为空(Nil) :id=ad1694973acffd513059f668d119db9ef



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=a200f36b008e40aea5b0f2a610afcc7cb



`new_password` ISNULL 


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
state "默认字符串长度" as d37f3501c743bb8892c36e0c2e5114a3 [[$./password#ad37f3501c743bb8892c36e0c2e5114a3 {"默认字符串长度"}]]


start --> d37f3501c743bb8892c36e0c2e5114a3 
d37f3501c743bb8892c36e0c2e5114a3 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad37f3501c743bb8892c36e0c2e5114a3


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







