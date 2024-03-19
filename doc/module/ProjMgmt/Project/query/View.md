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
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 


```
