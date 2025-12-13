<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `shift_in_count` from sprint_alteration where SPRINT_ID = ? and `type` = '1' 

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).sprint`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
