## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->



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

* `全部数据`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t11.`CASE_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`REMARK`,
t1.`RUN_ID`,
t21.`TITLE` AS `RUN_TITLE`,
t1.`STATUS`,
t1.`STEPS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN_HISTORY` t1 
LEFT JOIN `RUN` t11 ON t1.`RUN_ID` = t11.`ID` 
LEFT JOIN `TEST_CASE` t21 ON t11.`CASE_ID` = t21.`ID` 


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