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
state "(NAME) 查询[check_name]记录数" as 285726a3af6d1b1fd60e7f67a559ca17 [[$./name#a285726a3af6d1b1fd60e7f67a559ca17 {"[查询计数] 查询[check_name]记录数"}]]


start --> 285726a3af6d1b1fd60e7f67a559ca17 
285726a3af6d1b1fd60e7f67a559ca17 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a285726a3af6d1b1fd60e7f67a559ca17


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
state "默认字符串长度" as a7c86f1f6e936b227938746a4416de5c [[$./name#aa7c86f1f6e936b227938746a4416de5c {"默认字符串长度"}]]


start --> a7c86f1f6e936b227938746a4416de5c 
a7c86f1f6e936b227938746a4416de5c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa7c86f1f6e936b227938746a4416de5c


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







