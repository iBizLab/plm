## 缺陷属性分布(defect_property_distribution) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [缺陷工作项(bug_work_item)](module/ProjMgmt/work_item/query/bug_work_item)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `PRIORITY(优先级)`  分组处理：`IF(TRIM(priority) is null, '未分配优先级', priority)`
* `REAPPEAR_PROBABILITY(复现概率)`  分组处理：`IF(TRIM(REAPPEAR_PROBABILITY) is null, '未设置复现概率', REAPPEAR_PROBABILITY)`
* `SEVERITY(严重程度)`  分组处理：`IF(TRIM(severity) is null, '未分配严重程度', severity)`
* `SPRINT_ID(迭代标识)`  分组处理：`IF(TRIM(SPRINT_ID) is null, '未分配迭代', SPRINT_ID)`
* `STATE(状态)`  分组处理：`STATE`
* `STATE_TYPE(工作项状态类型)`  分组处理：`STATE_TYPE`

<p class="panel-title"><b>聚合参数</b></p>

* `count`  聚合函数：`count(1)`
