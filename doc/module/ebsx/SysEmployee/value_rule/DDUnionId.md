## 钉钉用户标识(DDUNIONID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 6f161a6a2cdb46772eecad7316fb5f4e [[$./DDUnionId#a6f161a6a2cdb46772eecad7316fb5f4e {"默认字符串长度"}]]


start --> 6f161a6a2cdb46772eecad7316fb5f4e 
6f161a6a2cdb46772eecad7316fb5f4e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a6f161a6a2cdb46772eecad7316fb5f4e


*关键条件*


`DDUNIONID(钉钉用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







