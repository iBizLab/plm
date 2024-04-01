## 扩展标记(EXTENSION_TAG) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as f28f6c007424a7d8dd7663c31817148d [[$./Extension_tag#af28f6c007424a7d8dd7663c31817148d {"默认字符串长度"}]]


start --> f28f6c007424a7d8dd7663c31817148d 
f28f6c007424a7d8dd7663c31817148d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af28f6c007424a7d8dd7663c31817148d


*关键条件*


`EXTENSION_TAG(扩展标记)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







