## 非缺陷的工作项类型(Project_work_item_type_not_bug) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`

> [!ATTENTION|label:存在长文本属性]
>
> `ICON(图标)`



### 查询条件

(``PROJECT_TYPE` = (select type from project where id=#{ctx.webcontext.project_id}) and `group` <> 'bug'`)



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

WHERE ( `PROJECT_TYPE` = (select type from project where id=#{ctx.webcontext.project_id}) and `group` <> 'bug' )
```
