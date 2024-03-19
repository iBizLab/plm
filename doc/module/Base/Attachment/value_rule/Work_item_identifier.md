## 工作项编号(WORK_ITEM_IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 1439120f0f688e0a27bd850833155461 [[$./Work_item_identifier#a1439120f0f688e0a27bd850833155461 {"默认字符串长度"}]]


start --> 1439120f0f688e0a27bd850833155461 
1439120f0f688e0a27bd850833155461 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a1439120f0f688e0a27bd850833155461


*关键条件*


`WORK_ITEM_IDENTIFIER(工作项编号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







