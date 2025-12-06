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
state "[条件组]OR" as 1adcdab50b6ac10dab11148b0789ede4 [[$./password#a1adcdab50b6ac10dab11148b0789ede4 {"[条件组]OR"}]] {
state " " as 1adcdab50b6ac10dab11148b0789ede4_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 5e1d6b9c34fb98545d22e14c3cbe786d [[$./password#a5e1d6b9c34fb98545d22e14c3cbe786d {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 1443126286d23d0c35c84d5651f8115f [[$./password#a1443126286d23d0c35c84d5651f8115f {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 1ae8d0d28e2cdbfa4b86e1f8f14629d1 [[$./password#a1ae8d0d28e2cdbfa4b86e1f8f14629d1 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 1adcdab50b6ac10dab11148b0789ede4_exit  <<exitPoint>>
}


start --> 1adcdab50b6ac10dab11148b0789ede4_entry 
1adcdab50b6ac10dab11148b0789ede4_entry --> 5e1d6b9c34fb98545d22e14c3cbe786d 
5e1d6b9c34fb98545d22e14c3cbe786d --> 1adcdab50b6ac10dab11148b0789ede4_exit  : yes
5e1d6b9c34fb98545d22e14c3cbe786d -[#red]-> 1443126286d23d0c35c84d5651f8115f  : no

1443126286d23d0c35c84d5651f8115f --> 1adcdab50b6ac10dab11148b0789ede4_exit  : yes
1443126286d23d0c35c84d5651f8115f -[#red]-> 1ae8d0d28e2cdbfa4b86e1f8f14629d1  : no

1ae8d0d28e2cdbfa4b86e1f8f14629d1 --> 1adcdab50b6ac10dab11148b0789ede4_exit  : yes
1ae8d0d28e2cdbfa4b86e1f8f14629d1 -[#red]-> end  : no
1adcdab50b6ac10dab11148b0789ede4_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 值为空(Nil) :id=a5e1d6b9c34fb98545d22e14c3cbe786d



`sure_password` ISNULL 

##### (new_password) 值为空(Nil) :id=a1443126286d23d0c35c84d5651f8115f



`new_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a1ae8d0d28e2cdbfa4b86e1f8f14629d1



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
state "默认字符串长度" as 96beccd523e80410b9d91355dd7f9208 [[$./password#a96beccd523e80410b9d91355dd7f9208 {"默认字符串长度"}]]


start --> 96beccd523e80410b9d91355dd7f9208 
96beccd523e80410b9d91355dd7f9208 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a96beccd523e80410b9d91355dd7f9208


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







