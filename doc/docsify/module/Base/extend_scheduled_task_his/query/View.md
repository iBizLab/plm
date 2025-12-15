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

> [!ATTENTION|label:存在长文本属性]
>
> `PAYLOAD(任务执行参数)`
>
> `RESULT(执行结果)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ENABLE`,
t1.`FINISHED_AT`,
t1.`ID`,
t1.`MAX_RETRY`,
t1.`NAME`,
t1.`PAYLOAD`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`RESULT`,
t1.`RESULT_MESSAGE`,
t1.`RETRY_COUNT`,
t1.`SCHEDULED_AT`,
t1.`STARTED_AT`,
t1.`STATUS`,
t1.`TASK_TYPE`,
t11.`NAME` AS `TASK_TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `EXTEND_SCHEDULED_TASK_HIS` t1 
LEFT JOIN `EXTEND_TASK_TYPE` t11 ON t1.`TASK_TYPE` = t11.`ID` 


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