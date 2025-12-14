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
t1.`AI_AGENT_CONTEXT_ID`,
t11.`NAME` AS `AI_AGENT_CONTEXT_NAME`,
t11.`AI_AGENT_ID`,
t21.`NAME` AS `AI_AGENT_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_TOP`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`SESSION_ID`,
t1.`STATUS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `AI_AGENT_CONVERSATION` t1 
LEFT JOIN `AI_AGENT_CONTEXT` t11 ON t1.`AI_AGENT_CONTEXT_ID` = t11.`ID` 
LEFT JOIN `AI_AGENT` t21 ON t11.`AI_AGENT_ID` = t21.`ID` 


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