```sql
SELECT
t1.`ACTIVE`,
t1.`CONFIDENCE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`KB_ID`,
t31.`NAME` AS `KB_NAME`,
t1.`NAME`,
t1.`OBJECT_ID`,
t21.`NAME` AS `OBJECT_NAME`,
t1.`PREDICATE`,
t1.`SUBJECT_ID`,
t11.`NAME` AS `SUBJECT_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_KB_GRAPH_RELATION` t1 
LEFT JOIN `AI_KB_GRAPH_ENTITY` t11 ON t1.`SUBJECT_ID` = t11.`ID` 
LEFT JOIN `AI_KB_GRAPH_ENTITY` t21 ON t1.`OBJECT_ID` = t21.`ID` 
LEFT JOIN `AI_KNOWLEDGE_BASE` t31 ON t1.`KB_ID` = t31.`ID` 

WHERE ( <choose><when test="ctx.datacontext.ai_knowledge_base !=null ">  t1.`KB_ID` = #{ctx.datacontext.ai_knowledge_base}  </when><otherwise>1=1</otherwise></choose> )
```