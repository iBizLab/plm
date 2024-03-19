## 系统消息队列(PSSYSMSGQUEUENAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as b81344c542b1f17ded85e2b931a1149a [[$./PSSysMsgQueueName#ab81344c542b1f17ded85e2b931a1149a {"默认字符串长度"}]]


start --> b81344c542b1f17ded85e2b931a1149a 
b81344c542b1f17ded85e2b931a1149a --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ab81344c542b1f17ded85e2b931a1149a


*关键条件*


`PSSYSMSGQUEUENAME(系统消息队列)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







