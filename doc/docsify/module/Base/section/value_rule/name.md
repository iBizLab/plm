## 名称(NAME) <!-- {docsify-ignore-all} -->

   

### 名称重复判断 :id=CHECK_NAME

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
state "(NAME) 查询[check_name]记录数" as 4ae38f1071c371cb96239faeb75dbadc [[$./name#a4ae38f1071c371cb96239faeb75dbadc {"[查询计数] 查询[check_name]记录数"}]]


start --> 4ae38f1071c371cb96239faeb75dbadc 
4ae38f1071c371cb96239faeb75dbadc --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a4ae38f1071c371cb96239faeb75dbadc


*关键条件*


查询[检查名称是否重复(check_name)]()结果`result` 在区间 `(-∞ , 1)` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 名称已存在



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
state "默认字符串长度" as efa69ef95a2c7841d5b06a4f7a75047d [[$./name#aefa69ef95a2c7841d5b06a4f7a75047d {"默认字符串长度"}]]


start --> efa69ef95a2c7841d5b06a4f7a75047d 
efa69ef95a2c7841d5b06a4f7a75047d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aefa69ef95a2c7841d5b06a4f7a75047d


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







