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
  * `EXECUTOR_NAME(执行人)`
  * `TITLE(标题)`
  * `SHOW_IDENTIFIER(编号)`
  * `UPDATE_MAN(更新人)`
  * `TARGET_LIBRARY_ID(目标测试库)`
  * `TARGET_TEMPLATE(目标模板)`
  * `ACTUAL_WORKLOAD(实际工时)`
  * `ESTIMATED_WORKLOAD(预估工时)`
  * `REMAINING_WORKLOAD(剩余工时)`
  * `WORKLOAD_SCHEDULE(工时进度)`
  * `LIBRARY_IDENTIFIER(测试库标识)`
  * `TEST_LIBRARY_NAME(所属测试库)`
  * `MAINTENANCE_NAME(维护人)`
  * `MAINTENANCE_ID(维护人)`
  * `TEST_LIBRARY_ID(测试库)`
  * `SUITE_ID(用例模块标识)`
  * `RUN_STATUS(执行结果)`
  * `TYPE(用例类型)`
  * `LEVEL(重要程度)`
  * `TEST_TYPE(测试类型)`
  * `STATE(状态)`
  * `REVIEW_RESULT_STATE(评审结果)`
  * `ID(标识)`
  * `LATEST_EXECUTED(最新执行结果)`
  * `IS_DELETED(是否已删除)`
  * `CREATE_TIME(建立时间)`
  * `CREATE_MAN(建立人)`
  * `LIBRARY_IS_DELETED(测试库是否删除)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`REVIEW_RESULT_STATE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE_ID`,
t1.`TEST_LIBRARY_ID`,
t11.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`
FROM `TEST_CASE` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`TEST_LIBRARY_ID` = t11.`ID` 


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