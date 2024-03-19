## 建立人(CREATE_MAN) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d2f195015c1122eb9c37a8fa93fa252c [[$./Create_man#ad2f195015c1122eb9c37a8fa93fa252c {"默认字符串长度"}]]


start --> d2f195015c1122eb9c37a8fa93fa252c 
d2f195015c1122eb9c37a8fa93fa252c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad2f195015c1122eb9c37a8fa93fa252c


*关键条件*


`CREATE_MAN(建立人)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







