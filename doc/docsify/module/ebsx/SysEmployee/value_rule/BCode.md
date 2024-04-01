## 业务编码(BCODE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cd8320ec9e33868726d05a5b865e5509 [[$./BCode#acd8320ec9e33868726d05a5b865e5509 {"默认字符串长度"}]]


start --> cd8320ec9e33868726d05a5b865e5509 
cd8320ec9e33868726d05a5b865e5509 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acd8320ec9e33868726d05a5b865e5509


*关键条件*


`BCODE(业务编码)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







