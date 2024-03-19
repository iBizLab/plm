## 模型(MODEL) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as acad6693b3c018168a4095506a40f341 [[$./Model#aacad6693b3c018168a4095506a40f341 {"默认字符串长度"}]]


start --> acad6693b3c018168a4095506a40f341 
acad6693b3c018168a4095506a40f341 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aacad6693b3c018168a4095506a40f341


*关键条件*


`MODEL(模型)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







