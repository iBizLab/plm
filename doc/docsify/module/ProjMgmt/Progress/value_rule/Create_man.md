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
state "默认字符串长度" as 08fd5be89891c1ffeed4fd8bbd472eba [[$./Create_man#a08fd5be89891c1ffeed4fd8bbd472eba {"默认字符串长度"}]]


start --> 08fd5be89891c1ffeed4fd8bbd472eba 
08fd5be89891c1ffeed4fd8bbd472eba --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a08fd5be89891c1ffeed4fd8bbd472eba


*关键条件*


`CREATE_MAN(建立人)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







