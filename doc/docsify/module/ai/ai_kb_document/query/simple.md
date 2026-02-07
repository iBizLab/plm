## 简单查询(simple) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[基础数据](#)
  * `NAME(知识库文档名称)`
  * `UPDATE_TIME(更新时间)`
  * `SYNC_ID(文档同步标识)`
  * `CHUNK_METHOD(切片方法)`
  * `TYPE(文档类型)`
  * `STATUS(状态)`
  * `FILE_TYPE(文件类型)`
  * `CUSTOM_CHUNK(自定义切片)`
  * `TAG_SETS(标签集)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CHUNK_METHOD`,
t1.`CUSTOM_CHUNK`,
t1.`FILE_TYPE`,
t1.`ID`,
t1.`NAME`,
t1.`STATUS`,
t1.`SYNC_ID`,
t11.`TAG_SETS`,
t1.`TYPE`,
t1.`UPDATE_TIME`
FROM `AI_KB_DOCUMENT` t1 
LEFT JOIN `AI_KNOWLEDGE_BASE` t11 ON t1.`KB_ID` = t11.`ID` 


```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.CHUNK_METHOD,
t1.CUSTOM_CHUNK,
t1.FILE_TYPE,
t1.ID,
t1.NAME,
t1.STATUS,
t1.SYNC_ID,
t11.TAG_SETS,
t1.TYPE,
t1.UPDATE_TIME
FROM AI_KB_DOCUMENT t1 
LEFT JOIN AI_KNOWLEDGE_BASE t11 ON t1.KB_ID = t11.ID 


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