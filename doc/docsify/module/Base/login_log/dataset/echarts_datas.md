## 获取活跃人员图表数据(echarts_datas) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [获取活跃人员图表数据(echarts_datas)](module/Base/login_log/query/echarts_datas)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `AUTHTIME(登录时间)`  分组处理：`DATE(AUTHTIME)`

<p class="panel-title"><b>聚合参数</b></p>

* `ACTIVE_MEMBERS`  聚合函数：`count(distinct USER_ID)`
* `USER_ID` 
