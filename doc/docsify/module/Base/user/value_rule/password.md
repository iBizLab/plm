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
state "[条件组]OR" as 165e623007537f6c6b122e1b94836a65 [[$./password#a165e623007537f6c6b122e1b94836a65 {"[条件组]OR"}]] {
state " " as 165e623007537f6c6b122e1b94836a65_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 1d84912ae191b0221ef59f7e059c9217 [[$./password#a1d84912ae191b0221ef59f7e059c9217 {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as abfb600c5f1e0dbedef0eb8fc9cf4103 [[$./password#aabfb600c5f1e0dbedef0eb8fc9cf4103 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 2ab38c06678d498c97d88ff0ebf355ff [[$./password#a2ab38c06678d498c97d88ff0ebf355ff {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 165e623007537f6c6b122e1b94836a65_exit  <<exitPoint>>
}


start --> 165e623007537f6c6b122e1b94836a65_entry 
165e623007537f6c6b122e1b94836a65_entry --> 1d84912ae191b0221ef59f7e059c9217 
1d84912ae191b0221ef59f7e059c9217 --> 165e623007537f6c6b122e1b94836a65_exit  : yes
1d84912ae191b0221ef59f7e059c9217 -[#red]-> abfb600c5f1e0dbedef0eb8fc9cf4103  : no

abfb600c5f1e0dbedef0eb8fc9cf4103 --> 165e623007537f6c6b122e1b94836a65_exit  : yes
abfb600c5f1e0dbedef0eb8fc9cf4103 -[#red]-> 2ab38c06678d498c97d88ff0ebf355ff  : no

2ab38c06678d498c97d88ff0ebf355ff --> 165e623007537f6c6b122e1b94836a65_exit  : yes
2ab38c06678d498c97d88ff0ebf355ff -[#red]-> end  : no
165e623007537f6c6b122e1b94836a65_exit --> end 


@enduml
```

#### 条件说明

##### (new_password) 值为空(Nil) :id=aabfb600c5f1e0dbedef0eb8fc9cf4103



`new_password` ISNULL 

##### (sure_password) 值为空(Nil) :id=a1d84912ae191b0221ef59f7e059c9217



`sure_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a2ab38c06678d498c97d88ff0ebf355ff



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致



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
state "默认字符串长度" as 04235b1dd6afdfc797cf28f8d9b31627 [[$./password#a04235b1dd6afdfc797cf28f8d9b31627 {"默认字符串长度"}]]


start --> 04235b1dd6afdfc797cf28f8d9b31627 
04235b1dd6afdfc797cf28f8d9b31627 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a04235b1dd6afdfc797cf28f8d9b31627


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







