```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader'  AND  t11.`OWNER_TYPE` = 'DISCUSS' ) )
```