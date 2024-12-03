## 获取共享空间标题 <!-- {docsify-ignore-all} -->

   获取共享空间顶部标题

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
state "开始" as Begin <<start>> [[$./get_shared_title#begin {"开始"}]]
state "将视图参数传递至请求上下文" as PREPAREPARAM1  [[$./get_shared_title#prepareparam1 {"将视图参数传递至请求上下文"}]]
state "获取共享空间信息" as DEACTION1  [[$./get_shared_title#deaction1 {"获取共享空间信息"}]]
state "将空间名称赋值给展示空间名称" as PREPAREPARAM2  [[$./get_shared_title#prepareparam2 {"将空间名称赋值给展示空间名称"}]]
state "结束" as END1 <<end>> [[$./get_shared_title#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1 : [[$./get_shared_title#deaction1-end1{展示空间名称不为空} 展示空间名称不为空]]
DEACTION1 --> PREPAREPARAM2 : [[$./get_shared_title#deaction1-prepareparam2{展示空间名称为空} 展示空间名称为空]]
PREPAREPARAM2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 将视图参数传递至请求上下文 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`当前视图参数[shared_space] ==> ctx[article_page]` 设置给  `ctx(导航上下文变量).article_page`

#### 获取共享空间信息 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [共享空间(SHARED_SPACE)](module/Wiki/shared_space.md) 行为 [Get](module/Wiki/shared_space#行为) ，行为参数为`result(结果)`

将执行结果返回给参数`result(结果)`

#### 将空间名称赋值给展示空间名称 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`result(结果).NAME(空间名称)` 设置给  `result(结果).SHOW_TITLE(共享展示标题)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `result(结果)`


### 连接条件说明
#### 展示空间名称不为空 :id=DEACTION1-END1

`result(结果).SHOW_TITLE(共享展示标题)` ISNOTNULL
#### 展示空间名称为空 :id=DEACTION1-PREPAREPARAM2

`Default(传入变量).SHOW_TITLE(共享展示标题)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[共享空间(SHARED_SPACE)](module/Wiki/shared_space.md)||
|导航上下文变量|ctx||||
|结果|result|数据对象|[共享空间(SHARED_SPACE)](module/Wiki/shared_space.md)||
