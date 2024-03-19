## 数据查询(Default) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `是`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`




### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ID`,
t1.`NAME`,
t1.`TYPE`
FROM (SELECT
'LIBRARY' AS `TYPE`,v1.`ID` AS `ID`
,v1.`NAME` AS `NAME`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `LIBRARY` t1 
) v1
UNION ALL
SELECT
'PRODUCT' AS `TYPE`,v2.`ID` AS `ID`
,v2.`NAME` AS `NAME`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `PRODUCT` t1 
) v2
UNION ALL
SELECT
'PROJECT' AS `TYPE`,v3.`ID` AS `ID`
,v3.`NAME` AS `NAME`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `PROJECT` t1 
) v3
) t1 


```
