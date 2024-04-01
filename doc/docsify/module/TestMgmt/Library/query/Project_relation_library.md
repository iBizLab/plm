## 与项目关联的测试库(Project_relation_library) <!-- {docsify-ignore-all} -->

通过测试计划中进行关联项目展示测试库

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

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_ARCHIVED(是否已归档)` EQ `'0'` AND `exists(select 1 from test_plan t2 where t1.ID=t2.LIBRARY_ID and t2.PROJECT_ID = #{ctx.webcontext.project_id})`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from test_plan t2 where t1.ID=t2.LIBRARY_ID and t2.PROJECT_ID = #{ctx.webcontext.project_id}) )
```
