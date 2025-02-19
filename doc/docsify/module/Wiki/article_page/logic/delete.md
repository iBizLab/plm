## 删除 <!-- {docsify-ignore-all} -->

   页面数据的逻辑删除，修改页面的是否删除属性值

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
state "更新页面删除状态" as DEACTION1  [[$./delete#deaction1 {"更新页面删除状态"}]]
state "删除最近访问" as RAWSQLCALL1  [[$./delete#rawsqlcall1 {"删除最近访问"}]]
state "设置下级页面过滤器参数" as PREPAREPARAM1  [[$./delete#prepareparam1 {"设置下级页面过滤器参数"}]]
state "查询下级页面" as DEDATASET1  [[$./delete#dedataset1 {"查询下级页面"}]]
state "设置页面删除状态" as PREPAREPARAM2  [[$./delete#prepareparam2 {"设置页面删除状态"}]]
state "结束" as END1 <<end>> [[$./delete#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./delete#loopsubcall1 {"循环子调用"}]] #green {
state "递归调用删除页面" as DELOGIC1  [[$./delete#delogic1 {"递归调用删除页面"}]]
}


Begin --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
DEACTION1 --> RAWSQLCALL1
RAWSQLCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1 : [[$./delete#dedataset1-loopsubcall1{若存在子级} 若存在子级]]
LOOPSUBCALL1 --> DELOGIC1
LOOPSUBCALL1 --> END1
DEDATASET1 --> END1 : [[$./delete#dedataset1-end1{不存在子级} 不存在子级]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置页面删除状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).IS_DELETED(是否已删除)`

#### 更新页面删除状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 行为 [Update](module/Wiki/article_page#行为) ，行为参数为`Default(传入变量)`

#### 删除最近访问 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='page'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`


#### 设置下级页面过滤器参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `selected_filter(查询过滤器).n_parent_id_eq`

#### 查询下级页面 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 数据集合 [数据集(DEFAULT)](module/Wiki/article_page#数据集合) ，查询参数为`selected_filter(查询过滤器)`

将执行结果返回给参数`selected_page(分页结果对象)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selected_page(分页结果对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 递归调用删除页面 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 处理逻辑 [删除]((module/Wiki/article_page/logic/delete.md)) ，行为参数为`for_temp_obj(循环临时变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 若存在子级 :id=DEDATASET1-LOOPSUBCALL1

`selected_page(分页结果对象).size` GT `0`
#### 不存在子级 :id=DEDATASET1-END1

`selected_page(分页结果对象).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|循环临时变量|for_temp_obj|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|查询过滤器|selected_filter|过滤器|||
|分页结果对象|selected_page|分页查询|||
