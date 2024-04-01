## 发布标识(VERSION_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 9f77b26981b4c86549113aad981beb1c [[$./Version_id#a9f77b26981b4c86549113aad981beb1c {"默认字符串长度"}]]


start --> 9f77b26981b4c86549113aad981beb1c 
9f77b26981b4c86549113aad981beb1c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a9f77b26981b4c86549113aad981beb1c


*关键条件*


`VERSION_ID(发布标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







