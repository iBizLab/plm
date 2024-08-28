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
state "(NAME) 查询[check_name]记录数" as 94bf9238a8c151acf0fd45b8e0c5a1dc [[$./name#a94bf9238a8c151acf0fd45b8e0c5a1dc {"[查询计数] 查询[check_name]记录数"}]]


start --> 94bf9238a8c151acf0fd45b8e0c5a1dc 
94bf9238a8c151acf0fd45b8e0c5a1dc --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a94bf9238a8c151acf0fd45b8e0c5a1dc


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
state "默认字符串长度" as ba761d4b540b6a2b1ada77764407b619 [[$./name#aba761d4b540b6a2b1ada77764407b619 {"默认字符串长度"}]]


start --> ba761d4b540b6a2b1ada77764407b619 
ba761d4b540b6a2b1ada77764407b619 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aba761d4b540b6a2b1ada77764407b619


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







