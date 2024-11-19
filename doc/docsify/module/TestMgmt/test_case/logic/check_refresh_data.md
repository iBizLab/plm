## 检查更新数据 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./check_refresh_data#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./check_refresh_data#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./check_refresh_data#debugparam1 {"调试逻辑参数"}]]
state "调试逻辑参数ctx" as DEBUGPARAM3  [[$./check_refresh_data#debugparam3 {"调试逻辑参数ctx"}]]
state "准备参数" as PREPAREPARAM1  [[$./check_refresh_data#prepareparam1 {"准备参数"}]]


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> DEBUGPARAM3
DEBUGPARAM3 --> PREPAREPARAM1
PREPAREPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 调试逻辑参数ctx :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`ctx(上下文)`的详细信息


#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|上下文|ctx||||
