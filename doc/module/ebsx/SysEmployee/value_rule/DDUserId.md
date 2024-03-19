## 钉钉用户标识(DDUSERID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 5115175679d14a3ee81eb8e4e433ef59 [[$./DDUserId#a5115175679d14a3ee81eb8e4e433ef59 {"默认字符串长度"}]]


start --> 5115175679d14a3ee81eb8e4e433ef59 
5115175679d14a3ee81eb8e4e433ef59 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a5115175679d14a3ee81eb8e4e433ef59


*关键条件*


`DDUSERID(钉钉用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







