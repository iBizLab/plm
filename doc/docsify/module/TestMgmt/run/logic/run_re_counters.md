## 执行用例关联分页计数器 <!-- {docsify-ignore-all} -->

   计算分页下关联事项的条数

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
state "开始" as Begin <<start>> [[$./run_re_counters#begin {"开始"}]]
state "测试用例关联产品需求" as RAWSQLCALL1  [[$./run_re_counters#rawsqlcall1 {"测试用例关联产品需求"}]]
state "测试用例关联工作项" as RAWSQLCALL2  [[$./run_re_counters#rawsqlcall2 {"测试用例关联工作项"}]]
state "结束" as END1 <<end>> [[$./run_re_counters#end1 {"结束"}]]
state "执行用例关联缺陷" as RAWSQLCALL3  [[$./run_re_counters#rawsqlcall3 {"执行用例关联缺陷"}]]
state "执行用例结果附件" as RAWSQLCALL5  [[$./run_re_counters#rawsqlcall5 {"执行用例结果附件"}]]
state "测试用例执行历史" as RAWSQLCALL4  [[$./run_re_counters#rawsqlcall4 {"测试用例执行历史"}]]
state "合并查询计数器" as RAWSQLCALL6  [[$./run_re_counters#rawsqlcall6 {"合并查询计数器"}]]


Begin --> RAWSQLCALL1
RAWSQLCALL1 --> RAWSQLCALL2
RAWSQLCALL2 --> RAWSQLCALL3
RAWSQLCALL3 --> RAWSQLCALL5
RAWSQLCALL5 --> RAWSQLCALL4
RAWSQLCALL4 --> END1


@enduml
```


### 处理步骤说明

#### 测试用例关联产品需求 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS run_re_idea 
FROM
	idea t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'idea' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case' 
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND (
				t.`IS_DELETED` = 0 
			)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 测试用例关联工作项 :id=RAWSQLCALL2<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS run_re_work_item 
FROM
	work_item t, work_item_type t1 
WHERE t.work_item_type_id = t1.id
and t1.`group` <> 'bug'
AND	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'work_item' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case' 
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND (
				t.`IS_DELETED` = 0 
			)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 执行用例关联缺陷 :id=RAWSQLCALL3<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count( t.id ) AS run_re_bug from work_item t, work_item_type t1
where  t.`IS_DELETED` = 0 and t.work_item_type_id = t1.id 
and t1.`group` = 'bug'
and EXISTS ( select 1 from `RELATION` t2 
where t.`ID` = t2.`TARGET_ID` 
and  t2.`TARGET_TYPE` = 'work_item' and t2.`PRINCIPAL_TYPE` = 'run'
and t2.`PRINCIPAL_ID` = ?) 
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 执行用例结果附件 :id=RAWSQLCALL5<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS run_re_attachment
FROM
	attachment t 
WHERE
    t.owner_id = ? and t.owner_type = 'RUN'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 测试用例执行历史 :id=RAWSQLCALL4<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COUNT(t.id) AS run_re_run_history
FROM
    run_history t
WHERE
    t.run_id = ? 

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 合并查询计数器 :id=RAWSQLCALL6<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t1.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_re_idea,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_work_item
FROM
    `RELATION` t11
JOIN
    `test_case` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ?);
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
