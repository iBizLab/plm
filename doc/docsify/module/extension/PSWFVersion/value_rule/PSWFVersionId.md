## 工作流版本标识(PSWFVERSIONID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a23c054f54dba5ac9d372f7afc55764d [[$./PSWFVersionId#aa23c054f54dba5ac9d372f7afc55764d {"默认字符串长度"}]]


start --> a23c054f54dba5ac9d372f7afc55764d 
a23c054f54dba5ac9d372f7afc55764d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa23c054f54dba5ac9d372f7afc55764d


*关键条件*


`PSWFVERSIONID(工作流版本标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







