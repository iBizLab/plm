## 正常状态(Normal) <!-- {docsify-ignore-all} -->



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

(`IS_DELETED(是否已删除)` EQ `'0'` AND `PRODUCT_ID(产品标识)` EQ `网页请求上下文.product`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`PRODUCT_ID` = #{ctx.webcontext.product} )
```
