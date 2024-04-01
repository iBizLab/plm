## 评论通知负责人(Comment_notify_assignee) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `指定属性组`
*  **属性组：**[负责人](#)
  * `ASSIGNEE_ID(负责人标识)`
  * `ASSIGNEE_NAME(负责人)`
  * `ID(标识)`



### 查询条件

(`exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id})`)



### 查询连接
* **ATTENTION存在1:N（EXISTS (SELECT)）DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID**<br>
连接关系：[DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID](der/DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID)<br>
连接实体：[工作项](module/ProjMgmt/Work_item)<br>
连接条件：(`USER_ID(关注人)` EQ `用户上下文.srfuserid`)<br>


### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `WORK_ITEM` t1 

WHERE EXISTS(SELECT * FROM `ATTENTION` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  t11.`OWNER_TYPE` = 'WORK_ITEM'  AND  t11.`OWNER_SUBTYPE` = 'WORK_ITEM'  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfuserid} ) ) AND ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```
