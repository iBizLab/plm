```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t11.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM_TYPE` t11 ON t1.`WORK_ITEM_TYPE_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  AND  t21.`TARGET_TYPE` = 'work_item'  AND  t21.`PRINCIPAL_TYPE` = 'baseline' ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0 )
```