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
state "(NAME) 查询[check_name]记录数" as e3ba11dcb5414327c33c3dbd8798c313 [[$./name#ae3ba11dcb5414327c33c3dbd8798c313 {"[查询计数] 查询[check_name]记录数"}]]


start --> e3ba11dcb5414327c33c3dbd8798c313 
e3ba11dcb5414327c33c3dbd8798c313 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=ae3ba11dcb5414327c33c3dbd8798c313


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
state "默认字符串长度" as b805394cc4be9b823c5d7ae5814a9c53 [[$./name#ab805394cc4be9b823c5d7ae5814a9c53 {"默认字符串长度"}]]


start --> b805394cc4be9b823c5d7ae5814a9c53 
b805394cc4be9b823c5d7ae5814a9c53 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ab805394cc4be9b823c5d7ae5814a9c53


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







