## 当前模块下用例(Suites_test_case) <!-- {docsify-ignore-all} -->



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

(`INSTR(t1.suites, #{ctx.webcontext.principal_id} )`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( INSTR(t1.suites, #{ctx.webcontext.principal_id} ) )
```
