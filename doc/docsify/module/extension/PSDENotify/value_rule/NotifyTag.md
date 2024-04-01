## 通知标记(NOTIFYTAG) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 5b7c9e014f63853482d65558d60a6a03 [[$./NotifyTag#a5b7c9e014f63853482d65558d60a6a03 {"默认字符串长度"}]]


start --> 5b7c9e014f63853482d65558d60a6a03 
5b7c9e014f63853482d65558d60a6a03 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a5b7c9e014f63853482d65558d60a6a03


*关键条件*


`NOTIFYTAG(通知标记)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







