## 主部门(MDEPTID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as fcd881567b7a4861c4031c603ef6f45c [[$./MDeptId#afcd881567b7a4861c4031c603ef6f45c {"默认字符串长度"}]]


start --> fcd881567b7a4861c4031c603ef6f45c 
fcd881567b7a4861c4031c603ef6f45c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=afcd881567b7a4861c4031c603ef6f45c


*关键条件*


`MDEPTID(主部门)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







