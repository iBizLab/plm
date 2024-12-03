```sql
select null as id, '待分配工作项' as name
union all
select t1.id, t1.name
from `sprint` `t1`

WHERE (`id` <> #{ctx.webcontext.sprint_id} and `status` <>  '3' )
```