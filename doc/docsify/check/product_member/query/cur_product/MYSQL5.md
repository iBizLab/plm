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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.product_id !=null ">  t1.`PRODUCT_ID` = #{ctx.datacontext.product_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PRODUCT_ID` = #{ctx.datacontext.id} )
```