## 测试库名称(NAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d596812ca67095b936b24ac28d5a567b [[$./Name#ad596812ca67095b936b24ac28d5a567b {"默认字符串长度"}]]


start --> d596812ca67095b936b24ac28d5a567b 
d596812ca67095b936b24ac28d5a567b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad596812ca67095b936b24ac28d5a567b


*关键条件*


`NAME(测试库名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







