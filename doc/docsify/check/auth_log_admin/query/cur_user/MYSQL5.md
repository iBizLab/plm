```sql
SELECT
t1.`AUTHAGENT`,
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`DOMAINS`,
t1.`IPADDR`,
t1.`LOGID`,
t1.`MACADDR`,
t1.`PERSONNAME`,
t1.`USERAGENT`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZAUTHLOG` t1 

WHERE ( t1.`USERID` = #{ctx.sessioncontext.srfpersonid} )
```