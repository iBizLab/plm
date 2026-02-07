## 有效会话(active) <!-- {docsify-ignore-all} -->



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

((`STATUS(会话状态)` EQ `'active'` OR `STATUS(会话状态)` EQ `'paused'`))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AI_AGENT_CONTEXT_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_TOP`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`SESSION_ID`,
t1.`STATUS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `AI_AGENT_CONVERSATION` t1 

WHERE ( ( t1.`STATUS` = 'active'  OR  t1.`STATUS` = 'paused' ) )
```

</el-dialog>

<el-dialog v-model="POSTGRESQL" title="POSTGRESQL">

```sql
SELECT
t1.AI_AGENT_CONTEXT_ID,
t1.CREATE_MAN,
t1.CREATE_TIME,
t1.ID,
t1.IS_TOP,
t1.NAME,
t1.SEQUENCE,
t1.SESSION_ID,
t1.STATUS,
t1.TITLE,
t1.TYPE,
t1.UPDATE_MAN,
t1.UPDATE_TIME,
t1.USER_ID
FROM AI_AGENT_CONVERSATION t1 

WHERE ( ( t1.STATUS = 'active'  OR  t1.STATUS = 'paused' ) )
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