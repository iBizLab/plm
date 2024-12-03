```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.id !=null ">  t1.`ID` <> #{ctx.datacontext.id}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.datacontext.name !=null ">  t1.`NAME` = #{ctx.datacontext.name}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.datacontext.owner_id !=null ">  t1.`OWNER_ID` = #{ctx.datacontext.owner_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`OWNER_TYPE` = #{ctx.datacontext.owner_type}  AND  <choose><when test="ctx.datacontext.owner_subtype !=null ">  t1.`OWNER_SUBTYPE` = #{ctx.datacontext.owner_subtype}  </when><otherwise>1=1</otherwise></choose> )
```