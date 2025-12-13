```sql
SELECT
t1.`CATEGORY`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`DURATION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
t1.`REGISTER_DATE`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE_ID`,
t11.`NAME` AS `TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD` t1 
LEFT JOIN `WORKLOAD_TYPE` t11 ON t1.`TYPE_ID` = t11.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  <choose><when test="ctx.webcontext.type_id !=null ">  t1.`TYPE_ID` = #{ctx.webcontext.type_id}  </when><otherwise>t1.`TYPE_ID` is null</otherwise></choose> )
```