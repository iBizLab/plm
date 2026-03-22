## 启用(valid) <!-- {docsify-ignore-all} -->



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

> [!ATTENTION|label:存在长文本属性]
>
> `CONTENT(块内容)`



### 查询条件

(`ACTIVE(是否启用)` EQ `'1'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACTIVE`,
t1.`CONTENT`,
t1.`CONTENT_PREVIEW`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DOCUMENT_ID`,
t11.`NAME` AS `DOCUMENT_NAME`,
t11.`TYPE` AS `DOCUMENT_TYPE`,
t1.`ID`,
t11.`KB_ID`,
t1.`KEYWORDS`,
t1.`KEY_QUESTIONS`,
t1.`NAME`,
t1.`PATH`,
t1.`PID`,
t1.`POSITIONS`,
t1.`SEQUENCE`,
t1.`SOURCE_COUNT`,
t1.`SOURCE_INDICES`,
t1.`TAGS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `AI_KB_CHUNK` t1 
LEFT JOIN `AI_KB_DOCUMENT` t11 ON t1.`DOCUMENT_ID` = t11.`ID` 

WHERE ( t1.`ACTIVE` = 1 )
```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.ACTIVE,
t1.CONTENT,
t1.CONTENT_PREVIEW,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.DOCUMENT_ID,
t11.NAME AS DOCUMENT_NAME,
t11.TYPE AS DOCUMENT_TYPE,
t1.ID,
t11.KB_ID,
t1.KEYWORDS,
t1.KEY_QUESTIONS,
t1.NAME,
t1.PATH,
t1.PID,
t1.POSITIONS,
t1.SEQUENCE,
t1.SOURCE_COUNT,
t1.SOURCE_INDICES,
t1.TAGS,
t1.TYPE,
t1.UPDATE_MAN,
t1.UPDATE_TIME
FROM AI_KB_CHUNK t1 
LEFT JOIN AI_KB_DOCUMENT t11 ON t1.DOCUMENT_ID = t11.ID 

WHERE ( t1.ACTIVE = 1 )
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