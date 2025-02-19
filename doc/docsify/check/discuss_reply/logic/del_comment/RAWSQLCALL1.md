<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat - 2 
where exists(select 1 from `comment` t2 
where t2.principal_id = t1.id 
and t2.principal_type = 'DISCUSS_REPLY' and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

