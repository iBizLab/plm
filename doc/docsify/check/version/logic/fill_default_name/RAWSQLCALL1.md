<p class="panel-title"><b>执行sql语句</b></p>

```sql
select IDENTIFIER, `NAME` from `version`
where owner_id = ? and owner_type = ?
order by IDENTIFIER desc
limit 1

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).OWNER_ID(所属数据标识)`
2. `Default(传入变量).OWNER_TYPE(所属数据对象)`

重置参数`cur_version(当前版本)`，并将执行sql结果赋值给参数`cur_version(当前版本)`
