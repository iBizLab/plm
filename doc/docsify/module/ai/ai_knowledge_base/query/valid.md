## 启用知识库(valid) <!-- {docsify-ignore-all} -->



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

* `指定属性组`
*  **属性组：**[属性组](#)
  * `ID(知识库标识)`
  * `NAME(知识库名称)`
  * `CREATE_MAN(建立人)`
  * `ENABLE(逻辑有效标识)`
  * `CREATE_TIME(建立时间)`
  * `UPDATE_MAN(更新人)`
  * `UPDATE_TIME(更新时间)`
  * `VISIBILITY(可见范围)`
  * `IS_DELETED(是否已删除)`
  * `META_DATA(元数据)`
  * `TAG_SETS(标签集)`
  * `GUIDANCE_PROMPT(引导提示词)`
  * `RERANK_MODEL(召回重排模型)`
  * `CHAT_MODEL(交谈模型)`
  * `USE_COPY(从已有知识库克隆)`
  * `COPY_TARGET(目标知识库)`
  * `SIMILARITY_THRESHOLD(召回相似度阈值)`
  * `VECTOR_SIMILARITY_WEIGHT(向量相似度权重)`
  * `TOP_K(最大召回数量)`
  * `RERANK(召回重排)`
  * `USE_KG(使用知识图谱)`
  * `CHAT_MODEL_ID(交谈模型标识)`
  * `CHUNK_METHOD(切片方法)`
  * `DESCRIPTION(描述)`
  * `EMBEDDING_MODEL(embedding模型)`
  * `EMBEDDING_MODEL_ID(模型标识)`
  * `PARSER_CONFIG(解析配置)`
  * `RERANK_MODEL_ID(模型标识)`
  * `SOURCE_ID(知识库源标识)`
  * `SOURCE_NAME(知识库源名称)`

> [!ATTENTION|label:存在长文本属性]
>
> `META_DATA(元数据)`



### 查询条件

((`IS_DELETED(是否已删除)` EQ `'0'` OR `IS_DELETED(是否已删除)` ISNULL))





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
t1.`META_DATA`,
t1.`NAME`,
t1.`PARSER_CONFIG`,
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

WHERE ( ( t1.`IS_DELETED` = 0  OR  t1.`IS_DELETED` IS NULL ) )
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
t1.META_DATA,
t1.NAME,
t1.PARSER_CONFIG,
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

WHERE ( ( t1.IS_DELETED = 0  OR  t1.IS_DELETED IS NULL ) )
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