## 空间编号(SPACE_IDENTIFIER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 416cb2b191fdff938d2c01f19dc22f4d [[$./Space_identifier#a416cb2b191fdff938d2c01f19dc22f4d {"默认字符串长度"}]]


start --> 416cb2b191fdff938d2c01f19dc22f4d 
416cb2b191fdff938d2c01f19dc22f4d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a416cb2b191fdff938d2c01f19dc22f4d


*关键条件*


`SPACE_IDENTIFIER(空间编号)` 属性长度在区间 `(0 , 15]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[15]







