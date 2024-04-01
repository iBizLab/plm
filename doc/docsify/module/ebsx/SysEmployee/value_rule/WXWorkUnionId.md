## 微信用户标识(WXWORKUNIONID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 19060a7f6dd3f016f1d29772d2a6f6aa [[$./WXWorkUnionId#a19060a7f6dd3f016f1d29772d2a6f6aa {"默认字符串长度"}]]


start --> 19060a7f6dd3f016f1d29772d2a6f6aa 
19060a7f6dd3f016f1d29772d2a6f6aa --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a19060a7f6dd3f016f1d29772d2a6f6aa


*关键条件*


`WXWORKUNIONID(微信用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







