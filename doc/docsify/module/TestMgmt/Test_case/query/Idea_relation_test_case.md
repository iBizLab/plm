## 需求关联测试用例(Idea_relation_test_case) <!-- {docsify-ignore-all} -->



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

(`IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **RELATION存在1:N（EXISTS (SELECT)）DERCUSTOM_RELATION_TEST_CASE**<br>
连接关系：[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)<br>
连接实体：[用例](module/TestMgmt/Test_case)<br>
连接条件：(`TARGET_TYPE(关联目标类型)` EQ `'test_case'` AND `PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'idea'`)<br>


### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0 )
```
