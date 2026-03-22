## DEFAULT(Default) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
&nbsp;<el-tag @click="POSTGRESQL = true">POSTGRESQL</el-tag>
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
t1.`ACTIVE`,
t1.`AI_AGENT_ID`,
t21.`NAME` AS `AI_AGENT_NAME`,
t1.`AI_MODEL_ID`,
t31.`NAME` AS `AI_MODEL_NAME`,
t1.`CODE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ENABLE_SEARCHING`,
t1.`ENABLE_SUGGESTED_QUESTIONS`,
t1.`ENABLE_THINKING`,
t1.`ENABLE_TOOLS`,
t1.`FLOW_MODE`,
t1.`GENERATION_MODE`,
t1.`ID`,
t1.`IS_DEFAULT`,
t1.`KB_MODE`,
t1.`MAX_INPUT_TOKENS`,
t1.`MEMORY_DOC_TAG`,
t1.`MEMORY_KB_TAG`,
t1.`MEMORY_MAX_TURNS`,
t1.`MEMORY_MODE`,
t1.`NAME`,
t1.`PUBLISH_SKILL`,
t1.`RERANK`,
t1.`RERANK_MODEL`,
t1.`RERANK_MODEL_ID`,
t1.`SCOPES`,
t1.`SEQUENCE`,
t1.`SIMILARITY_THRESHOLD`,
t1.`SPEC_KB_ID`,
t11.`NAME` AS `SPEC_KB_NAME`,
t1.`STREAM`,
t1.`SYSTEM_FLAG`,
t1.`TEMPERATURE`,
t1.`TOOL_MAX_CALLS`,
t1.`TOP_K`,
t1.`TOP_P`,
t1.`TRIMMING_STRATEGY`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USE_KG`,
t1.`VECTOR_SIMILARITY_WEIGHT`
FROM `AI_AGENT_CONTEXT` t1 
LEFT JOIN `AI_KNOWLEDGE_BASE` t11 ON t1.`SPEC_KB_ID` = t11.`ID` 
LEFT JOIN `AI_AGENT` t21 ON t1.`AI_AGENT_ID` = t21.`ID` 
LEFT JOIN `AI_MODEL` t31 ON t1.`AI_MODEL_ID` = t31.`ID` 


```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.ACTIVE,
t1.AI_AGENT_ID,
t11.NAME AS AI_AGENT_NAME,
t1.AI_MODEL_ID,
t21.NAME AS AI_MODEL_NAME,
t1.CODE_NAME,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.DESCRIPTION,
t1.ENABLE_SUGGESTED_QUESTIONS,
t1.ENABLE_THINKING,
t1.ENABLE_TOOLS,
t1.FLOW_MODE,
t1.GENERATION_MODE,
t1.ID,
t1.IS_DEFAULT,
t1.KB_MODE,
t1.MAX_INPUT_TOKENS,
t1.MEMORY_MAX_TURNS,
t1.MEMORY_MODE,
t1.NAME,
t1.RERANK,
t1.RERANK_MODEL,
t1.RERANK_MODEL_ID,
t1.SCOPES,
t1.SEQUENCE,
t1.SIMILARITY_THRESHOLD,
t1.STREAM,
t1.SYSTEM_FLAG,
t1.TEMPERATURE,
t1.TOOL_MAX_CALLS,
t1.TOP_K,
t1.TOP_P,
t1.TRIMMING_STRATEGY,
t1.UPDATE_MAN,
t1.UPDATE_TIME,
t1.USE_KG,
t1.VECTOR_SIMILARITY_WEIGHT
FROM AI_AGENT_CONTEXT t1 
LEFT JOIN AI_AGENT t11 ON t1.AI_AGENT_ID = t11.ID 
LEFT JOIN AI_MODEL t21 ON t1.AI_MODEL_ID = t21.ID 


```

</el-dialog>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
                MYSQL5 : false
                POSTGRESQL : false
        
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>