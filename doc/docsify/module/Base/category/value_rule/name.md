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
state "(NAME) 查询[check_name]记录数" as fbe5e68d4bd991c246902f09849d3ac2 [[$./name#afbe5e68d4bd991c246902f09849d3ac2 {"[查询计数] 查询[check_name]记录数"}]]


start --> fbe5e68d4bd991c246902f09849d3ac2 
fbe5e68d4bd991c246902f09849d3ac2 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=afbe5e68d4bd991c246902f09849d3ac2


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
state "默认字符串长度" as 686af96e032347c46307e10cbb28e77e [[$./name#a686af96e032347c46307e10cbb28e77e {"默认字符串长度"}]]


start --> 686af96e032347c46307e10cbb28e77e 
686af96e032347c46307e10cbb28e77e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a686af96e032347c46307e10cbb28e77e


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







