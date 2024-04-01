## 企业微信用户标识(WXWORKUSERID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 21d05661e7ba0c921baaad53478499cd [[$./WXWorkUserId#a21d05661e7ba0c921baaad53478499cd {"默认字符串长度"}]]


start --> 21d05661e7ba0c921baaad53478499cd 
21d05661e7ba0c921baaad53478499cd --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a21d05661e7ba0c921baaad53478499cd


*关键条件*


`WXWORKUSERID(企业微信用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







