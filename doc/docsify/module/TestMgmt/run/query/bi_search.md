## BI查询(bi_search) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[BI查询属性组](#)
  * `IS_NEWEST(是否最新)`
  * `EXECUTED_AT(执行时间)`
  * `CREATE_TIME(建立时间)`
  * `UPDATE_TIME(更新时间)`
  * `EXECUTOR_NAME(执行人)`
  * `UPDATE_MAN(更新人)`
  * `NAME(名称)`
  * `CREATE_MAN(建立人)`
  * `EXECUTOR_ID(执行人标识)`
  * `CUR_VERSION_ID(当前版本标识)`
  * `WORKLOAD_SCHEDULE(工时进度)`
  * `REMAINING_WORKLOAD(剩余工时)`
  * `RELATION_TOTAL_HISTORY(关联执行结果数)`
  * `RELATION_TOTAL_BUG(关联缺陷数)`
  * `ESTIMATED_WORKLOAD(预估工时)`
  * `ACTUAL_WORKLOAD(实际工时)`
  * `LIBRARY_NAME(所属测试库)`
  * `TYPE(用例类型)`
  * `LEVEL(重要程度)`
  * `STATE(评审状态)`
  * `MAINTENANCE_NAME(维护人)`
  * `TEST_TYPE(测试类型)`
  * `IDENTIFIER(编号)`
  * `LIBRARY_ID(测试库标识)`
  * `TITLE(标题)`
  * `SUITE_NAME(所属模块)`
  * `CASE_NAME(名称)`
  * `PLAN_NAME(测试计划)`
  * `PLAN_ID(测试计划标识)`
  * `CASE_ID(测试用例标识)`
  * `STATUS(执行结果)`
  * `PRIORITY(优先级)`
  * `ID(标识)`
  * `BI_PLAN_NAME(bi测试计划名称)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t11.`PRECONDITION`,
t1.`PRIORITY`,
(SELECT count(1) FROM relation t2 inner join work_item t3 on t3.id = t2.TARGET_ID and  t3.IS_DELETED = 0 inner join work_item_type t4 on t4.ID = t3.WORK_ITEM_TYPE_ID and t4.`GROUP` = 'bug' where t1.id = t2.PRINCIPAL_ID AND t2.TARGET_TYPE = 'work_item') AS `RELATION_TOTAL_BUG`,
(select count(1) from run_history where run_id = t1.`ID`) AS `RELATION_TOTAL_HISTORY`,
t1.`REMARK`,
t11.`STATE`,
t1.`STATUS`,
t1.`STEPS`,
t31.`SUITES`,
t11.`SUITE_ID`,
t31.`NAME` AS `SUITE_NAME`,
t11.`TEST_TYPE`,
t11.`TITLE`,
t11.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`CASE_ID` = t11.`ID` 
LEFT JOIN `TEST_PLAN` t21 ON t1.`PLAN_ID` = t21.`ID` 
LEFT JOIN `TEST_SUITE` t31 ON t11.`SUITE_ID` = t31.`ID` 
LEFT JOIN `LIBRARY` t41 ON t21.`LIBRARY_ID` = t41.`ID` 


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