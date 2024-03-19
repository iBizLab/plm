## 当前产品(Cur_product) <!-- {docsify-ignore-all} -->



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

(`PRODUCT_ID(产品标识)` EQ `数据上下文.product_id` AND `PRODUCT_ID(产品标识)` EQ `数据上下文.id`)



### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.product_id !=null ">  t1.`PRODUCT_ID` = #{ctx.datacontext.product_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PRODUCT_ID` = #{ctx.datacontext.id} )
```
