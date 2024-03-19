## 实体数据集(PSDEDSNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 124f0438717ea485b459790ed1b43e9b [[$./PSDEDSName#a124f0438717ea485b459790ed1b43e9b {"默认字符串长度"}]]


start --> 124f0438717ea485b459790ed1b43e9b 
124f0438717ea485b459790ed1b43e9b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a124f0438717ea485b459790ed1b43e9b


*关键条件*


`PSDEDSNAME(实体数据集)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







