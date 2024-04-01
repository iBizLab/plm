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
state "默认字符串长度" as 396fe74dec7c5925d3e82e6c63633208 [[$./User_id#a396fe74dec7c5925d3e82e6c63633208 {"默认字符串长度"}]]


start --> 396fe74dec7c5925d3e82e6c63633208 
396fe74dec7c5925d3e82e6c63633208 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a396fe74dec7c5925d3e82e6c63633208


*关键条件*


`USER_ID(登录名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







