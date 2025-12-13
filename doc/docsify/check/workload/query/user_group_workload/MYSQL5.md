```sql
select t2.ID as `principal_id`,
t2.NAME,  
t1.DURATION,
t1.register_date,
t1.ID
from `workload` t1,  `user_group` t2
WHERE exists (select 1 from `member` t3 where t3.USER_ID = t1.CREATE_MAN and t2.id = t3.OWNER_ID  and t3.OWNER_TYPE = 'GROUP')
```