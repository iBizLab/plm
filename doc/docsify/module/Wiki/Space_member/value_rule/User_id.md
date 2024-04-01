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
state "默认字符串长度" as d8d24850b254bbc30736aadaa747f9f0 [[$./User_id#ad8d24850b254bbc30736aadaa747f9f0 {"默认字符串长度"}]]


start --> d8d24850b254bbc30736aadaa747f9f0 
d8d24850b254bbc30736aadaa747f9f0 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad8d24850b254bbc30736aadaa747f9f0


*关键条件*


`USER_ID(登录名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







