## 打开 <!-- {docsify-ignore-all} -->

   变更讨论的当前状态为进行中

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
state "开始" as Begin <<start>> [[$./open#begin {"开始"}]]
state "设置为进行中状态" as PREPAREPARAM1  [[$./open#prepareparam1 {"设置为进行中状态"}]]
state "执行更新" as DEACTION1  [[$./open#deaction1 {"执行更新"}]]
state "结束" as END1 <<end>> [[$./open#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置为进行中状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `update_obj(更新对象).ID(标识)`
2. 将`1` 设置给  `update_obj(更新对象).STATUS(状态)`

#### 执行更新 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论(DISCUSS_POST)](module/Team/discuss_post.md) 行为 [Update](module/Team/discuss_post#行为) ，行为参数为`update_obj(更新对象)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[讨论(DISCUSS_POST)](module/Team/discuss_post.md)||
|更新对象|update_obj|数据对象|[讨论(DISCUSS_POST)](module/Team/discuss_post.md)||
