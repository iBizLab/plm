## 所属数据标识(OWNER_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 60d79c6b611dfc61c87e523b178472bf [[$./Owner_id#a60d79c6b611dfc61c87e523b178472bf {"默认字符串长度"}]]


start --> 60d79c6b611dfc61c87e523b178472bf 
60d79c6b611dfc61c87e523b178472bf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a60d79c6b611dfc61c87e523b178472bf


*关键条件*


`OWNER_ID(所属数据标识)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







