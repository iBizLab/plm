## 最近浏览当前产品内工单(Recent_curproduct_ticket) <!-- {docsify-ignore-all} -->



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

(`OWNER_TYPE(所属数据对象)` EQ `'product'` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `'ticket'` AND `CREATE_MAN(建立人)` EQ `用户上下文.srfpersonid` AND `OWNER_ID(所属数据标识)` NOTEQ `网页请求上下文.principal_id` AND `exists(select 1 from ticket t2 where t1.owner_id = t2.id   and t2.is_deleted = 0 and t2.is_archived = 0 and t2.customer_id is null )`)



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

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'ticket'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(select 1 from ticket t2 where t1.owner_id = t2.id   and t2.is_deleted = 0 and t2.is_archived = 0 and t2.customer_id is null ) )
```
