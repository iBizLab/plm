## 监控事件集(EVENTS) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 8bd1d40653f995e997b5176d6ce40880 [[$./Events#a8bd1d40653f995e997b5176d6ce40880 {"默认字符串长度"}]]


start --> 8bd1d40653f995e997b5176d6ce40880 
8bd1d40653f995e997b5176d6ce40880 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a8bd1d40653f995e997b5176d6ce40880


*关键条件*


`EVENTS(监控事件集)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







