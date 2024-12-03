```sql
SELECT
t1.`ACCESS_PASSWORD`,
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_TYPE`,
t1.`SHARED_BY`,
t1.`SHARED_PAGES`,
t1.`SHARED_TIME`,
t1.`SHOW_LOGO`,
t1.`SHOW_TITLE`
FROM `SPACE` t1 

WHERE ( exists(select 1 from `space_member` t2 where t2.`SPACE_ID` = t1.`ID` and 
t2.ROLE_ID = 'admin' and t2.USER_ID = #{ctx.sessioncontext.srfpersonid}) )
```