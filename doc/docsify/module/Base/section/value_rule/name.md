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
state "(NAME) 查询[check_name]记录数" as 88a0c1c1b248bdd5b8d32eae8fdee044 [[$./name#a88a0c1c1b248bdd5b8d32eae8fdee044 {"[查询计数] 查询[check_name]记录数"}]]


start --> 88a0c1c1b248bdd5b8d32eae8fdee044 
88a0c1c1b248bdd5b8d32eae8fdee044 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a88a0c1c1b248bdd5b8d32eae8fdee044


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
state "默认字符串长度" as f23dbeb40e64495c4f9537170b847388 [[$./name#af23dbeb40e64495c4f9537170b847388 {"默认字符串长度"}]]


start --> f23dbeb40e64495c4f9537170b847388 
f23dbeb40e64495c4f9537170b847388 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af23dbeb40e64495c4f9537170b847388


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







