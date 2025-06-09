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
state "(NAME) 查询[check_name]记录数" as b4f0422626f24534d92ff73eca5b46ab [[$./name#ab4f0422626f24534d92ff73eca5b46ab {"[查询计数] 查询[check_name]记录数"}]]


start --> b4f0422626f24534d92ff73eca5b46ab 
b4f0422626f24534d92ff73eca5b46ab --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=ab4f0422626f24534d92ff73eca5b46ab


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
state "默认字符串长度" as ba901c01e64e62cc29277bac72dfd13e [[$./name#aba901c01e64e62cc29277bac72dfd13e {"默认字符串长度"}]]


start --> ba901c01e64e62cc29277bac72dfd13e 
ba901c01e64e62cc29277bac72dfd13e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aba901c01e64e62cc29277bac72dfd13e


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







