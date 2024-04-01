## 移动至(Choose_move) <!-- {docsify-ignore-all} -->

确认迭代完成时，选择移动至其他迭代

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `是`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`




### 数据库SQL语句

#### MYSQL5

```sql
select null as id, '待分配工作项' as name
union all
select t1.id, t1.name
from `sprint` `t1`

WHERE (`id` <> #{ctx.webcontext.sprint_id} and `status` <>  '3' )
```
