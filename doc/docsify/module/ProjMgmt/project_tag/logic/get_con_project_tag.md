## 获取关联的工作项 <!-- {docsify-ignore-all} -->

   在删除项目标签时，获取与之关联的工作项数量。

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
state "开始" as Begin <<start>> [[$./get_con_project_tag#begin {"开始"}]]
state "准备过滤器参数" as PREPAREPARAM1  [[$./get_con_project_tag#prepareparam1 {"准备过滤器参数"}]]
state "查询工作项数量" as DEDATASET1  [[$./get_con_project_tag#dedataset1 {"查询工作项数量"}]]
state "准备工作项数量参数" as PREPAREPARAM2  [[$./get_con_project_tag#prepareparam2 {"准备工作项数量参数"}]]
state "添加工作项数量提醒内容" as RAWSFCODE1  [[$./get_con_project_tag#rawsfcode1 {"添加工作项数量提醒内容"}]]
state "结束" as END1 <<end>> [[$./get_con_project_tag#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM2
PREPAREPARAM2 --> RAWSFCODE1
RAWSFCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备过滤器参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `filter(过滤器).n_tags_like`
2. 将`1` 设置给  `filter(过滤器).size`

#### 查询工作项数量 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [数据集(DEFAULT)](module/ProjMgmt/work_item#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`work_item_page(工作项分页结果变量)`

#### 准备工作项数量参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`work_item_page(工作项分页结果变量).total` 设置给  `Default(传入变量).num`

#### 添加工作项数量提醒内容 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item = logic.getParam("Default");
var num = work_item.get("num");
work_item.set("remind", "标签删除后不可恢复。共 " + num + " 个工作项正在使用此标签，删除后会从对应工作项中移除。");

```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag.md)||
|过滤器|filter|过滤器|||
|工作项分页结果变量|work_item_page|分页查询|||
