## 项目下的交付物(Project_deliverable) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `是`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`




### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t2.TITLE as `WORK_ITEM_TITLE`,
t2.IDENTIFIER as `WORK_ITEM_IDENTIFIER`
FROM `ATTACHMENT` `t1`, `WORK_ITEM` `t2`
WHERE t1.OWNER_ID = t2.ID and t1.OWNER_TYPE = 'WORK_ITEM' and t1.OWNER_SUBTYPE = 'DELIVERABLE'
and t2.is_archived = 0 and t2.is_deleted = 0
and exists(select 1 from `project` t3 where t3.id = t2.project_id and t3.id = #{ctx.webcontext.project_id})

```
