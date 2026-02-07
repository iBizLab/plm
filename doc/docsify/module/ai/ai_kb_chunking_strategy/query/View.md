## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->



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

* `全部数据`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AUTO_KEYWORDS`,
t1.`AUTO_QUESTIONS`,
t1.`CHUNK_EXTRACTION_PROMPT`,
t1.`CHUNK_EXTRACTION_SUB_PNOMPT`,
t1.`CHUNK_OVERLAP`,
t1.`CHUNK_OVERLAP_NUM`,
t1.`CHUNK_SIZE`,
t1.`CHUNK_TOKEN_NUM`,
t1.`DELIMITER`,
t1.`DISAMBIGUATION_PROMPT`,
t1.`FIELDDISAMBIGUATION_SUB_PROMPT`,
t1.`GRAPHRAG`,
t1.`HTML4EXCEL`,
t1.`ID`,
t1.`IGNORE_PARSING_IMAGE`,
t1.`IGNORE_PARSING_OSS_LINK`,
t1.`KEEP_SEPARATOR`,
t1.`LAYOUT_RECOGNIZE`,
t1.`MAX_CHUNK_COUNT_PER_DOC`,
t1.`NAME`,
t1.`PRE_PROCESS_RULES`,
t1.`RAPTOR`,
t1.`REDACTION_RULES`,
t1.`RELATION_DISAMBIGUATION_PROMPT`,
t1.`RELATION_DISAMBIGUATION_SUB_PROMPT`,
t1.`SEPARATOR`,
t1.`TASK_PAGE_SIZE`
FROM `` t1 


```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.AUTO_KEYWORDS,
t1.AUTO_QUESTIONS,
t1.CHUNK_EXTRACTION_PROMPT,
t1.CHUNK_EXTRACTION_SUB_PNOMPT,
t1.CHUNK_OVERLAP,
t1.CHUNK_OVERLAP_NUM,
t1.CHUNK_SIZE,
t1.CHUNK_TOKEN_NUM,
t1.DELIMITER,
t1.DISAMBIGUATION_PROMPT,
t1.FIELDDISAMBIGUATION_SUB_PROMPT,
t1.GRAPHRAG,
t1.HTML4EXCEL,
t1.ID,
t1.IGNORE_PARSING_IMAGE,
t1.IGNORE_PARSING_OSS_LINK,
t1.KEEP_SEPARATOR,
t1.LAYOUT_RECOGNIZE,
t1.MAX_CHUNK_COUNT_PER_DOC,
t1.NAME,
t1.PRE_PROCESS_RULES,
t1.RAPTOR,
t1.REDACTION_RULES,
t1.RELATION_DISAMBIGUATION_PROMPT,
t1.RELATION_DISAMBIGUATION_SUB_PROMPT,
t1.SEPARATOR,
t1.TASK_PAGE_SIZE
FROM  t1 


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