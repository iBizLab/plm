<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE project_release t1, stage t2 
SET t1.`STATUS` = t2.id 
WHERE t2.RELEASE_ID = t1.ID  
AND t2.pid = ? 
AND t1.`STATUS` = (SELECT id FROM stage WHERE release_id = t1.ID AND pid = ?)

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `replace(替换阶段).replace_id`
2. `Default(传入变量).ID(标识)`

