```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `` t1 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```