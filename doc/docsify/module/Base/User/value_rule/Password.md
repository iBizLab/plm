## 密码(PASSWORD) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 54892a81179851fb059dabee1f7785f9 [[$./Password#a54892a81179851fb059dabee1f7785f9 {"默认字符串长度"}]]


start --> 54892a81179851fb059dabee1f7785f9 
54892a81179851fb059dabee1f7785f9 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a54892a81179851fb059dabee1f7785f9


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







