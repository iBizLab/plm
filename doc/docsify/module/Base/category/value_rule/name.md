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
state "(NAME) 查询[check_name]记录数" as 7cbd6ce0665f25add43322248e2f12a2 [[$./name#a7cbd6ce0665f25add43322248e2f12a2 {"[查询计数] 查询[check_name]记录数"}]]


start --> 7cbd6ce0665f25add43322248e2f12a2 
7cbd6ce0665f25add43322248e2f12a2 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a7cbd6ce0665f25add43322248e2f12a2


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
state "默认字符串长度" as 8dfe9770b156729b5dc8d2430b7b6151 [[$./name#a8dfe9770b156729b5dc8d2430b7b6151 {"默认字符串长度"}]]


start --> 8dfe9770b156729b5dc8d2430b7b6151 
8dfe9770b156729b5dc8d2430b7b6151 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a8dfe9770b156729b5dc8d2430b7b6151


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







