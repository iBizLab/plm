## 空间标识(IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a4fa519034e2a8909cd25c6f6f8d20e2 [[$./Identifier#aa4fa519034e2a8909cd25c6f6f8d20e2 {"默认字符串长度"}]]


start --> a4fa519034e2a8909cd25c6f6f8d20e2 
a4fa519034e2a8909cd25c6f6f8d20e2 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa4fa519034e2a8909cd25c6f6f8d20e2


*关键条件*


`IDENTIFIER(空间标识)` 属性长度在区间 `(0 , 15]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[15]







