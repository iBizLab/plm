<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT *
FROM activitiy
WHERE OBJECTID = ? AND AUDITTYPE = 'archive'
ORDER BY CREATE_TIME DESC
LIMIT 1;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`activity_info(活动信息)`，并将执行sql结果赋值给参数`activity_info(活动信息)`
