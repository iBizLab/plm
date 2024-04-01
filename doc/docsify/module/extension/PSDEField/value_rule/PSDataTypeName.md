## 数据类型(PSDATATYPENAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 8923ac11af77fb2fab87f7f774949d41 [[$./PSDataTypeName#a8923ac11af77fb2fab87f7f774949d41 {"默认字符串长度"}]]


start --> 8923ac11af77fb2fab87f7f774949d41 
8923ac11af77fb2fab87f7f774949d41 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a8923ac11af77fb2fab87f7f774949d41


*关键条件*


`PSDATATYPENAME(数据类型)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







