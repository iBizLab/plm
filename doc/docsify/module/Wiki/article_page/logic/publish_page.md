## 发布页面 <!-- {docsify-ignore-all} -->

   页面发布，设置发布状态及发布人，发布时间

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
state "开始" as Begin <<start>> [[$./publish_page#begin {"开始"}]]
state "设置发布信息" as PREPAREPARAM1  [[$./publish_page#prepareparam1 {"设置发布信息"}]]
state "准备参数" as PREPAREPARAM5  [[$./publish_page#prepareparam5 {"准备参数"}]]
state "设置发布时间" as RAWSFCODE1  [[$./publish_page#rawsfcode1 {"设置发布时间"}]]
state "重置ID" as PREPAREPARAM4  [[$./publish_page#prepareparam4 {"重置ID"}]]
state "设置发布状态" as PREPAREPARAM2  [[$./publish_page#prepareparam2 {"设置发布状态"}]]
state "保存发布页面信息" as DEACTION2  [[$./publish_page#deaction2 {"保存发布页面信息"}]]
state "结束" as END2 <<end>> [[$./publish_page#end2 {"结束"}]]


Begin --> RAWSFCODE1
RAWSFCODE1 --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM4 : [[$./publish_page#prepareparam1-prepareparam4{第一次保存} 第一次保存]]
PREPAREPARAM4 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION2
DEACTION2 --> END2
PREPAREPARAM1 --> PREPAREPARAM5 : [[$./publish_page#prepareparam1-prepareparam5{非第一次保存} 非第一次保存]]
PREPAREPARAM5 --> DEACTION2 : [[$./publish_page#prepareparam5-deaction2{已发布} 已发布]]
PREPAREPARAM5 --> PREPAREPARAM2 : [[$./publish_page#prepareparam5-prepareparam2{未发布} 未发布]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置发布时间 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("publish_time", new Date());
```

#### 设置发布信息 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>

设置发布人、发布内容

1. 将`Default(传入变量).CONTENT(正文)` 设置给  `Default(传入变量).PUBLISH_CONTENT(发布正文)`
2. 将`Default(传入变量).NAME(主题)` 设置给  `Default(传入变量).PUBLISH_NAME(发布主题)`
3. 将`用户全局对象.srfpersonid` 设置给  `Default(传入变量).PUBLISH_MAN(发布人)`

#### 准备参数 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 重置ID :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).ID(标识)`

#### 设置发布状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).IS_PUBLISHED(是否发布)`
2. 将`1` 设置给  `Default(传入变量).PUBLISHED(发布状态)`

#### 保存发布页面信息 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 行为 [Save](module/Wiki/article_page#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 第一次保存 :id=PREPAREPARAM1-PREPAREPARAM4

(`Default(传入变量).ID(标识)` EQ `undefined` OR `Default(传入变量).ID(标识)` ISNULL)
#### 非第一次保存 :id=PREPAREPARAM1-PREPAREPARAM5

`Default(传入变量).ID(标识)` ISNOTNULL AND `Default(传入变量).ID(标识)` NOTEQ `undefined`
#### 已发布 :id=PREPAREPARAM5-DEACTION2

`Default(传入变量).IS_PUBLISHED(是否发布)` EQ `1` AND `Default(传入变量).published(发布状态)` EQ `1`
#### 未发布 :id=PREPAREPARAM5-PREPAREPARAM2

(`Default(传入变量).IS_PUBLISHED(是否发布)` EQ `0` OR `Default(传入变量).PUBLISHED(发布状态)` EQ `0` OR `Default(传入变量).PUBLISHED(发布状态)` ISNULL)


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|过滤器|filter|过滤器|||
|版本过滤器|version_filter|过滤器|||
|版本分页查询结果|version_pages|分页查询|||
|版本临时变量|version_temp|数据对象|[版本(VERSION)](module/Base/version.md)||
