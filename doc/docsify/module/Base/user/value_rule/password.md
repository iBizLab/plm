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
state "[条件组]OR" as 6f353a00d2fe548cbcd112ead95dca27 [[$./password#a6f353a00d2fe548cbcd112ead95dca27 {"[条件组]OR"}]] {
state " " as 6f353a00d2fe548cbcd112ead95dca27_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as d4b3ee05f7852f45cbb6b7f3e27c88bb [[$./password#ad4b3ee05f7852f45cbb6b7f3e27c88bb {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 9863fca8ba684268a69260df9809ca92 [[$./password#a9863fca8ba684268a69260df9809ca92 {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as c923df9120a3f7c212c5542a947f5989 [[$./password#ac923df9120a3f7c212c5542a947f5989 {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 6f353a00d2fe548cbcd112ead95dca27_exit  <<exitPoint>>
}


start --> 6f353a00d2fe548cbcd112ead95dca27_entry 
6f353a00d2fe548cbcd112ead95dca27_entry --> d4b3ee05f7852f45cbb6b7f3e27c88bb 
d4b3ee05f7852f45cbb6b7f3e27c88bb --> 6f353a00d2fe548cbcd112ead95dca27_exit  : yes
d4b3ee05f7852f45cbb6b7f3e27c88bb -[#red]-> 9863fca8ba684268a69260df9809ca92  : no

9863fca8ba684268a69260df9809ca92 --> 6f353a00d2fe548cbcd112ead95dca27_exit  : yes
9863fca8ba684268a69260df9809ca92 -[#red]-> c923df9120a3f7c212c5542a947f5989  : no

c923df9120a3f7c212c5542a947f5989 --> 6f353a00d2fe548cbcd112ead95dca27_exit  : yes
c923df9120a3f7c212c5542a947f5989 -[#red]-> end  : no
6f353a00d2fe548cbcd112ead95dca27_exit --> end 


@enduml
```

#### 条件说明

##### (new_password) 值为空(Nil) :id=a9863fca8ba684268a69260df9809ca92



`new_password` ISNULL 

##### (sure_password) 值为空(Nil) :id=ad4b3ee05f7852f45cbb6b7f3e27c88bb



`sure_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=ac923df9120a3f7c212c5542a947f5989



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
state "默认字符串长度" as 6f22f638d472d6fda3ae24c85f045681 [[$./password#a6f22f638d472d6fda3ae24c85f045681 {"默认字符串长度"}]]


start --> 6f22f638d472d6fda3ae24c85f045681 
6f22f638d472d6fda3ae24c85f045681 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a6f22f638d472d6fda3ae24c85f045681


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







