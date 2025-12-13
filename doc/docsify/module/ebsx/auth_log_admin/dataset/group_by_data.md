## 日期分组集合(group_by_data) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>默认数据集</b></p>

* `否`

<p class="panel-title"><b>数据集类型</b></p>

* `数据查询`

<p class="panel-title"><b>选择列级别</b></p>

* `默认（全部查询列）`




### 数据查询
  * [数据查询(DEFAULT)](module/ebsx/auth_log_admin/query/Default)

### 数据聚合

<br>
<p class="panel-title"><b>聚合模式</b></p>

* `指定分组参数`


<p class="panel-title"><b>分组参数</b></p>

* `AUTHTIME(认证时间)`  分组处理：`DATE(AUTHTIME)`

<p class="panel-title"><b>聚合参数</b></p>

* `ACTIVE_MEMBERS`  聚合函数：`count(distinct USERID)`
* `USERID` 
