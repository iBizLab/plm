## 通知子类(NOTIFYSUBTYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as dfa6515514080a4a0b610a669f8ed61f [[$./NotifySubType#adfa6515514080a4a0b610a669f8ed61f {"默认字符串长度"}]]


start --> dfa6515514080a4a0b610a669f8ed61f 
dfa6515514080a4a0b610a669f8ed61f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=adfa6515514080a4a0b610a669f8ed61f


*关键条件*


`NOTIFYSUBTYPE(通知子类)` 属性长度在区间 `(0 , 30]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[30]







