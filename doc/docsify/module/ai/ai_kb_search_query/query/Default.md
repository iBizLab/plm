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
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FEEDBACK`,
t1.`ID`,
t1.`IS_ANSWERED`,
t1.`IS_KNOWLEDGE_GAP`,
t1.`NAME`,
t1.`NORMALIZED_QUERY`,
t1.`SOURCE`,
t1.`TAGS`,
t1.`TOTAL_DURATION`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`USER_SATISFACTION`
FROM `AI_KB_SEARCH_QUERY` t1 


```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.FEEDBACK,
t1.ID,
t1.IS_ANSWERED,
t1.IS_KNOWLEDGE_GAP,
t1.NAME,
t1.NORMALIZED_QUERY,
t1.SOURCE,
t1.TAGS,
t1.TOTAL_DURATION,
t1.UPDATE_MAN,
t1.UPDATE_TIME,
t1.USER_ID,
t1.USER_SATISFACTION
FROM AI_KB_SEARCH_QUERY t1 


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