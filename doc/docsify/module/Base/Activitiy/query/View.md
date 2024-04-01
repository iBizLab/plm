## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `全部数据`

> [!ATTENTION|label:存在长文本属性]
>
> `AUDITINFO(审计信息)`




### 数据库SQL语句

#### MYSQL5

```sql
SELECT
t1.`AUDITINFO`,
t1.`AUDITTYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IPADDRESS`,
t1.`NAME`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OPPERSONID`,
t1.`OPPERSONNAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ACTIVITIY` t1 


```
