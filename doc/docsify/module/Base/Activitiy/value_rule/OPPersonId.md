## 操作人(OPPERSONID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 1d78364a5b3d7b736273dc916d299d5e [[$./OPPersonId#a1d78364a5b3d7b736273dc916d299d5e {"默认字符串长度"}]]


start --> 1d78364a5b3d7b736273dc916d299d5e 
1d78364a5b3d7b736273dc916d299d5e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a1d78364a5b3d7b736273dc916d299d5e


*关键条件*


`OPPERSONID(操作人)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







