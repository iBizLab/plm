## 预计时间(ESTIMATED_AT) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as fbc5e9dbb891ed5dc3bd7cce4d44f5f4 [[$./Estimated_at#afbc5e9dbb891ed5dc3bd7cce4d44f5f4 {"默认字符串长度"}]]


start --> fbc5e9dbb891ed5dc3bd7cce4d44f5f4 
fbc5e9dbb891ed5dc3bd7cce4d44f5f4 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=afbc5e9dbb891ed5dc3bd7cce4d44f5f4


*关键条件*


`ESTIMATED_AT(预计时间)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







