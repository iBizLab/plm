<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as work_item_data FROM work_item WHERE PROJECT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`has_child_data(存在子数据)`，并将执行sql结果赋值给参数`has_child_data(存在子数据)`
