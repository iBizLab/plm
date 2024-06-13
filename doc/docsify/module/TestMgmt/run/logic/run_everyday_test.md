## 每日测试次数统计 <!-- {docsify-ignore-all} -->

   报表每日测试次数统计数据源

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./run_everyday_test#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./run_everyday_test#end1 {"结束"}]]
state "直接SQL调用" as RAWSQLCALL1  [[$./run_everyday_test#rawsqlcall1 {"直接SQL调用"}]]


Begin --> RAWSQLCALL1
RAWSQLCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `result(结果)`

#### 直接SQL调用 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    COALESCE(SUM(case_data.count), 0) AS count -- 每日测试次数统计
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i + b.i * 10 + c.i * 100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) BETWEEN ? AND ?
     ) date_series
         LEFT JOIN (
    SELECT
        DATE(rh.CREATE_TIME) AS create_date,
        COUNT(rh.ID) AS count
    FROM run_history rh
             JOIN run r ON rh.RUN_ID = r.ID
             JOIN test_case ts ON r.CASE_ID = ts.ID
    WHERE ts.TEST_LIBRARY_ID = ? AND rh.CREATE_TIME BETWEEN ? AND ?
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.PLAN_ID, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.EXECUTOR_ID, ?))
      AND ((? IS NULL OR ? = '') OR (? IS NULL OR ? = '') OR r.EXECUTED_AT BETWEEN ? and ? )
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.STATUS, ?))
    GROUP BY DATE(rh.CREATE_TIME)
) case_data ON date_series.date = case_data.create_date
GROUP BY date_series.date
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).n_test_library_id_eq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`
8. `Default(传入变量).n_plan_id_eq`
9. `Default(传入变量).n_plan_id_eq`
10. `Default(传入变量).n_plan_id_eq`
11. `Default(传入变量).n_executor_id_eq`
12. `Default(传入变量).n_executor_id_eq`
13. `Default(传入变量).n_executor_id_eq`
14. `Default(传入变量).n_executed_at_gtandeq`
15. `Default(传入变量).n_executed_at_gtandeq`
16. `Default(传入变量).n_executed_at_ltandeq`
17. `Default(传入变量).n_executed_at_ltandeq`
18. `Default(传入变量).n_executed_at_gtandeq`
19. `Default(传入变量).n_executed_at_ltandeq`
20. `Default(传入变量).n_status_eq`
21. `Default(传入变量).n_status_eq`
22. `Default(传入变量).n_status_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|结果|result|数据对象列表|||
