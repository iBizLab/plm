## 移动端首页_最近访问 <!-- {docsify-ignore-all} -->

   仅查询最近5条访问

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
state "开始" as Begin <<start>> [[$./mob_home_recent_access#begin {"开始"}]]
state "设置固定条数为5" as PREPAREPARAM1  [[$./mob_home_recent_access#prepareparam1 {"设置固定条数为5"}]]
state "查询最近访问记录" as DEDATASET1  [[$./mob_home_recent_access#dedataset1 {"查询最近访问记录"}]]
state "结束" as END1 <<end>> [[$./mob_home_recent_access#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置固定条数为5 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`5` 设置给  `Default(传入变量).size`

#### 查询最近访问记录 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [最近访问(RECENT)](module/Base/recent.md) 数据集合 [最近访问(recent_access)](module/Base/recent#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`recent_page(最近访问分页查询结果变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `recent_page(最近访问分页查询结果变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|最近访问分页查询结果变量|recent_page|分页查询|||
