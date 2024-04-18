<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT * FROM run_history t1 WHERE t1.RUN_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).RUN_ID(执行用例标识)`

重置参数`run_history_list(执行结果列表)`，并将执行sql结果赋值给参数`run_history_list(执行结果列表)`
