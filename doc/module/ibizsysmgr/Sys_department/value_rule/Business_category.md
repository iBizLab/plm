## 业务类别(BUSINESS_CATEGORY) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d5f9b8dc50819612e0591081b58cf521 [[$./Business_category#ad5f9b8dc50819612e0591081b58cf521 {"默认字符串长度"}]]


start --> d5f9b8dc50819612e0591081b58cf521 
d5f9b8dc50819612e0591081b58cf521 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad5f9b8dc50819612e0591081b58cf521


*关键条件*


`BUSINESS_CATEGORY(业务类别)` 属性长度在区间 `(0 , 2000]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[2000]







