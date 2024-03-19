## 操作人(OPPERSONNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a9291a7d352a99cb4f70d62c831dacda [[$./OPPersonName#aa9291a7d352a99cb4f70d62c831dacda {"默认字符串长度"}]]


start --> a9291a7d352a99cb4f70d62c831dacda 
a9291a7d352a99cb4f70d62c831dacda --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa9291a7d352a99cb4f70d62c831dacda


*关键条件*


`OPPERSONNAME(操作人)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







