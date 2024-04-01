## 测试库标识(IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d4023770172f75a4e4fa28008a98e2ea [[$./Identifier#ad4023770172f75a4e4fa28008a98e2ea {"默认字符串长度"}]]


start --> d4023770172f75a4e4fa28008a98e2ea 
d4023770172f75a4e4fa28008a98e2ea --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad4023770172f75a4e4fa28008a98e2ea


*关键条件*


`IDENTIFIER(测试库标识)` 属性长度在区间 `(0 , 15]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[15]







