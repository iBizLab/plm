## 需求来源(BACKLOG_FROM) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as f3b6f57fb576b26f27e7648e92bcb64b [[$./Backlog_from#af3b6f57fb576b26f27e7648e92bcb64b {"默认字符串长度"}]]


start --> f3b6f57fb576b26f27e7648e92bcb64b 
f3b6f57fb576b26f27e7648e92bcb64b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af3b6f57fb576b26f27e7648e92bcb64b


*关键条件*


`BACKLOG_FROM(需求来源)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







