## 用户标识(USERTAG) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 6dc759ca23fe46bf8472f456bb21f6f8 [[$./UserTag#a6dc759ca23fe46bf8472f456bb21f6f8 {"默认字符串长度"}]]


start --> 6dc759ca23fe46bf8472f456bb21f6f8 
6dc759ca23fe46bf8472f456bb21f6f8 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a6dc759ca23fe46bf8472f456bb21f6f8


*关键条件*


`USERTAG(用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







