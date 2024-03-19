## 线程模式(THREADMODE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 12906e657d83fef4984e856f3afbad81 [[$./ThreadMode#a12906e657d83fef4984e856f3afbad81 {"默认字符串长度"}]]


start --> 12906e657d83fef4984e856f3afbad81 
12906e657d83fef4984e856f3afbad81 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a12906e657d83fef4984e856f3afbad81


*关键条件*


`THREADMODE(线程模式)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







