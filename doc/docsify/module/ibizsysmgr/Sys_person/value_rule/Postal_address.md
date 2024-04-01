## 地址(POSTAL_ADDRESS) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cb02d4e5684f76f123cdff1f2ff40c8a [[$./Postal_address#acb02d4e5684f76f123cdff1f2ff40c8a {"默认字符串长度"}]]


start --> cb02d4e5684f76f123cdff1f2ff40c8a 
cb02d4e5684f76f123cdff1f2ff40c8a --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acb02d4e5684f76f123cdff1f2ff40c8a


*关键条件*


`POSTAL_ADDRESS(地址)` 属性长度在区间 `(0 , 500]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[500]







