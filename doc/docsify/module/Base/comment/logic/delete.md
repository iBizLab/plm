## 删除评论 <!-- {docsify-ignore-all} -->

   评论数据的删除，将评论内容重置为：该评论已删除

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
state "开始" as Begin <<start>> [[$./delete#begin {"开始"}]]
state "准备评论删除提示信息" as PREPAREPARAM1  [[$./delete#prepareparam1 {"准备评论删除提示信息"}]]
state "将评论内容修改为'已删除'" as DEACTION1  [[$./delete#deaction1 {"将评论内容修改为"已删除""}]]
state "结束" as END1 <<end>> [[$./delete#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备评论删除提示信息 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`<p><del>该评论已删除</del></p>` 设置给  `Default(传入变量).CONTENT(内容)`
2. 将`0` 设置给  `Default(传入变量).IS_TOP(是否置顶)`

#### 将评论内容修改为"已删除" :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 行为 [Update](module/Base/comment#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评论(COMMENT)](module/Base/comment.md)||
