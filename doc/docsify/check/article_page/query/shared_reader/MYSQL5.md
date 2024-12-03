```sql
SELECT
t1.`ID`,
t1.`IS_SHARED`,
CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END AS `READ_SHARED`
FROM `PAGE` t1 

WHERE ( ( t1.`IS_SHARED` = '1'  OR  CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END = '1' )  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_DELETED` = 0 )
```