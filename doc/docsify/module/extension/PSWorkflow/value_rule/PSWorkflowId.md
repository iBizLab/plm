## 工作流标识(PSWORKFLOWID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 5074dd3b8dd233830c0e818521cecb09 [[$./PSWorkflowId#a5074dd3b8dd233830c0e818521cecb09 {"默认字符串长度"}]]


start --> 5074dd3b8dd233830c0e818521cecb09 
5074dd3b8dd233830c0e818521cecb09 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a5074dd3b8dd233830c0e818521cecb09


*关键条件*


`PSWORKFLOWID(工作流标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







