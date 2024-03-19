## 岗位标识(POSTID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 1ed1a41aea9c593ea7d9393b19a35e9c [[$./PostId#a1ed1a41aea9c593ea7d9393b19a35e9c {"默认字符串长度"}]]


start --> 1ed1a41aea9c593ea7d9393b19a35e9c 
1ed1a41aea9c593ea7d9393b19a35e9c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a1ed1a41aea9c593ea7d9393b19a35e9c


*关键条件*


`POSTID(岗位标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







