## agent_flow_templ <!-- {docsify-ignore-all} -->

   智能体处理流(模板)

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as BEGIN_01 <<start>> [[$./agent_flow_templ#begin_01 {"开始"}]]




@enduml
```


### 处理步骤说明

#### 开始 :id=BEGIN_01<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default||||
|last_return|last_return|上一次调用返回|||
