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
t1.`ACTIVE`,
t1.`CONFIDENCE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`KB_ID`,
t31.`NAME` AS `KB_NAME`,
t1.`NAME`,
t1.`OBJECT_ID`,
t21.`NAME` AS `OBJECT_NAME`,
t1.`PREDICATE`,
t1.`SUBJECT_ID`,
t11.`NAME` AS `SUBJECT_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_KB_GRAPH_RELATION` t1 
LEFT JOIN `AI_KB_GRAPH_ENTITY` t11 ON t1.`SUBJECT_ID` = t11.`ID` 
LEFT JOIN `AI_KB_GRAPH_ENTITY` t21 ON t1.`OBJECT_ID` = t21.`ID` 
LEFT JOIN `AI_KNOWLEDGE_BASE` t31 ON t1.`KB_ID` = t31.`ID` 


```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.ACTIVE,
t1.CONFIDENCE,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.DESCRIPTION,
t1.ID,
t1.KB_ID,
t31.NAME AS KB_NAME,
t1.NAME,
t1.OBJECT_ID,
t21.NAME AS OBJECT_NAME,
t1.PREDICATE,
t1.SUBJECT_ID,
t11.NAME AS SUBJECT_NAME,
t1.UPDATE_MAN,
t1.UPDATE_TIME
FROM AI_KB_GRAPH_RELATION t1 
LEFT JOIN AI_KB_GRAPH_ENTITY t11 ON t1.SUBJECT_ID = t11.ID 
LEFT JOIN AI_KB_GRAPH_ENTITY t21 ON t1.OBJECT_ID = t21.ID 
LEFT JOIN AI_KNOWLEDGE_BASE t31 ON t1.KB_ID = t31.ID 


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