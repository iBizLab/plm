## 实体(PSDENAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as e8582620fe8748ae1f6e5472df829147 [[$./PSDEName#ae8582620fe8748ae1f6e5472df829147 {"默认字符串长度"}]]


start --> e8582620fe8748ae1f6e5472df829147 
e8582620fe8748ae1f6e5472df829147 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ae8582620fe8748ae1f6e5472df829147


*关键条件*


`PSDENAME(实体)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







