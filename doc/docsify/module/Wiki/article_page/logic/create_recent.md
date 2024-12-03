## 生成最近访问 <!-- {docsify-ignore-all} -->

   在用户对页面数据进行了get或update操作时生成相应的访问记录

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
state "开始" as Begin <<start>> [[$./create_recent#begin {"开始"}]]
state "准备最近访问参数" as PREPAREPARAM1  [[$./create_recent#prepareparam1 {"准备最近访问参数"}]]
state "结束" as END1 <<end>> [[$./create_recent#end1 {"结束"}]]
state "保存最近访问" as DEACTION1  [[$./create_recent#deaction1 {"保存最近访问"}]]


Begin --> PREPAREPARAM1 : [[$./create_recent#begin-prepareparam1{已发布} 已发布]]
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1
Begin --> END1 : [[$./create_recent#begin-end1{未发布} 未发布]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备最近访问参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `recent.OWNER_ID(所属数据标识)`
2. 将`Default(传入变量).SPACE_IDENTIFIER(空间编号)` 设置给  `recent.RECENT_PARENT_IDENTIFIER(访问父类编号)`
3. 将`Default(传入变量).IDENTIFIER(编号)` 设置给  `recent.IDENTIFIER(编号)`
4. 将`Default(传入变量).SPACE_NAME(空间名称)` 设置给  `recent.RECENT_PARENT_NAME(访问父类名称)`
5. 将`Default(传入变量).SPACE_ID(空间标识)` 设置给  `recent.RECENT_PARENT(访问父类)`
6. 将`用户全局对象.srfpersonid` 设置给  `recent.CREATE_MAN(建立人)`
7. 将`2` 设置给  `recent.TYPE(访问类型)`
8. 将`Default(传入变量).PUBLISH_NAME(发布主题)` 设置给  `recent.NAME(名称)`
9. 将`space` 设置给  `recent.OWNER_TYPE(所属数据对象)`
10. 将`page` 设置给  `recent.OWNER_SUBTYPE(所属对象子类型)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 保存最近访问 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [最近访问(RECENT)](module/Base/recent.md) 行为 [Save](module/Base/recent#行为) ，行为参数为`recent`


### 连接条件说明
#### 已发布 :id=Begin-PREPAREPARAM1

`Default(传入变量).IS_PUBLISHED(是否发布)` EQ `1` AND `Default(传入变量).TYPE(类型)` NOTEQ `2`
#### 未发布 :id=Begin-END1

`Default(传入变量).IS_PUBLISHED(是否发布)` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|recent|recent|数据对象|[最近访问(RECENT)](module/Base/recent.md)||
