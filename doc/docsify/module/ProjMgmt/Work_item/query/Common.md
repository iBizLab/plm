## 普通工作项(Common) <!-- {docsify-ignore-all} -->

未删除

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `指定属性组`
*  **属性组：**[通常属性组](#)
  * `ID(标识)`
  * `TITLE(标题)`
  * `IDENTIFIER(编号)`
  * `IS_DELETED(是否已删除)`
  * `STATE(状态)`
  * `WORK_ITEM_TYPE_ID(工作项类型)`
  * `ASSIGNEE_ID(负责人标识)`
  * `ASSIGNEE_NAME(负责人)`
  * `PRIORITY(优先级)`
  * `END_AT(结束时间)`
  * `PID(父标识)`
  * `START_AT(开始时间)`
  * `TOP_ID(顶级工作项标识)`
  * `PROJECT_ID(项目标识)`
  * `IS_ARCHIVED(是否已归档)`
  * `PTITLE(父工作项)`
  * `REAPPEAR_PROBABILITY(复现概率)`
  * `SEVERITY(严重程度)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`SEVERITY`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`PID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```
