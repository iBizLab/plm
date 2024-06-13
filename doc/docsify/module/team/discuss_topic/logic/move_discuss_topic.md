## 移动话题 <!-- {docsify-ignore-all} -->

   高级设置中移动项目

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
state "开始" as Begin <<start>> [[$./move_discuss_topic#begin {"开始"}]]
state "绑定话题信息参数" as BINDPARAM1  [[$./move_discuss_topic#bindparam1 {"绑定话题信息参数"}]]
state "结束" as END1 <<end>> [[$./move_discuss_topic#end1 {"结束"}]]
state "循环处理话题" as LOOPSUBCALL1  [[$./move_discuss_topic#loopsubcall1 {"循环处理话题"}]] #green {
state "准备更新话题参数" as PREPAREPARAM1  [[$./move_discuss_topic#prepareparam1 {"准备更新话题参数"}]]
state "更新话题属性" as DEACTION1  [[$./move_discuss_topic#deaction1 {"更新话题属性"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定话题信息参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam`
#### 循环处理话题 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 准备更新话题参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).SCOPE_TYPE(所属)` 设置给  `update_obj(需要更新的话题变量).SCOPE_TYPE(所属)`
2. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `update_obj(需要更新的话题变量).ID(标识)`
3. 将`for_temp_obj(循环临时变量).SCOPE_ID(所属对象)` 设置给  `update_obj(需要更新的话题变量).SCOPE_ID(所属对象)`
4. 将`for_temp_obj(循环临时变量).VISIBILITY(可见范围)` 设置给  `update_obj(需要更新的话题变量).VISIBILITY(可见范围)`

#### 更新话题属性 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md) 行为 [Update](module/Team/discuss_topic#行为) ，行为参数为`update_obj(需要更新的话题变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md)||
|循环临时变量|for_temp_obj|数据对象|[话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md)||
|srfactionparam|srfactionparam|数据对象列表|[话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md)||
|需要更新的话题变量|update_obj|数据对象|[话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md)||
