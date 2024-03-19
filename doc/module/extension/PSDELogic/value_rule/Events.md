## 监控事件(EVENTS) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 39486cbc247923729d07f474b0e32baa [[$./Events#a39486cbc247923729d07f474b0e32baa {"默认字符串长度"}]]


start --> 39486cbc247923729d07f474b0e32baa 
39486cbc247923729d07f474b0e32baa --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a39486cbc247923729d07f474b0e32baa


*关键条件*


`EVENTS(监控事件)` 属性长度在区间 `(0 , 500]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[500]







