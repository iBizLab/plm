```sql
SELECT
t1.`COMMENT`,
t1.`CONTENT_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`RESULT_STATE`,
t1.`SEQUENCES`,
t1.`STAGE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
(SELECT CASE WHEN EXISTS (SELECT 1 FROM review_content_extend t1 JOIN relation t2 ON t2.id = t1.id JOIN review t3 ON t3.id = t2.PRINCIPAL_ID  WHERE t1.id = t1.`CONTENT_ID`  AND t3.state = '20') THEN 1 ELSE 0 END AS result) AS `WHETHER_REVIEW`
FROM `REVIEW_RESULT` t1 


```