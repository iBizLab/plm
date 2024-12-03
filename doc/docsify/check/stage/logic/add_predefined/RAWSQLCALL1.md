<p class="panel-title"><b>执行sql语句</b></p>

```sql
insert into stage(ID, `CREATE_MAN`, `CREATE_TIME`, `NAME`, `RELEASE_ID`, `IS_CURRENT`, `PID`, `COLOR`, `TYPE`, `SEQUENCE`)
select uuid(), ?, ?, ?, id, 0, ?, ?, ?, ? from project_release
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CREATE_MAN(建立人)`
2. `Default(传入变量).CREATE_TIME(建立时间)`
3. `Default(传入变量).NAME(名称)`
4. `Default(传入变量).ID(标识)`
5. `Default(传入变量).COLOR(颜色)`
6. `Default(传入变量).TYPE(阶段类型)`
7. `Default(传入变量).SEQUENCE(排序)`

