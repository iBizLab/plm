```sql
SELECT
t11.`NAME` AS `DOCUMENT_NAME`,
t11.`TYPE` AS `DOCUMENT_TYPE`,
t1.`ID`,
t1.`NAME`,
t1.`PATH`,
t1.`PID`,
t1.`POSITIONS`,
t1.`SEQUENCE`,
t1.`SOURCE_COUNT`,
t1.`SOURCE_INDICES`,
t1.`TAGS`,
t1.`TYPE`
FROM `AI_KB_CHUNK` t1 
LEFT JOIN `AI_KB_DOCUMENT` t11 ON t1.`DOCUMENT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.ai_kb_document !=null ">  t1.`DOCUMENT_ID` = #{ctx.datacontext.ai_kb_document}  </when><otherwise>1=1</otherwise></choose> )
```