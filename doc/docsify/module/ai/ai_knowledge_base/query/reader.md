## 只读用户(reader) <!-- {docsify-ignore-all} -->



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




### 查询连接
* **AI_KB_MEMBER存在1:N（EXISTS (SELECT)）DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID**<br>
连接关系：[DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID)<br>
连接实体：[知识库](module/ai/ai_knowledge_base)<br>
连接条件：(`USER_ID(标识)` EQ `用户上下文.srfpersonid` AND `ROLE_ID(角色)` EQ `'reader'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CHAT_MODEL`,
t1.`CHAT_MODEL_ID`,
t1.`CHUNK_METHOD`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`EMBEDDING_MODEL`,
t1.`EMBEDDING_MODEL_ID`,
t1.`ENABLE`,
t1.`GUIDANCE_PROMPT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`RERANK`,
t1.`RERANK_MODEL`,
t1.`RERANK_MODEL_ID`,
t1.`SIMILARITY_THRESHOLD`,
t1.`SOURCE_ID`,
t1.`SOURCE_NAME`,
t1.`TAG_SETS`,
t1.`TOP_K`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USE_KG`,
t1.`VECTOR_SIMILARITY_WEIGHT`,
t1.`VISIBILITY`
FROM `AI_KNOWLEDGE_BASE` t1 

WHERE EXISTS(SELECT * FROM `AI_KB_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`KB_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader' ) )
```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.CHAT_MODEL,
t1.CHAT_MODEL_ID,
t1.CHUNK_METHOD,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.DESCRIPTION,
t1.EMBEDDING_MODEL,
t1.EMBEDDING_MODEL_ID,
t1.ENABLE,
t1.GUIDANCE_PROMPT,
t1.ID,
t1.IS_DELETED,
t1.NAME,
t1.RERANK,
t1.RERANK_MODEL,
t1.RERANK_MODEL_ID,
t1.SIMILARITY_THRESHOLD,
t1.SOURCE_ID,
t1.SOURCE_NAME,
t1.TAG_SETS,
t1.TOP_K,
t1.UPDATE_MAN,
t1.UPDATE_TIME,
t1.USE_KG,
t1.VECTOR_SIMILARITY_WEIGHT,
t1.VISIBILITY
FROM AI_KNOWLEDGE_BASE t1 

WHERE EXISTS(SELECT * FROM AI_KB_MEMBER t11 
 WHERE 
 t1.ID = t11.KB_ID  AND  ( t11.USER_ID = #{ctx.sessioncontext.srfpersonid}  AND  t11.ROLE_ID = 'reader' ) )
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