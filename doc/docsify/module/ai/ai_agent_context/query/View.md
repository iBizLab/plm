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
> `CONTEXT_DEBUG_DATA(调试数据)`
>
> `CUSTOM_SUGGESTION_PROMPT(自定义建议提示词)`
>
> `DEFAULT_SYSTEM_PROMPT(默认系统提示词)`
>
> `TOOL_EXCEED_MESSAGE(工具调用超限提示语)`
>
> `WELCOME_MESSAGE(欢迎消息模板)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACTIVE`,
t1.`AI_AGENT_ID`,
t11.`NAME` AS `AI_AGENT_NAME`,
t1.`AI_MODEL_ID`,
t21.`NAME` AS `AI_MODEL_NAME`,
t1.`CODE_NAME`,
t1.`CONTEXT_DEBUG_DATA`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOM_SUGGESTION_PROMPT`,
t1.`DEFAULT_SYSTEM_PROMPT`,
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
t1.`SUGGESTED_QUESTIONS`,
t1.`SYSTEM_FLAG`,
t1.`TEMPERATURE`,
t1.`TOOL_EXCEED_MESSAGE`,
t1.`TOOL_MAX_CALLS`,
t1.`TOP_P`,
t1.`TRIMMING_STRATEGY`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WELCOME_MESSAGE`
FROM `AI_AGENT_CONTEXT` t1 
LEFT JOIN `AI_AGENT` t11 ON t1.`AI_AGENT_ID` = t11.`ID` 
LEFT JOIN `AI_MODEL` t21 ON t1.`AI_MODEL_ID` = t21.`ID` 


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