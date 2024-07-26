## 项目集工作下的资源工作项(under_work_resource) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
</el-row>

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `指定属性组`
*  **属性组：**[资源分配](#)
  * `ASSIGNEE_NAME(负责人)`
  * `TITLE(标题)`
  * `PROJECT_IDENTIFIER(项目标识)`
  * `PROJECT_TYPE(项目类型)`
  * `PROJECT_NAME(所属项目)`
  * `PROJECT_ID(项目)`
  * `WORK_ITEM_TYPE_ID(工作项类型)`
  * `WORK_ITEM_TYPE_NAME(工作项类型)`
  * `END_AT(截止时间)`
  * `START_AT(开始时间)`
  * `STATE(状态)`
  * `ID(标识)`
  * `IDENTIFIER(编号)`
  * `SHOW_IDENTIFIER(编号)`
  * `ASSIGNEE_ID(负责人)`
  * `REMAINING_WORKLOAD(剩余工时)`
  * `ESTIMATED_WORKLOAD(预估工时)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND (`exists (select 1 from `work` t2, project t3 where t1.PROJECT_ID = t3.id and t2.PRINCIPAL_ID = t3.id 
and t2.PRINCIPAL_TYPE = 'project' and t2.PORTFOLIO_ID =#{ctx.webcontext.portfolio_id})` OR `exists (select 1 from project t2 where t1.PROJECT_ID = t2.id and t2.IS_ARCHIVED = 0 and t2.IS_DELETED  = 0)
and exists (select 1 from `work` a1, `work` a2 where a1.PORTFOLIO_ID  = a2.PRINCIPAL_ID   and a1.PRINCIPAL_ID = t1.project_id and a2.PORTFOLIO_ID = #{ctx.webcontext.portfolio_id})`) AND (`t1.START_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}` OR `t1.END_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}` OR `(t1.start_at <= #{ctx.webcontext.n_date_scope_gtandeq}
and t1.end_at >= #{ctx.webcontext.n_date_scope_ltandeq})`))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( exists (select 1 from `work` t2, project t3 where t1.PROJECT_ID = t3.id and t2.PRINCIPAL_ID = t3.id 
and t2.PRINCIPAL_TYPE = 'project' and t2.PORTFOLIO_ID =#{ctx.webcontext.portfolio_id})  OR  exists (select 1 from project t2 where t1.PROJECT_ID = t2.id and t2.IS_ARCHIVED = 0 and t2.IS_DELETED  = 0)
and exists (select 1 from `work` a1, `work` a2 where a1.PORTFOLIO_ID  = a2.PRINCIPAL_ID   and a1.PRINCIPAL_ID = t1.project_id and a2.PORTFOLIO_ID = #{ctx.webcontext.portfolio_id}) )  AND  ( t1.START_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  t1.END_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  (t1.start_at <= #{ctx.webcontext.n_date_scope_gtandeq}
and t1.end_at >= #{ctx.webcontext.n_date_scope_ltandeq}) ) )
```

</el-dialog>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
                MYSQL5 : false
        
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>