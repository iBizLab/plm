## 成员负荷报告（Scrum）(sprint_user_stat) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [未删除的(un_deletd)](module/ProjMgmt/work_item/query/un_deletd)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `ASSIGNEE_ID(负责人)`  分组处理：`IF(TRIM(ASSIGNEE_ID) is null, '未分组', ASSIGNEE_ID)`

<p class="panel-title"><b>聚合参数</b></p>

* `count2`  聚合函数：`SUM(CASE WHEN STATE_TYPE != 'completed' THEN 1 ELSE 0 END)`
* `STATE_TYPE`  聚合函数：`SUM(CASE WHEN STATE_TYPE = 'completed' THEN 1 ELSE 0 END)`
* `sum_count`  聚合函数：`count(*)`
