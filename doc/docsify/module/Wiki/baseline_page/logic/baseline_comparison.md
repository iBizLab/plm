## 基线对比数据查询 <!-- {docsify-ignore-all} -->

   基线对比数据获取，查询两个基线下的页面

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
state "开始" as Begin <<start>> [[$./baseline_comparison#begin {"开始"}]]
state "设置关联查询过滤器的分页参数" as PREPAREPARAM2  [[$./baseline_comparison#prepareparam2 {"设置关联查询过滤器的分页参数"}]]
state "获取当前基线下页面" as DEDATASET1  [[$./baseline_comparison#dedataset1 {"获取当前基线下页面"}]]
state "填充页面过滤器参数" as PREPAREPARAM3  [[$./baseline_comparison#prepareparam3 {"填充页面过滤器参数"}]]
state "填充对比基线关联查询过滤器需要的baseline参数" as PREPAREPARAM1  [[$./baseline_comparison#prepareparam1 {"填充对比基线关联查询过滤器需要的baseline参数"}]]
state "获取对比基线下的页面" as DEDATASET2  [[$./baseline_comparison#dedataset2 {"获取对比基线下的页面"}]]
state "获取最新版本页面" as DEDATASET3  [[$./baseline_comparison#dedataset3 {"获取最新版本页面"}]]
state "填充版本查询过滤器参数" as PREPAREPARAM5  [[$./baseline_comparison#prepareparam5 {"填充版本查询过滤器参数"}]]
state "将处理好的列表对象绑定至分页结果对象" as BINDPARAM1  [[$./baseline_comparison#bindparam1 {"将处理好的列表对象绑定至分页结果对象"}]]
state "获取版本结果集" as DEDATASET4  [[$./baseline_comparison#dedataset4 {"获取版本结果集"}]]
state "结束" as END1 <<end>> [[$./baseline_comparison#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./baseline_comparison#loopsubcall1 {"循环子调用"}]] #green {
state "附加到数组参数" as APPENDPARAM2  [[$./baseline_comparison#appendparam2 {"附加到数组参数"}]]
state "提取关联对象中的主键标识" as RAWSFCODE1  [[$./baseline_comparison#rawsfcode1 {"提取关联对象中的主键标识"}]]
}
state "循环子调用" as LOOPSUBCALL2  [[$./baseline_comparison#loopsubcall2 {"循环子调用"}]] #green {
state "附加到数组参数" as APPENDPARAM3  [[$./baseline_comparison#appendparam3 {"附加到数组参数"}]]
}
state "循环子调用" as LOOPSUBCALL3  [[$./baseline_comparison#loopsubcall3 {"循环子调用"}]] #green {
state "提取关联对象中的版本标识" as RAWSFCODE2  [[$./baseline_comparison#rawsfcode2 {"提取关联对象中的版本标识"}]]
state "填充最新版本页面附加属性" as PREPAREPARAM7  [[$./baseline_comparison#prepareparam7 {"填充最新版本页面附加属性"}]]
}
state "循环子调用" as LOOPSUBCALL4  [[$./baseline_comparison#loopsubcall4 {"循环子调用"}]] #green {
}
state "循环子调用" as LOOPSUBCALL5  [[$./baseline_comparison#loopsubcall5 {"循环子调用"}]] #green {
state "填充关联目标版本对象" as PREPAREPARAM6  [[$./baseline_comparison#prepareparam6 {"填充关联目标版本对象"}]]
state "附加到数组参数" as APPENDPARAM4  [[$./baseline_comparison#appendparam4 {"附加到数组参数"}]]
}


Begin --> PREPAREPARAM2
PREPAREPARAM2 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET2
DEDATASET2 --> LOOPSUBCALL2
LOOPSUBCALL2 --> BINDPARAM1
BINDPARAM1 --> END1
LOOPSUBCALL2 --> APPENDPARAM3
LOOPSUBCALL1 --> APPENDPARAM2
APPENDPARAM2 --> RAWSFCODE1
LOOPSUBCALL1 --> PREPAREPARAM3 : [[$./baseline_comparison#loopsubcall1-prepareparam3{自身基线对比} 自身基线对比]]
PREPAREPARAM3 --> DEDATASET3
DEDATASET3 --> LOOPSUBCALL3
LOOPSUBCALL3 --> RAWSFCODE2
RAWSFCODE2 --> PREPAREPARAM7
LOOPSUBCALL3 --> PREPAREPARAM5
PREPAREPARAM5 --> DEDATASET4
DEDATASET4 --> LOOPSUBCALL4
LOOPSUBCALL4 --> LOOPSUBCALL5
LOOPSUBCALL5 --> PREPAREPARAM6
PREPAREPARAM6 --> APPENDPARAM4
LOOPSUBCALL4 --> BINDPARAM1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置关联查询过滤器的分页参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`500` 设置给  `Default(传入变量).size`
2. 将`500` 设置给  `comparison_filter(对比基线查询过滤器).size`

#### 获取当前基线下页面 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [基线页面(BASELINE_PAGE)](module/Wiki/baseline_page.md) 数据集合 [填充页面版本数据(fill_version_data)](module/Wiki/baseline_page#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`page(分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page(分页查询结果变量)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 附加到数组参数 :id=APPENDPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[附加到数组参数]</font></sup>



将参数`for_temp_obj(循环临时变量)` 添加到数组参数`content(基线页面列表)`
#### 提取关联对象中的主键标识 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var page_ids = logic.getParam("page_ids");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("target_id")){
    var ids = page_ids.get("ids");
    if(ids){
        ids = ids + "," + for_temp_obj.get("target_id");
    } else {
        ids = for_temp_obj.get("target_id");
    }
    page_ids.set("ids", ids);
}
```

#### 填充页面过滤器参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`page_ids(承载页面标识对象).ids` 设置给  `page_filter(页面查询过滤器).n_id_in`
2. 将`500` 设置给  `page_filter(页面查询过滤器).size`

#### 填充对比基线关联查询过滤器需要的baseline参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).comparison_baseline` 设置给  `comparison_filter(对比基线查询过滤器).baseline(基线)`

#### 获取对比基线下的页面 :id=DEDATASET2<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [基线页面(BASELINE_PAGE)](module/Wiki/baseline_page.md) 数据集合 [填充页面版本数据(fill_version_data)](module/Wiki/baseline_page#数据集合) ，查询参数为`comparison_filter(对比基线查询过滤器)`

将执行结果返回给参数`comparison_page(对比基线下页面分页结果)`

#### 获取最新版本页面 :id=DEDATASET3<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 数据集合 [数据集(DEFAULT)](module/Wiki/article_page#数据集合) ，查询参数为`page_filter(页面查询过滤器)`

将执行结果返回给参数`page_page(页面分页结果变量)`

#### 填充最新版本页面附加属性 :id=PREPAREPARAM7<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`page_for_temp(页面循环临时变量).CUR_VERSION_ID(当前版本标识)` 设置给  `page_for_temp(页面循环临时变量).target_version_id`
2. 将`page_for_temp(页面循环临时变量).ID(标识)` 设置给  `page_for_temp(页面循环临时变量).target_id`
3. 将`Default(传入变量).comparison_baseline` 设置给  `page_for_temp(页面循环临时变量).principal_id`
4. 将`1` 设置给  `page_for_temp(页面循环临时变量).is_latest`

#### 提取关联对象中的版本标识 :id=RAWSFCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var page_versions = logic.getParam("page_versions");
var page_for_temp = logic.getParam("page_for_temp");
if(page_for_temp.get("cur_version_id")){
    var version_id_in = page_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + page_for_temp.get("cur_version_id");
    } else {
        version_id_in = page_for_temp.get("cur_version_id");
    }
    page_versions.set("version_id_in", version_id_in);
}
```

#### 循环子调用 :id=LOOPSUBCALL3<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page_page(页面分页结果变量)`，子循环参数使用`page_for_temp(页面循环临时变量)`
#### 循环子调用 :id=LOOPSUBCALL2<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`comparison_page(对比基线下页面分页结果)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 附加到数组参数 :id=APPENDPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[附加到数组参数]</font></sup>



将参数`for_temp_obj(循环临时变量)` 添加到数组参数`content(基线页面列表)`
#### 填充版本查询过滤器参数 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`page_versions(承载页面当前版本标识).version_id_in` 设置给  `version_filter(版本过滤器).n_id_in`
2. 将`500` 设置给  `version_filter(版本过滤器).size`

#### 将处理好的列表对象绑定至分页结果对象 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`content(基线页面列表)` 到 `page(分页查询结果变量)`
#### 获取版本结果集 :id=DEDATASET4<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [版本(VERSION)](module/Base/version.md) 数据集合 [数据集(DEFAULT)](module/Base/version#数据集合) ，查询参数为`version_filter(版本过滤器)`

将执行结果返回给参数`version_page(版本分页结果变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `page(分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL5<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`version_page(版本分页结果变量)`，子循环参数使用`version_for_temp(版本循环临时变量)`
#### 循环子调用 :id=LOOPSUBCALL4<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page_page(页面分页结果变量)`，子循环参数使用`page_for_temp(页面循环临时变量)`
#### 填充关联目标版本对象 :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`version_for_temp(版本循环临时变量)` 设置给  `page_for_temp(页面循环临时变量).target_version`

#### 附加到数组参数 :id=APPENDPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[附加到数组参数]</font></sup>



将参数`page_for_temp(页面循环临时变量)` 添加到数组参数`content(基线页面列表)`

### 连接条件说明
#### 不同基线之间对比 


#### 自身基线对比 


#### 自身基线对比 :id=LOOPSUBCALL1-PREPAREPARAM3

 AND `page(分页查询结果变量).size` GT `0`
#### 若版本标识与页面的当前版本一致 




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|对比基线查询过滤器|comparison_filter|过滤器|||
|对比基线下页面分页结果|comparison_page|分页查询|||
|基线页面列表|content|数据对象列表|[基线页面(BASELINE_PAGE)](module/Wiki/baseline_page.md)||
|循环临时变量|for_temp_obj|数据对象|[基线页面(BASELINE_PAGE)](module/Wiki/baseline_page.md)||
|分页查询结果变量|page|分页查询|||
|页面查询过滤器|page_filter|过滤器|||
|页面循环临时变量|page_for_temp|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|承载页面标识对象|page_ids|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|页面分页结果变量|page_page|分页查询|||
|承载页面当前版本标识|page_versions|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|版本过滤器|version_filter|过滤器|||
|版本循环临时变量|version_for_temp|数据对象|[版本(VERSION)](module/Base/version.md)||
|版本分页结果变量|version_page|分页查询|||
