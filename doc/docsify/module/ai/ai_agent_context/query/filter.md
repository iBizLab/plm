## 业务过滤(filter) <!-- {docsify-ignore-all} -->



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



### 查询条件

((`FIND_IN_SET(#{ctx.webcontext.srfaiagentscope}, t1.`SCOPES`) > 0` OR `SCOPES(业务范围)` ISNULL))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACTIVE`,
t1.`AI_AGENT_ID`,
t11.`NAME` AS `AI_AGENT_NAME`,
t1.`AI_MODEL_ID`,
t21.`NAME` AS `AI_MODEL_NAME`,
t1.`CODE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ENABLE_SUGGESTED_QUESTIONS`,
t1.`ENABLE_THINKING`,
t1.`ENABLE_TOOLS`,
t1.`GENERATION_MODE`,
t1.`ID`,
t1.`IS_DEFAULT`,
t1.`MAX_INPUT_TOKENS`,
t1.`MEMORY_MAX_TURNS`,
t1.`MEMORY_MODE`,
t1.`NAME`,
t1.`SCOPES`,
t1.`SEQUENCE`,
t1.`STREAM`,
t1.`SYSTEM_FLAG`,
t1.`TEMPERATURE`,
t1.`TOOL_MAX_CALLS`,
t1.`TOP_P`,
t1.`TRIMMING_STRATEGY`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_AGENT_CONTEXT` t1 
LEFT JOIN `AI_AGENT` t11 ON t1.`AI_AGENT_ID` = t11.`ID` 
LEFT JOIN `AI_MODEL` t21 ON t1.`AI_MODEL_ID` = t21.`ID` 

WHERE ( ( FIND_IN_SET(#{ctx.webcontext.srfaiagentscope}, t1.`SCOPES`) > 0  OR  t1.`SCOPES` IS NULL ) )
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