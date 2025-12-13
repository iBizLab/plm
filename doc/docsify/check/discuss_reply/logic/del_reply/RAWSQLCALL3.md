<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat - ((2 * ?) + 5)  
where exists(select 1 from discuss_reply t2 where t1.id = t2.post_id and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).comment_num(回复评论数)`
2. `Default(传入变量).ID(标识)`

