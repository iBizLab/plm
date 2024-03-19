## 角色(ROLE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a3bdbf4ed65cc0ab70064b4441141436 [[$./Role_id#aa3bdbf4ed65cc0ab70064b4441141436 {"默认字符串长度"}]]


start --> a3bdbf4ed65cc0ab70064b4441141436 
a3bdbf4ed65cc0ab70064b4441141436 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa3bdbf4ed65cc0ab70064b4441141436


*关键条件*


`ROLE_ID(角色)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







