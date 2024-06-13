## 更新发布阶段后附加逻辑 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./after_update#begin {"开始"}]]
state "批量更新各发布阶段" as RAWSQLCALL1  [[$./after_update#rawsqlcall1 {"批量更新各发布阶段"}]]
state "结束" as END1 <<end>> [[$./after_update#end1 {"结束"}]]


Begin --> RAWSQLCALL1
RAWSQLCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 批量更新各发布阶段 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
update `stage` set `type` = ?, `color` = ?, `name` = ? where pid =?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).TYPE(阶段类型)`
2. `Default(传入变量).COLOR(颜色)`
3. `Default(传入变量).NAME(名称)`
4. `Default(传入变量).ID(标识)`


#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[发布阶段(STAGE)](module/ProjMgmt/stage.md)||
