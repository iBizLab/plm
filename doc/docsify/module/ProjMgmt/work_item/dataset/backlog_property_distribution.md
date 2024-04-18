## 需求属性分布(backlog_property_distribution) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `指定属性组`




### 数据查询
  * [需求工作项(requirement)](module/ProjMgmt/work_item/query/requirement)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `BACKLOG_FROM(需求来源)`  分组处理：`IF(TRIM(backlog_from) is null, '未设置需求来源', backlog_from)`
* `BACKLOG_TYPE(需求类型)`  分组处理：`IF(TRIM(backlog_type) is null, '未分配需求类型', backlog_type)`
* `PRIORITY(优先级)`  分组处理：`IF(TRIM(priority) is null, '未设置优先级', priority)`
* `RISK(风险)`  分组处理：`IF(TRIM(risk) is null, '未设置风险', risk)`
* `SPRINT_NAME(迭代名称)`  分组处理：`IF(TRIM(sprint_name) is null, '未分组', sprint_name)`
* `STATE(状态)`  分组处理：`STATE`
* `WORK_ITEM_TYPE_NAME(工作项类型)`  分组处理：`WORK_ITEM_TYPE_NAME`

<p class="panel-title"><b>聚合参数</b></p>

* `count`  聚合函数：`count(1)`
