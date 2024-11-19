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
state "(NAME) 查询[check_name]记录数" as 4c09c4264158aa0f56f07faf77400523 [[$./name#a4c09c4264158aa0f56f07faf77400523 {"[查询计数] 查询[check_name]记录数"}]]


start --> 4c09c4264158aa0f56f07faf77400523 
4c09c4264158aa0f56f07faf77400523 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a4c09c4264158aa0f56f07faf77400523


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
state "默认字符串长度" as c73e9c8491381c6683a899a142c37fcf [[$./name#ac73e9c8491381c6683a899a142c37fcf {"默认字符串长度"}]]


start --> c73e9c8491381c6683a899a142c37fcf 
c73e9c8491381c6683a899a142c37fcf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ac73e9c8491381c6683a899a142c37fcf


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







