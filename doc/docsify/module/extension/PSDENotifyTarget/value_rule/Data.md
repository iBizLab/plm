## 目标数据(DATA) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as f07a51b534f353cd909b605199429ba3 [[$./Data#af07a51b534f353cd909b605199429ba3 {"默认字符串长度"}]]


start --> f07a51b534f353cd909b605199429ba3 
f07a51b534f353cd909b605199429ba3 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af07a51b534f353cd909b605199429ba3


*关键条件*


`DATA(目标数据)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







