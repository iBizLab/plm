## tree(tree) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[通常属性组](#)
  * `ID(分块标识)`
  * `NAME(分块名称)`
  * `POSITIONS(文档位置)`
  * `TAGS(标签)`
  * `PATH(分块路径)`
  * `SEQUENCE(文档索引顺序)`
  * `DOCUMENT_TYPE(文档类型)`
  * `TYPE(分块类型)`
  * `SOURCE_INDICES(源分块索引)`
  * `SOURCE_COUNT(源分块计数)`
  * `DOCUMENT_NAME(知识库文档名称)`
  * `PID(父分块标识)`



### 查询条件

(`DOCUMENT_ID(知识库文档标识)` EQ `数据上下文.ai_kb_document`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t11.`NAME` AS `DOCUMENT_NAME`,
t11.`TYPE` AS `DOCUMENT_TYPE`,
t1.`ID`,
t1.`NAME`,
t1.`PATH`,
t1.`PID`,
t1.`POSITIONS`,
t1.`SEQUENCE`,
t1.`SOURCE_COUNT`,
t1.`SOURCE_INDICES`,
t1.`TAGS`,
t1.`TYPE`
FROM `AI_KB_CHUNK` t1 
LEFT JOIN `AI_KB_DOCUMENT` t11 ON t1.`DOCUMENT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.ai_kb_document !=null ">  t1.`DOCUMENT_ID` = #{ctx.datacontext.ai_kb_document}  </when><otherwise>1=1</otherwise></choose> )
```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t11.NAME AS DOCUMENT_NAME,
t11.TYPE AS DOCUMENT_TYPE,
t1.ID,
t1.NAME,
t1.PATH,
t1.PID,
t1.POSITIONS,
t1.SEQUENCE,
t1.SOURCE_COUNT,
t1.SOURCE_INDICES,
t1.TAGS,
t1.TYPE
FROM AI_KB_CHUNK t1 
LEFT JOIN AI_KB_DOCUMENT t11 ON t1.DOCUMENT_ID = t11.ID 

WHERE ( <choose><when test="ctx.datacontext.ai_kb_document !=null ">  t1.DOCUMENT_ID = #{ctx.datacontext.ai_kb_document}  </when><otherwise>1=1</otherwise></choose> )
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