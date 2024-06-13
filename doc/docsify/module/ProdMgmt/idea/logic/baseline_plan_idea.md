## 基线规划需求数据查询 <!-- {docsify-ignore-all} -->

   基线规划需求时，填充需求当前版本名称

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
state "开始" as Begin <<start>> [[$./baseline_plan_idea#begin {"开始"}]]
state "选择需求列表" as DEDATASET1  [[$./baseline_plan_idea#dedataset1 {"选择需求列表"}]]
state "准备版本过滤器" as PREPAREPARAM1  [[$./baseline_plan_idea#prepareparam1 {"准备版本过滤器"}]]
state "获取版本数据" as DEDATASET2  [[$./baseline_plan_idea#dedataset2 {"获取版本数据"}]]
state "结束" as END1 <<end>> [[$./baseline_plan_idea#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./baseline_plan_idea#loopsubcall1 {"循环子调用"}]] #green {
state "获取所选需求的版本ID信息" as RAWSFCODE1  [[$./baseline_plan_idea#rawsfcode1 {"获取所选需求的版本ID信息"}]]
}
state "循环子调用" as LOOPSUBCALL2  [[$./baseline_plan_idea#loopsubcall2 {"循环子调用"}]] #green {
}
state "循环子调用" as LOOPSUBCALL3  [[$./baseline_plan_idea#loopsubcall3 {"循环子调用"}]] #green {
state "填充当前版本名称" as PREPAREPARAM2  [[$./baseline_plan_idea#prepareparam2 {"填充当前版本名称"}]]
}
state "循环子调用" as LOOPSUBCALL4  [[$./baseline_plan_idea#loopsubcall4 {"循环子调用"}]] #green {
state "填充默认版本参数" as PREPAREPARAM3  [[$./baseline_plan_idea#prepareparam3 {"填充默认版本参数"}]]
}


Begin --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1 : [[$./baseline_plan_idea#dedataset1-loopsubcall1{存在可选择的需求} 存在可选择的需求]]
LOOPSUBCALL1 --> RAWSFCODE1
LOOPSUBCALL1 --> PREPAREPARAM1 : [[$./baseline_plan_idea#loopsubcall1-prepareparam1{需求存在当前版本} 需求存在当前版本]]
PREPAREPARAM1 --> DEDATASET2
DEDATASET2 --> LOOPSUBCALL2
LOOPSUBCALL2 --> LOOPSUBCALL3
LOOPSUBCALL3 --> PREPAREPARAM2
LOOPSUBCALL2 --> LOOPSUBCALL4
LOOPSUBCALL4 --> END1
LOOPSUBCALL4 --> PREPAREPARAM3 : [[$./baseline_plan_idea#loopsubcall4-prepareparam3{无版本时填充默认v1} 无版本时填充默认v1]]
LOOPSUBCALL1 --> LOOPSUBCALL4 : [[$./baseline_plan_idea#loopsubcall1-loopsubcall4{需求都不存在版本} 需求都不存在版本]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 选择需求列表 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 数据集合 [基线选择需求(baseline_choose_idea)](module/ProdMgmt/idea#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`page(分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page(分页查询结果变量)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 获取所选需求的版本ID信息 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var idea_versions = logic.getParam("idea_versions");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("cur_version_id")){
    var version_id_in = idea_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + for_temp_obj.get("cur_version_id");
    } else {
        version_id_in = for_temp_obj.get("cur_version_id");
    }
    idea_versions.set("version_id_in", version_id_in);
}
```

#### 准备版本过滤器 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`idea_versions(临时存放版本标识).version_id_in` 设置给  `version_filter(版本过滤器).n_id_in`

#### 获取版本数据 :id=DEDATASET2<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [版本(VERSION)](module/Base/version.md) 数据集合 [数据集(DEFAULT)](module/Base/version#数据集合) ，查询参数为`version_filter(版本过滤器)`

将执行结果返回给参数`version_page(分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL2<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`version_page(分页查询结果变量)`，子循环参数使用`for_temp_version_obj(版本循环临时变量)`
#### 循环子调用 :id=LOOPSUBCALL3<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page(分页查询结果变量)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 填充当前版本名称 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_version_obj(版本循环临时变量).NAME(名称)` 设置给  `for_temp_obj(循环临时变量).CUR_VERSION_NAME(当前版本名称)`

#### 循环子调用 :id=LOOPSUBCALL4<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page(分页查询结果变量)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 填充默认版本参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`v1` 设置给  `for_temp_obj(循环临时变量).CUR_VERSION_NAME(当前版本名称)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `page(分页查询结果变量)`


### 连接条件说明
#### 存在可选择的需求 :id=DEDATASET1-LOOPSUBCALL1

`page(分页查询结果变量).size` GT `0`
#### 需求存在当前版本 :id=LOOPSUBCALL1-PREPAREPARAM1

`idea_versions(临时存放版本标识).version_id_in` ISNOTNULL
#### 若版本标识与需求的当前版本一致 


#### 无版本时填充默认v1 :id=LOOPSUBCALL4-PREPAREPARAM3

`for_temp_obj(循环临时变量).CUR_VERSION_NAME(当前版本名称)` ISNULL
#### 需求都不存在版本 :id=LOOPSUBCALL1-LOOPSUBCALL4

`idea_versions(临时存放版本标识).version_id_in` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|循环临时变量|for_temp_obj|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|版本循环临时变量|for_temp_version_obj|数据对象|[版本(VERSION)](module/Base/version.md)||
|临时存放版本标识|idea_versions|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|分页查询结果变量|page|分页查询|||
|版本过滤器|version_filter|过滤器|||
|分页查询结果变量|version_page|分页查询|||