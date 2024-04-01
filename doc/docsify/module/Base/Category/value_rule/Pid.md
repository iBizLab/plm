## 父标识(PID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 53607cbafeb8d277311c77f0ec3f518c [[$./Pid#a53607cbafeb8d277311c77f0ec3f518c {"默认字符串长度"}]]


start --> 53607cbafeb8d277311c77f0ec3f518c 
53607cbafeb8d277311c77f0ec3f518c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a53607cbafeb8d277311c77f0ec3f518c


*关键条件*


`PID(父标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







