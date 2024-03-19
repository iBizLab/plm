## 长文本值(LONGSTRING_VALUE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 99f15062ca8276fa88fe505f7c1ed187 [[$./Longstring_value#a99f15062ca8276fa88fe505f7c1ed187 {"默认字符串长度"}]]


start --> 99f15062ca8276fa88fe505f7c1ed187 
99f15062ca8276fa88fe505f7c1ed187 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a99f15062ca8276fa88fe505f7c1ed187


*关键条件*


`LONGSTRING_VALUE(长文本值)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







