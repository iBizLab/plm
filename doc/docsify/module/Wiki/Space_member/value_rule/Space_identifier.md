## 空间编号(SPACE_IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as fc3582a20508007bfa6b21a600dd415b [[$./Space_identifier#afc3582a20508007bfa6b21a600dd415b {"默认字符串长度"}]]


start --> fc3582a20508007bfa6b21a600dd415b 
fc3582a20508007bfa6b21a600dd415b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=afc3582a20508007bfa6b21a600dd415b


*关键条件*


`SPACE_IDENTIFIER(空间编号)` 属性长度在区间 `(0 , 15]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[15]







