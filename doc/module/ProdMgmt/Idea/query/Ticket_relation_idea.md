## 工单关联需求(Ticket_relation_idea) <!-- {docsify-ignore-all} -->

工单关联需求表格调用

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

(`IS_ARCHIVED(是否已归档)` EQ `'0'` AND `IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **RELATION存在1:N（EXISTS (SELECT)）DERCUSTOM_RELATION_IDEA**<br>
连接关系：[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)<br>
连接实体：[需求](module/ProdMgmt/Idea)<br>
连接条件：(`PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id` AND `TARGET_TYPE(关联目标类型)` EQ `'idea'` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'ticket'`)<br>


### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'ticket' ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```
