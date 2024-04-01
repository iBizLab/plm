## 文件夹标识(IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as f921ee564f01ad45ac95709a87c20cf0 [[$./Identifier#af921ee564f01ad45ac95709a87c20cf0 {"默认字符串长度"}]]


start --> f921ee564f01ad45ac95709a87c20cf0 
f921ee564f01ad45ac95709a87c20cf0 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af921ee564f01ad45ac95709a87c20cf0


*关键条件*


`IDENTIFIER(文件夹标识)` 属性长度在区间 `(0 , 15]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[15]







