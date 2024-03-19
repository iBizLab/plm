## 评论通知维护人(Comment_notify_maintenance) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `指定属性组`
*  **属性组：**[维护人](#)
  * `ID(标识)`
  * `MAINTENANCE_ID(维护人标识)`
  * `MAINTENANCE_NAME(维护人)`



### 查询条件

(`exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id})`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ID`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`
FROM `TEST_CASE` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```
