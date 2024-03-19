## 编号(IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as b2a39725d41d7e661abafd8de8e51acf [[$./Identifier#ab2a39725d41d7e661abafd8de8e51acf {"默认字符串长度"}]]


start --> b2a39725d41d7e661abafd8de8e51acf 
b2a39725d41d7e661abafd8de8e51acf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ab2a39725d41d7e661abafd8de8e51acf


*关键条件*


`IDENTIFIER(编号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







