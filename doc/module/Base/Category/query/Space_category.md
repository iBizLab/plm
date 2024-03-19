## 空间目录(Space_category) <!-- {docsify-ignore-all} -->



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

(`OWNER_TYPE(所属数据对象)` EQ `'space'` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `'space'`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'space' )
```
