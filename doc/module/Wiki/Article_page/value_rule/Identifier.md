## 编号(IDENTIFIER) <!-- {docsify-ignore-all} -->

   

### 值规则 :id=DEFValueRule

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>



@enduml
```

#### 条件说明


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
state "默认字符串长度" as 554afdd79917376d2fb3e298d62de11b [[$./Identifier#a554afdd79917376d2fb3e298d62de11b {"默认字符串长度"}]]


start --> 554afdd79917376d2fb3e298d62de11b 
554afdd79917376d2fb3e298d62de11b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a554afdd79917376d2fb3e298d62de11b


*关键条件*


`IDENTIFIER(编号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







