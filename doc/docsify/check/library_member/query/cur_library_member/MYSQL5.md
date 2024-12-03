```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.library_id !=null ">  t1.`LIBRARY_ID` = #{ctx.datacontext.library_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`LIBRARY_ID` = #{ctx.datacontext.id} )
```