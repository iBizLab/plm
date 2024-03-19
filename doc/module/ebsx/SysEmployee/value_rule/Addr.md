## 地址(ADDR) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 456d697e27d49d26343836d69e26d192 [[$./Addr#a456d697e27d49d26343836d69e26d192 {"默认字符串长度"}]]


start --> 456d697e27d49d26343836d69e26d192 
456d697e27d49d26343836d69e26d192 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a456d697e27d49d26343836d69e26d192


*关键条件*


`ADDR(地址)` 属性长度在区间 `(0 , 255]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[255]







