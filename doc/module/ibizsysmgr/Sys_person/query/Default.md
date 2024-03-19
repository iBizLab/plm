## 数据查询(Default) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `是`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`




### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_TIME`,
t1.`CREATOR`,
t1.`DC`,
t1.`DESCRIPTION`,
t1.`DISPLAY_NAME`,
concat_ws(',',t1.`DISPLAY_NAME`,ORGANIZATION_NAME) AS `DN`,
t1.`EMPLOYEE_NUMBER`,
t1.`EMPLOYEE_TYPE`,
t1.`ENABLE`,
t1.`ID`,
t1.`IDENTIFICATION_NUMBER`,
t1.`MAIL`,
t1.`MDEPARTMENT_ID`,
t1.`MDEPARTMENT_NAME`,
t1.`MOBILE`,
t1.`POSTAL_ADDRESS`,
t1.`TELEPHONE_NUMBER`,
t1.`TITLE`,
t1.`UID`,
t1.`UPDATER`,
t1.`UPDATE_TIME`,
t1.`USER_PASSWORD`
FROM `` t1 

WHERE t1.ENABLE = 1
```
