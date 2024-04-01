## 登录名(USER_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as e2cb3e5e36cbe0afb9ce6faa48274922 [[$./User_id#ae2cb3e5e36cbe0afb9ce6faa48274922 {"默认字符串长度"}]]


start --> e2cb3e5e36cbe0afb9ce6faa48274922 
e2cb3e5e36cbe0afb9ce6faa48274922 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ae2cb3e5e36cbe0afb9ce6faa48274922


*关键条件*


`USER_ID(登录名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







