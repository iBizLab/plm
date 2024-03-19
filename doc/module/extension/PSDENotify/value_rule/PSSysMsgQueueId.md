## 系统消息队列(PSSYSMSGQUEUEID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 43205e4880858400c09059dd97dc45ef [[$./PSSysMsgQueueId#a43205e4880858400c09059dd97dc45ef {"默认字符串长度"}]]


start --> 43205e4880858400c09059dd97dc45ef 
43205e4880858400c09059dd97dc45ef --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a43205e4880858400c09059dd97dc45ef


*关键条件*


`PSSYSMSGQUEUEID(系统消息队列)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







