```sql
SELECT
t1.`ID`,
t1.`NAME`,
t1.`TYPE`
FROM (SELECT
'LIBRARY' AS `TYPE`,v1.`ID` AS `ID`
,v1.`NAME` AS `NAME`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `LIBRARY` t1 
) v1
UNION ALL
SELECT
'PRODUCT' AS `TYPE`,v2.`ID` AS `ID`
,v2.`NAME` AS `NAME`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `PRODUCT` t1 
) v2
UNION ALL
SELECT
'PROJECT' AS `TYPE`,v3.`ID` AS `ID`
,v3.`NAME` AS `NAME`
FROM
(SELECT
t1.`ID`,
t1.`NAME`
FROM `PROJECT` t1 
) v3
) t1 


```