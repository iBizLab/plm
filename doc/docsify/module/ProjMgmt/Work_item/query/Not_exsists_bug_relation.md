## 未关联的缺陷(Not_exsists_bug_relation) <!-- {docsify-ignore-all} -->

仅缺陷

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

(`( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )` AND `WORK_ITEM_TYPE_ID(工作项类型)` LIKE `'bug'` AND `IS_ARCHIVED(是否已归档)` EQ `'0'` AND `IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **RELATION不存在1:N（NOT EXISTS (SELECT)）DERCUSTOM_RELATION_WORK_ITEM**<br>
连接关系：[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)<br>
连接实体：[工作项](module/ProjMgmt/Work_item)<br>
连接条件：(`PRINCIPAL_TYPE(关联主体类型)` EQ `网页请求上下文.principal_type` AND `TARGET_TYPE(关联目标类型)` EQ `网页请求上下文.target_type` AND `PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id`)<br>


### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t91.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`WORK_ITEM_TYPE_ID` LIKE '%bug%'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```
