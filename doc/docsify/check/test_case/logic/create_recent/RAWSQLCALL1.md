<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE `WORKLOAD` SET IDENTIFIER = ?, RECENT_PARENT = ?, RECENT_PARENT_IDENTIFIER = ?, RECENT_PARENT_NAME = ?, `NAME` = ?
WHERE PRINCIPAL_ID = ? and PRINCIPAL_TYPE = 'TEST_CASE'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(编号)`
2. `Default(传入变量).TEST_LIBRARY_ID(测试库)`
3. `Default(传入变量).LIBRARY_IDENTIFIER(测试库标识)`
4. `Default(传入变量).TEST_LIBRARY_NAME(所属测试库)`
5. `Default(传入变量).TITLE(标题)`
6. `Default(传入变量).ID(标识)`

