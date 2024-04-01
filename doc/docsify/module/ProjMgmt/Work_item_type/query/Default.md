## 数据查询(Default) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `是`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `全部数据`

> [!ATTENTION|label:存在长文本属性]
>
> `ICON(图标)`




### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 


```
