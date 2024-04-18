## 团队速度(temp_speed_report) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [用户故事（normal）(scrum_story_normal)](module/ProjMgmt/work_item/query/scrum_story_normal)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `SPRINT_ID(迭代标识)`  分组处理：`IF(TRIM(sprint_id) is null, '未分组', sprint_id)`

<p class="panel-title"><b>聚合参数</b></p>

* `count`  聚合函数：`count(1)`
* `STATE_TYPE`  聚合函数：`SUM(CASE WHEN STATE_TYPE = 'completed' THEN 1 ELSE 0 END)`
