## 电子邮箱(MAIL) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 2f0298d1cf76bb144a13efc4ad54c276 [[$./Mail#a2f0298d1cf76bb144a13efc4ad54c276 {"默认字符串长度"}]]


start --> 2f0298d1cf76bb144a13efc4ad54c276 
2f0298d1cf76bb144a13efc4ad54c276 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a2f0298d1cf76bb144a13efc4ad54c276


*关键条件*


`MAIL(电子邮箱)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







