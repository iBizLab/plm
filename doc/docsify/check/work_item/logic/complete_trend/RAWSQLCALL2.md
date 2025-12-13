<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `seven_ago_completed` from work_item t1, work_item_state t2 
where t1.STATE = t2.id and t2.`TYPE` = 'completed'
and datediff(curdate(), t1.COMPLETED_AT) >= 7  
and t1.PROJECT_ID = ? 
and t1.IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`

重置参数`work_item(工作项对象)`，并将执行sql结果赋值给参数`work_item(工作项对象)`
