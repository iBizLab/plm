```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DEPARTMENT_ID`,
t1.`DISPLAY_NAME`,
t1.`EMAIL`,
t1.`EMPLOYEE_NUMBER`,
t1.`ID`,
t1.`JOB_ID`,
t1.`MOBILE`,
t1.`NAME`,
t1.`PASSWORD`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `` t1 

WHERE ( t1.`ID` = #{ctx.sessioncontext.srfpersonid} )
```