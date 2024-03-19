## 系统消息模板(PSSYSMSGTEMPLNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as e5ee708849ac16c88bdfb87f2b6df1bf [[$./PSSysMsgTemplName#ae5ee708849ac16c88bdfb87f2b6df1bf {"默认字符串长度"}]]


start --> e5ee708849ac16c88bdfb87f2b6df1bf 
e5ee708849ac16c88bdfb87f2b6df1bf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ae5ee708849ac16c88bdfb87f2b6df1bf


*关键条件*


`PSSYSMSGTEMPLNAME(系统消息模板)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







