## 获取执行结果数据（废弃） <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./get_run_history_list#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./get_run_history_list#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./get_run_history_list#debugparam1 {"调试逻辑参数"}]]


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `run_history_page(执行结果查询结果)`

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|run|run||||
|执行结果查询结果|run_history_page|数据对象列表|[执行结果(RUN_HISTORY)](module/TestMgmt/Run_history.md)||
