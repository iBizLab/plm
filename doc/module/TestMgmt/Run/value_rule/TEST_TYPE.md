## 测试类型(TEST_TYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as eb0f8a50ef189c32eab9e0bf83d6948d [[$./TEST_TYPE#aeb0f8a50ef189c32eab9e0bf83d6948d {"默认字符串长度"}]]


start --> eb0f8a50ef189c32eab9e0bf83d6948d 
eb0f8a50ef189c32eab9e0bf83d6948d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aeb0f8a50ef189c32eab9e0bf83d6948d


*关键条件*


`TEST_TYPE(测试类型)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







