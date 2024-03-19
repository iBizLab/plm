## 描述(DESCRIPTION) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as f50ca66e2d852bd21cb9771e4281ba6d [[$./Description#af50ca66e2d852bd21cb9771e4281ba6d {"默认字符串长度"}]]


start --> f50ca66e2d852bd21cb9771e4281ba6d 
f50ca66e2d852bd21cb9771e4281ba6d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af50ca66e2d852bd21cb9771e4281ba6d


*关键条件*


`DESCRIPTION(描述)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







