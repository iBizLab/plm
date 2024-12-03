## 用例成员分布(casePerson) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [当前项目用例(cur_library)](module/TestMgmt/run/query/cur_library)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `EXECUTOR_ID(执行人标识)`  分组处理：`IF(TRIM(EXECUTOR_ID) is null, '未设置', EXECUTOR_ID)`
* `STATUS(执行结果)`  分组处理：`IF(TRIM(status) is null, '未执行', status)`

<p class="panel-title"><b>聚合参数</b></p>

* `count`  聚合函数：`count(*)`
