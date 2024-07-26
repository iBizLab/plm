## 只读用户(reader) <!-- {docsify-ignore-all} -->



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

* `默认（全部查询列）`




### 查询连接
* **TEST_PLAN相关N:1（INNER JOIN）DER1N_RUN_TEST_PLAN_PLAN_ID**<br>
连接关系：[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)<br>
连接实体：[测试计划](module/TestMgmt/test_plan)<br>
    * **LIBRARY相关N:1（INNER JOIN）DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID**<br>
连接关系：[DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID](der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID)<br>
连接实体：[测试库](module/TestMgmt/library)<br>
      * **LIBRARY_MEMBER存在1:N（EXISTS (SELECT)）DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID**<br>
连接关系：[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)<br>
连接实体：[测试库](module/TestMgmt/library)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfpersonid`)<br>




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
t1.`REMARK`,
t11.`STATE`,
t1.`STATUS`,
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

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t51 
 WHERE 
 t41.`ID` = t51.`LIBRARY_ID`  AND  ( t51.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
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