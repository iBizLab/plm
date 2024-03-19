## 建立人(CREATE_MAN) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as e2b41ea2b04d4525f3dcdebc86648fdf [[$./Create_man#ae2b41ea2b04d4525f3dcdebc86648fdf {"默认字符串长度"}]]


start --> e2b41ea2b04d4525f3dcdebc86648fdf 
e2b41ea2b04d4525f3dcdebc86648fdf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ae2b41ea2b04d4525f3dcdebc86648fdf


*关键条件*


`CREATE_MAN(建立人)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







