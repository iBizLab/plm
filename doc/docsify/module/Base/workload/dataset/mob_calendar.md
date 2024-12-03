## 工时日历移动端(mob_calendar) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `全部数据`


<p class="panel-title"><b>主排序属性</b></p>

* `REGISTER_DATE(工作日期)` `DESC`


<p class="panel-title"><b>从排序属性</b></p>

* `UPDATE_TIME(更新时间)` `DESC`


### 数据查询
  * [我的工时日历(my_calendar)](module/Base/workload/query/my_calendar)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `PRINCIPAL_ID(工时主体标识)` 

<p class="panel-title"><b>聚合参数</b></p>

* `DURATION`  聚合函数：`SUM(DURATION)`
* `ID` 
* `NAME` 
* `PRINCIPAL_TYPE` 
* `REGISTER_DATE` 
* `SHOW_IDENTIFIER` 
* `UPDATE_TIME` 
