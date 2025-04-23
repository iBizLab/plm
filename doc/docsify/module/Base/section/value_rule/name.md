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
state "(NAME) 查询[check_name]记录数" as 3ee809b70efd70fc8909e7f33189c505 [[$./name#a3ee809b70efd70fc8909e7f33189c505 {"[查询计数] 查询[check_name]记录数"}]]


start --> 3ee809b70efd70fc8909e7f33189c505 
3ee809b70efd70fc8909e7f33189c505 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a3ee809b70efd70fc8909e7f33189c505


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
state "默认字符串长度" as 9772685287473c877f5acbd6f10387aa [[$./name#a9772685287473c877f5acbd6f10387aa {"默认字符串长度"}]]


start --> 9772685287473c877f5acbd6f10387aa 
9772685287473c877f5acbd6f10387aa --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a9772685287473c877f5acbd6f10387aa


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







