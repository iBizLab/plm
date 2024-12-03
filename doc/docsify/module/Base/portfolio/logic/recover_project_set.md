## 恢复项目集 <!-- {docsify-ignore-all} -->

   恢复已删除状态项目集数据，修改项目集的是否删除属性值

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
state "开始" as Begin <<start>> [[$./recover_project_set#begin {"开始"}]]
state "设置项目集恢复状态" as PREPAREPARAM1  [[$./recover_project_set#prepareparam1 {"设置项目集恢复状态"}]]
state "更新项目集恢复状态" as DEACTION1  [[$./recover_project_set#deaction1 {"更新项目集恢复状态"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置项目集恢复状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`0` 设置给  `Default(传入变量).IS_DELETED(是否已删除)`

#### 更新项目集恢复状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [文件夹(PORTFOLIO)](module/Base/portfolio.md) 行为 [Update](module/Base/portfolio#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[文件夹(PORTFOLIO)](module/Base/portfolio.md)||
