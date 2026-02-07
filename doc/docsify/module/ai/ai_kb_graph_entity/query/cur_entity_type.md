## 实体类型(cur_entity_type) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
&nbsp;<el-tag @click="POSTGRESQL = true">POSTGRESQL</el-tag>
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

(`KB_ID(知识库标识)` EQ `数据上下文.ai_knowledge_base`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CONFIDENCE`,
t1.`CONTEXT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`DOCUMENT_ID`,
t21.`NAME` AS `DOCUMENT_NAME`,
t1.`ID`,
t1.`KB_ID`,
t11.`NAME` AS `KB_NAME`,
t1.`KEYWORDS`,
t1.`NAME`,
t1.`NORMALIZED_NAME`,
t1.`REFERENCE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_KB_GRAPH_ENTITY` t1 
LEFT JOIN `AI_KNOWLEDGE_BASE` t11 ON t1.`KB_ID` = t11.`ID` 
LEFT JOIN `AI_KB_DOCUMENT` t21 ON t1.`DOCUMENT_ID` = t21.`ID` 

WHERE ( <choose><when test="ctx.datacontext.ai_knowledge_base !=null ">  t1.`KB_ID` = #{ctx.datacontext.ai_knowledge_base}  </when><otherwise>1=1</otherwise></choose> )
```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.CONFIDENCE,
t1.CONTEXT,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.DESCRIPTION,
t1.DOCUMENT_ID,
t21.NAME AS DOCUMENT_NAME,
t1.ID,
t1.KB_ID,
t11.NAME AS KB_NAME,
t1.KEYWORDS,
t1.NAME,
t1.NORMALIZED_NAME,
t1.REFERENCE_TYPE,
t1.TYPE,
t1.UPDATE_MAN,
t1.UPDATE_TIME
FROM AI_KB_GRAPH_ENTITY t1 
LEFT JOIN AI_KNOWLEDGE_BASE t11 ON t1.KB_ID = t11.ID 
LEFT JOIN AI_KB_DOCUMENT t21 ON t1.DOCUMENT_ID = t21.ID 

WHERE ( <choose><when test="ctx.datacontext.ai_knowledge_base !=null ">  t1.KB_ID = #{ctx.datacontext.ai_knowledge_base}  </when><otherwise>1=1</otherwise></choose> )
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