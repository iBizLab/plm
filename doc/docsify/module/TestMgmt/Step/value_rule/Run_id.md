## 执行用例标识(RUN_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 54dbefd90e46fc5aa75dc1e36b06f90c [[$./Run_id#a54dbefd90e46fc5aa75dc1e36b06f90c {"默认字符串长度"}]]


start --> 54dbefd90e46fc5aa75dc1e36b06f90c 
54dbefd90e46fc5aa75dc1e36b06f90c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a54dbefd90e46fc5aa75dc1e36b06f90c


*关键条件*


`RUN_ID(执行用例标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







