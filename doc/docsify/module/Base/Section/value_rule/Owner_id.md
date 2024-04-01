## 所属数据标识(OWNER_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as dc5f57230e1d12a04b0b1bbfc1a9595c [[$./Owner_id#adc5f57230e1d12a04b0b1bbfc1a9595c {"默认字符串长度"}]]


start --> dc5f57230e1d12a04b0b1bbfc1a9595c 
dc5f57230e1d12a04b0b1bbfc1a9595c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=adc5f57230e1d12a04b0b1bbfc1a9595c


*关键条件*


`OWNER_ID(所属数据标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







