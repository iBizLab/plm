## 姓名(PERSONNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 7b39b980f688b5d852aaf259db7554be [[$./PersonName#a7b39b980f688b5d852aaf259db7554be {"默认字符串长度"}]]


start --> 7b39b980f688b5d852aaf259db7554be 
7b39b980f688b5d852aaf259db7554be --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a7b39b980f688b5d852aaf259db7554be


*关键条件*


`PERSONNAME(姓名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







