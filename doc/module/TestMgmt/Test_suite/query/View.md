## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `全部数据`




### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 


```
