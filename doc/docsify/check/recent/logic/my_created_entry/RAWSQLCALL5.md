<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT (
    (SELECT count(id) FROM work_item WHERE CREATE_MAN = ?) +
    (SELECT count(id) FROM idea WHERE CREATE_MAN = ?) +
    (SELECT count(id) FROM ticket WHERE CREATE_MAN = ?) +
    (SELECT count(id) FROM test_case WHERE CREATE_MAN = ?)
) AS my_created_total
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`
3. `用户全局对象.srfpersonid`
4. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
