## 通过主数据标识查询通知对象(Attention_by_ownerid) <!-- {docsify-ignore-all} -->



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

(`OWNER_ID(所属数据标识)` EQ `网页请求上下文.id` AND `OWNER_ID(所属数据标识)` EQ `网页请求上下文.principal_id` AND `TYPE(关注类型)` IN `'30,40'`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.id}  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`TYPE` IN ('30','40') )
```
