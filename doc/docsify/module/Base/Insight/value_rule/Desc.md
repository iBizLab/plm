## 描述(DESC) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 8765ab9e10cde424663c6d02a9cc068f [[$./Desc#a8765ab9e10cde424663c6d02a9cc068f {"默认字符串长度"}]]


start --> 8765ab9e10cde424663c6d02a9cc068f 
8765ab9e10cde424663c6d02a9cc068f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a8765ab9e10cde424663c6d02a9cc068f


*关键条件*


`DESC(描述)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







