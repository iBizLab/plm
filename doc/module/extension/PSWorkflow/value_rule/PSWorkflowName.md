## 工作流名称(PSWORKFLOWNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as ef352149f85d4cf189e879621d9a7b18 [[$./PSWorkflowName#aef352149f85d4cf189e879621d9a7b18 {"默认字符串长度"}]]


start --> ef352149f85d4cf189e879621d9a7b18 
ef352149f85d4cf189e879621d9a7b18 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aef352149f85d4cf189e879621d9a7b18


*关键条件*


`PSWORKFLOWNAME(工作流名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







