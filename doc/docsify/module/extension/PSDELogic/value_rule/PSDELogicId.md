## 实体处理逻辑标识(PSDELOGICID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 583f1042f08b745222e72ab383cb6ab4 [[$./PSDELogicId#a583f1042f08b745222e72ab383cb6ab4 {"默认字符串长度"}]]


start --> 583f1042f08b745222e72ab383cb6ab4 
583f1042f08b745222e72ab383cb6ab4 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a583f1042f08b745222e72ab383cb6ab4


*关键条件*


`PSDELOGICID(实体处理逻辑标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







