```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t41.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose> )  AND  t1.`ID` <> #{ctx.webcontext.principal_id} )
```