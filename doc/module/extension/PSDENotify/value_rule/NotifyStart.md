## 提前通知间隔(NOTIFYSTART) <!-- {docsify-ignore-all} -->

   

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
state "默认值范围" as 8ba280129b406c316dcbf29463a462b4 [[$./NotifyStart#a8ba280129b406c316dcbf29463a462b4 {"默认值范围"}]]


start --> 8ba280129b406c316dcbf29463a462b4 
8ba280129b406c316dcbf29463a462b4 --> end 


@enduml
```

#### 条件说明

##### 默认值范围 :id=a8ba280129b406c316dcbf29463a462b4


*关键条件*


`NOTIFYSTART(提前通知间隔)` 值在区间 `
[-1440.0 , 1440.0]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 数值必须大于等于[-1440]且小于等于[1440]







