## 我参与的(my_participate) <!-- {docsify-ignore-all} -->



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
* **RUN存在1:N（EXISTS (SELECT)）DER1N_RUN_TEST_PLAN_PLAN_ID**<br>
连接关系：[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)<br>
连接实体：[测试计划](module/TestMgmt/test_plan)<br>
连接条件：(`EXECUTOR_ID(执行人标识)` EQ `用户上下文.srfpersonid`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE EXISTS(SELECT * FROM `RUN` t51 
 WHERE 
 t1.`ID` = t51.`PLAN_ID`  AND  ( t51.`EXECUTOR_ID` = #{ctx.sessioncontext.srfpersonid} ) )
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