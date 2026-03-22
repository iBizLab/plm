## 未解析文档(unparsed) <!-- {docsify-ignore-all} -->



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
> `META_DATA(文档元数据)`
>
> `PARSED_CONTENT(解析内容)`
>
> `PARSE_ERROR(错误信息)`



### 查询条件

(`ACTIVE(是否启用)` EQ `'1'` AND `STATUS(状态)` EQ `'3'` AND (`PARSED_CONTENT(解析内容)` ISNOTNULL OR `FILE(上传文件)` ISNOTNULL))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACTIVE`,
t1.`CHUNK_METHOD`,
t1.`CHUNK_NUM`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOM_CHUNK`,
t1.`FILE`,
t1.`FILE_TYPE`,
t1.`ID`,
t1.`KB_ID`,
t1.`META_DATA`,
t1.`NAME`,
t1.`PARSED_CONTENT`,
t1.`PARSER_CONFIG`,
t1.`PARSE_ERROR`,
t1.`SIZE`,
t1.`SOURCE_ID`,
t1.`SOURCE_TYPE`,
t1.`STATUS`,
t1.`SYNC_FREQUENCY`,
t1.`SYNC_ID`,
t11.`TAG_SETS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `AI_KB_DOCUMENT` t1 
LEFT JOIN `AI_KNOWLEDGE_BASE` t11 ON t1.`KB_ID` = t11.`ID` 

WHERE ( t1.`ACTIVE` = 1  AND  t1.`STATUS` = '3'  AND  ( t1.`PARSED_CONTENT` IS NOT NULL  OR  t1.`FILE` IS NOT NULL ) )
```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.ACTIVE,
t1.CHUNK_METHOD,
t1.CHUNK_NUM,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.CUSTOM_CHUNK,
t1.FILE,
t1.FILE_TYPE,
t1.ID,
t1.KB_ID,
t1.META_DATA,
t1.NAME,
t1.PARSED_CONTENT,
t1.PARSER_CONFIG,
t1.PARSE_ERROR,
t1.SIZE,
t1.SOURCE_ID,
t1.SOURCE_TYPE,
t1.STATUS,
t1.SYNC_FREQUENCY,
t1.SYNC_ID,
t11.TAG_SETS,
t1.TYPE,
t1.UPDATE_MAN,
t1.UPDATE_TIME
FROM AI_KB_DOCUMENT t1 
LEFT JOIN AI_KNOWLEDGE_BASE t11 ON t1.KB_ID = t11.ID 

WHERE ( t1.ACTIVE = 1  AND  t1.STATUS = '3'  AND  ( t1.PARSED_CONTENT IS NOT NULL  OR  t1.FILE IS NOT NULL ) )
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