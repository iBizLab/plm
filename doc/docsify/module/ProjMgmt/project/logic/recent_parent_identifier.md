## 批量更新最近访问父标识 <!-- {docsify-ignore-all} -->

   当项目标识变更时，触发此逻辑，批量对最近访问的父标识进行更新

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
state "开始" as Begin <<start>> [[$./recent_parent_identifier#begin {"开始"}]]
state "批量更新最近访问父级标识" as RAWSQLCALL1  [[$./recent_parent_identifier#rawsqlcall1 {"批量更新最近访问父级标识"}]]


Begin --> RAWSQLCALL1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 批量更新最近访问父级标识 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_IDENTIFIER = ? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(项目标识)`
2. `Default(传入变量).ID(标识)`




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
