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
state "默认字符串长度" as fff4300fbd9295147d26b3ed158ab01f [[$./User_id#afff4300fbd9295147d26b3ed158ab01f {"默认字符串长度"}]]


start --> fff4300fbd9295147d26b3ed158ab01f 
fff4300fbd9295147d26b3ed158ab01f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=afff4300fbd9295147d26b3ed158ab01f


*关键条件*


`USER_ID(登录名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







