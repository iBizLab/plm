<p class="panel-title"><b>执行sql语句</b></p>

```sql
select
	*
from
	work_item
where
	SPRINT_ID = ?
	and IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `sprint(循环迭代对象).ID(标识)`

将执行sql结果赋值给参数`items(选中工作项)`
