## 我创建的事项 <!-- {docsify-ignore-all} -->

   查询当前用户创建的事项

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
state "开始" as Begin <<start>> [[$./my_created_entry#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./my_created_entry#end1 {"结束"}]]
state "我创建的工作项" as RAWSQLCALL1  [[$./my_created_entry#rawsqlcall1 {"我创建的工作项"}]]
state "我创建的产品需求" as RAWSQLCALL2  [[$./my_created_entry#rawsqlcall2 {"我创建的产品需求"}]]
state "我创建的工单" as RAWSQLCALL3  [[$./my_created_entry#rawsqlcall3 {"我创建的工单"}]]
state "我创建的测试用例" as RAWSQLCALL4  [[$./my_created_entry#rawsqlcall4 {"我创建的测试用例"}]]
state "求和" as RAWSQLCALL5  [[$./my_created_entry#rawsqlcall5 {"求和"}]]


Begin --> RAWSQLCALL1
RAWSQLCALL1 --> RAWSQLCALL2
RAWSQLCALL2 --> RAWSQLCALL3
RAWSQLCALL3 --> RAWSQLCALL4
RAWSQLCALL4 --> RAWSQLCALL5
RAWSQLCALL5 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 我创建的工作项 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(t.id) as my_created_work_item FROM work_item t where  t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 我创建的产品需求 :id=RAWSQLCALL2<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的产品需求
SELECT count(t.id) as my_created_idea FROM idea t where t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 我创建的工单 :id=RAWSQLCALL3<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的工单
SELECT count(t.id) as my_created_ticket FROM ticket t where  t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 我创建的测试用例 :id=RAWSQLCALL4<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的测试用例
SELECT count(t.id) as my_created_test_case FROM test_case t where t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`

#### 求和 :id=RAWSQLCALL5<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



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



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[最近访问(RECENT)](module/Base/recent.md)||
|filter|filter|过滤器|||
|我负责的事项|my_assignee|分页查询|||
|temp_obj|temp_obj|数据对象|||
