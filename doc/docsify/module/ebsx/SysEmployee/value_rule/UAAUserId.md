## UAA用户标识(UAAUSERID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as be6917ccb56162cbe738033d2765c07c [[$./UAAUserId#abe6917ccb56162cbe738033d2765c07c {"默认字符串长度"}]]


start --> be6917ccb56162cbe738033d2765c07c 
be6917ccb56162cbe738033d2765c07c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=abe6917ccb56162cbe738033d2765c07c


*关键条件*


`UAAUSERID(UAA用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







