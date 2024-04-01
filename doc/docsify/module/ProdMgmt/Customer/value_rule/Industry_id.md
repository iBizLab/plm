## 行业(INDUSTRY_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a2327ea118e5cb1f2e3dd087e260ff8d [[$./Industry_id#aa2327ea118e5cb1f2e3dd087e260ff8d {"默认字符串长度"}]]


start --> a2327ea118e5cb1f2e3dd087e260ff8d 
a2327ea118e5cb1f2e3dd087e260ff8d --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa2327ea118e5cb1f2e3dd087e260ff8d


*关键条件*


`INDUSTRY_ID(行业)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







