## 产品标识(PRODUCT_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as c09778a609134494cbe41408213468d6 [[$./Product_id#ac09778a609134494cbe41408213468d6 {"默认字符串长度"}]]


start --> c09778a609134494cbe41408213468d6 
c09778a609134494cbe41408213468d6 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ac09778a609134494cbe41408213468d6


*关键条件*


`PRODUCT_ID(产品标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







