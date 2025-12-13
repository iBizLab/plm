<p class="panel-title"><b>执行sql语句</b></p>

```sql
update stage t1, stage t2 
set t1.is_current = t2.is_current, t1.operated_time = t2.operated_time 
where t1.release_id = t2.release_id and t1.pid = ? and t2.pid = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `replace(替换阶段).replace_id`
2. `Default(传入变量).ID(标识)`

