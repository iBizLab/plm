## 昵称别名(NICKNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 01f8181544f2cc979148b681006063c3 [[$./NickName#a01f8181544f2cc979148b681006063c3 {"默认字符串长度"}]]


start --> 01f8181544f2cc979148b681006063c3 
01f8181544f2cc979148b681006063c3 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a01f8181544f2cc979148b681006063c3


*关键条件*


`NICKNAME(昵称别名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







