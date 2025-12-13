<p class="panel-title"><b>执行sql语句</b></p>

```sql
select id as first_stage_id from stage 
where  RELEASE_ID is null
order by `SEQUENCE` asc limit 1

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
