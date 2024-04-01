## 批量更新最近访问父名称 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./recent_parent_name#begin {"开始"}]]
state "直接SQL调用" as RAWSQLCALL1  [[$./recent_parent_name#rawsqlcall1 {"直接SQL调用"}]]


Begin --> RAWSQLCALL1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 直接SQL调用 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_NAME=? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).NAME(项目名称)`
2. `Default(传入变量).ID(标识)`




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目(PROJECT)](module/ProjMgmt/Project.md)||