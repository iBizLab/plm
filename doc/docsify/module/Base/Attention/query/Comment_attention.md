## 评论提醒(Comment_attention) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `指定属性组`
*  **属性组：**[用户标识](#)
  * `USER_ID(关注人)`



### 查询条件

(`exists(select 1 from `comment` t2 where t1.owner_id = t2.PRINCIPAL_ID and t2.id=#{ctx.webcontext.id})` AND `TYPE(关注类型)` EQ `'40'`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( exists(select 1 from `comment` t2 where t1.owner_id = t2.PRINCIPAL_ID and t2.id=#{ctx.webcontext.id})  AND  t1.`TYPE` = '40' )
```
