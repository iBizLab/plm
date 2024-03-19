## 当前测试库成员(Cur_library_member) <!-- {docsify-ignore-all} -->



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

(`LIBRARY_ID(测试库标识)` EQ `数据上下文.library_id` AND `LIBRARY_ID(测试库标识)` EQ `数据上下文.id`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.library_id !=null ">  t1.`LIBRARY_ID` = #{ctx.datacontext.library_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`LIBRARY_ID` = #{ctx.datacontext.id} )
```
