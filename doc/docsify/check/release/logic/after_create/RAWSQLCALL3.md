<p class="panel-title"><b>执行sql语句</b></p>

```sql
update `project_release` t1, `stage` t2 
set t1.`status` = t2.`id`
where t1.`id` = ? and t1.`id` = t2.`RELEASE_ID` and t2.`is_current` = 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

