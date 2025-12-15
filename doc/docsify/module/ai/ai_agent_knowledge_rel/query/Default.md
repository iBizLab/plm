## DEFAULT(Default) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
</el-row>

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `是`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AI_AGENT_ID`,
t21.`NAME` AS `AI_AGENT_NAME`,
t1.`AI_KNOWLEDGE_BASE_ID`,
t11.`NAME` AS `AI_KNOWLEDGE_BASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_AGENT_KNOWLEDGE_REL` t1 
LEFT JOIN `AI_KNOWLEDGE_BASE` t11 ON t1.`AI_KNOWLEDGE_BASE_ID` = t11.`ID` 
LEFT JOIN `AI_AGENT` t21 ON t1.`AI_AGENT_ID` = t21.`ID` 


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