<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(t.id) as my_created_work_item FROM work_item t where  t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
