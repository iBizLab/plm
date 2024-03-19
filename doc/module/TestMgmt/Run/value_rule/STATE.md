## 评审状态(STATE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as ba4138a4572ed7e3bb4a96baf6d2b78a [[$./STATE#aba4138a4572ed7e3bb4a96baf6d2b78a {"默认字符串长度"}]]


start --> ba4138a4572ed7e3bb4a96baf6d2b78a 
ba4138a4572ed7e3bb4a96baf6d2b78a --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aba4138a4572ed7e3bb4a96baf6d2b78a


*关键条件*


`STATE(评审状态)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







