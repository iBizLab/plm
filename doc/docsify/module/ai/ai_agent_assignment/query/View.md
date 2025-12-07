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
t11.`CODE_NAME` AS `CONTEXT_CODE_NAME`,
t1.`CONTEXT_ID`,
t11.`NAME` AS `CONTEXT_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SYSTEM_FLAG`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USE_TAG`
FROM `AI_AGENT_ASSIGNMENT` t1 
LEFT JOIN `AI_AGENT_CONTEXT` t11 ON t1.`CONTEXT_ID` = t11.`ID` 


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