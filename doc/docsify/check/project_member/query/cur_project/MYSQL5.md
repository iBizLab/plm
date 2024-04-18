```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.project_id !=null ">  t1.`PROJECT_ID` = #{ctx.datacontext.project_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PROJECT_ID` = #{ctx.datacontext.id} )
```