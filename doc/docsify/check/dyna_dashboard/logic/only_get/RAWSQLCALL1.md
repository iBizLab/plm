<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 
WHERE t1.DYNADASHBOARDID = ?

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).DYNADASHBOARDID(动态数据看板标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
