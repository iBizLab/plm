<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as discuss_post_count FROM `comment` where OWNER_TYPE = 'DISCUSS_POST' AND PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
