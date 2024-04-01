## 机构编号(ORGANIZATION_NUMBER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cbe704b9c94cf953297faa7121ef2af0 [[$./Organization_number#acbe704b9c94cf953297faa7121ef2af0 {"默认字符串长度"}]]


start --> cbe704b9c94cf953297faa7121ef2af0 
cbe704b9c94cf953297faa7121ef2af0 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acbe704b9c94cf953297faa7121ef2af0


*关键条件*


`ORGANIZATION_NUMBER(机构编号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







