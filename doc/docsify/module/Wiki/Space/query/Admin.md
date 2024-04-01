## 管理员(Admin) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`




### 查询连接
* **SPACE_MEMBER存在1:N（EXISTS (SELECT)）DER1N_SPACE_MEMBER_SPACE_SPACE_ID**<br>
连接关系：[DER1N_SPACE_MEMBER_SPACE_SPACE_ID](der/DER1N_SPACE_MEMBER_SPACE_SPACE_ID)<br>
连接实体：[空间](module/Wiki/Space)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfpersonid` AND `ROLE_ID(角色)` EQ `'admin'`)<br>


### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
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
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'admin' ) )
```
