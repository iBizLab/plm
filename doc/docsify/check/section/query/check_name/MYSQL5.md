```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

WHERE ( t1.`ID` <> #{ctx.datacontext.id}  AND  t1.`NAME` = #{ctx.datacontext.name}  AND  t1.`OWNER_ID` = #{ctx.datacontext.owner_id}  AND  t1.`OWNER_TYPE` = #{ctx.datacontext.owner_type}  AND  t1.`OWNER_SUBTYPE` = #{ctx.datacontext.owner_subtype} )
```