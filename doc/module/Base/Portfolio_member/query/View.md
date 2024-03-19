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
t1.`NAME`,
t1.`PORTFOLIO_ID`,
t11.`IDENTIFIER` AS `PORTFOLIO_IDENTIFIER`,
t11.`NAME` AS `PORTFOLIO_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PORTFOLIO_MEMBER` t1 
LEFT JOIN `PORTFOLIO` t11 ON t1.`PORTFOLIO_ID` = t11.`ID` 


```
