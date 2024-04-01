## 项目发布标识(VERSION_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as ec8d2a43eef654f21345a4fae5543881 [[$./Version_id#aec8d2a43eef654f21345a4fae5543881 {"默认字符串长度"}]]


start --> ec8d2a43eef654f21345a4fae5543881 
ec8d2a43eef654f21345a4fae5543881 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aec8d2a43eef654f21345a4fae5543881


*关键条件*


`VERSION_ID(项目发布标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







