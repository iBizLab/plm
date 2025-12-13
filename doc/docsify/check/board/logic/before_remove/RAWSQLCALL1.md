<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as project_with_board_num from `board` where project_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PROJECT_ID(产品标识)`

重置参数`project(项目)`，并将执行sql结果赋值给参数`project(项目)`
