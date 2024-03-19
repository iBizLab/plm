## 测试类型(TEST_TYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 4c9c2094c10c2748f92878e81219d1dc [[$./Test_type#a4c9c2094c10c2748f92878e81219d1dc {"默认字符串长度"}]]


start --> 4c9c2094c10c2748f92878e81219d1dc 
4c9c2094c10c2748f92878e81219d1dc --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a4c9c2094c10c2748f92878e81219d1dc


*关键条件*


`TEST_TYPE(测试类型)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







