## 主状态值代理标识(MSVALUEPROXYID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 19405f9f43fa51b59549580635086a6c [[$./MSValueProxyId#a19405f9f43fa51b59549580635086a6c {"默认字符串长度"}]]


start --> 19405f9f43fa51b59549580635086a6c 
19405f9f43fa51b59549580635086a6c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a19405f9f43fa51b59549580635086a6c


*关键条件*


`MSVALUEPROXYID(主状态值代理标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







