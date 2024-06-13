## 执行结果分布(ImplementationResults) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [执行结果分布(ImplementationResults)](module/TestMgmt/run/query/ImplementationResults)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `STATUS(执行结果)`  分组处理：`IF(TRIM(status) is null, '未设置', status)`

<p class="panel-title"><b>聚合参数</b></p>

* `count`  聚合函数：`count(1)`