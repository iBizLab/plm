## 应用标识(APPID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 4e0506d136f7c6dcb10bbc34cee81f48 [[$./AppId#a4e0506d136f7c6dcb10bbc34cee81f48 {"默认字符串长度"}]]


start --> 4e0506d136f7c6dcb10bbc34cee81f48 
4e0506d136f7c6dcb10bbc34cee81f48 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a4e0506d136f7c6dcb10bbc34cee81f48


*关键条件*


`APPID(应用标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







