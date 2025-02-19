<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat + 2 
where t1.id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).POST_ID(讨论标识)`

