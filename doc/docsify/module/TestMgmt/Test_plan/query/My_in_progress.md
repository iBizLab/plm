## 我的进行中的(My_in_progress) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`



### 查询条件

(`STATUS(状态)` EQ `'in_progress'`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( t1.`STATUS` = 'in_progress' )
```
