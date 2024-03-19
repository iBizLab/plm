## 最近访问的用例_首页(Recent_test_case_index) <!-- {docsify-ignore-all} -->



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

(`OWNER_TYPE(所属数据对象)` EQ `'library'` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `'test_case'` AND `UPDATE_MAN(更新人)` EQ `用户上下文.srfpersonid` AND `exists(SELECT 1 FROM test_case t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0)`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'library'  AND  t1.`OWNER_SUBTYPE` = 'test_case'  AND  t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(SELECT 1 FROM test_case t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```
