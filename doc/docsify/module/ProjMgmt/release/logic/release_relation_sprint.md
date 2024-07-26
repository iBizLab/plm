## 发布关联迭代 <!-- {docsify-ignore-all} -->

   发布关联迭代生成关联数据

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
state "开始" as Begin <<start>> [[$./release_relation_sprint#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./release_relation_sprint#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./release_relation_sprint#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./release_relation_sprint#loopsubcall1 {"循环子调用"}]] #green {
state "重置反向关系参数" as RESETPARAM1  [[$./release_relation_sprint#resetparam1 {"重置反向关系参数"}]]
state "重置正向关系参数" as RESETPARAM2  [[$./release_relation_sprint#resetparam2 {"重置正向关系参数"}]]
state "准备参数" as PREPAREPARAM1  [[$./release_relation_sprint#prepareparam1 {"准备参数"}]]
state "生成反向关联数据" as DEACTION1  [[$./release_relation_sprint#deaction1 {"生成反向关联数据"}]]
state "生成正向关联数据" as DEACTION2  [[$./release_relation_sprint#deaction2 {"生成正向关联数据"}]]
}


Begin --> BINDPARAM1 : [[$./release_relation_sprint#begin-bindparam1{存在关联主要标识} 存在关联主要标识]]
BINDPARAM1 --> LOOPSUBCALL1 : [[$./release_relation_sprint#bindparam1-loopsubcall1{连接名称} 连接名称]]
LOOPSUBCALL1 --> RESETPARAM1
RESETPARAM1 --> RESETPARAM2
RESETPARAM2 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> DEACTION2
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `selectdata(关联的迭代列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selectdata(关联的迭代列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重置反向关系参数 :id=RESETPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```reverse_relation_obj(反向关系对象)```
#### 重置正向关系参数 :id=RESETPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```forward_relation_obj(正向关系对象)```
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).principal_id` 设置给  `forward_relation_obj(正向关系对象).PRINCIPAL_ID(关联主体标识)`
2. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `reverse_relation_obj(反向关系对象).PRINCIPAL_ID(关联主体标识)`
3. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `forward_relation_obj(正向关系对象).TARGET_ID(关联目标标识)`
4. 将`Default(传入变量).principal_id` 设置给  `reverse_relation_obj(反向关系对象).TARGET_ID(关联目标标识)`
5. 将`sprint` 设置给  `reverse_relation_obj(反向关系对象).PRINCIPAL_TYPE(关联主体类型)`
6. 将`release` 设置给  `reverse_relation_obj(反向关系对象).TARGET_TYPE(关联目标类型)`
7. 将`release` 设置给  `forward_relation_obj(正向关系对象).PRINCIPAL_TYPE(关联主体类型)`
8. 将`sprint` 设置给  `forward_relation_obj(正向关系对象).TARGET_TYPE(关联目标类型)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 生成反向关联数据 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Save](module/Base/relation#行为) ，行为参数为`reverse_relation_obj(反向关系对象)`

#### 生成正向关联数据 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Save](module/Base/relation#行为) ，行为参数为`forward_relation_obj(正向关系对象)`


### 连接条件说明
#### 存在关联主要标识 :id=Begin-BINDPARAM1

`Default(传入变量).principal_id` ISNOTNULL
#### 连接名称 :id=BINDPARAM1-LOOPSUBCALL1

`selectdata(关联的迭代列表).size` GT `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目发布(RELEASE)](module/ProjMgmt/release.md)||
|循环临时变量|for_temp_obj|数据对象|[迭代(SPRINT)](module/ProjMgmt/sprint.md)||
|正向关系对象|forward_relation_obj|数据对象|[关联(RELATION)](module/Base/relation.md)||
|反向关系对象|reverse_relation_obj|数据对象|[关联(RELATION)](module/Base/relation.md)||
|关联的迭代列表|selectdata|数据对象列表|[迭代(SPRINT)](module/ProjMgmt/sprint.md)||
