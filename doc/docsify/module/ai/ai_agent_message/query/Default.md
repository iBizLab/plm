## DEFAULT(Default) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
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
t1.`CONTENT_TYPE`,
t1.`CONVERSATION_ID`,
t11.`NAME` AS `CONVERSATION_NAME`,
t11.`TITLE` AS `CONVERSATION_TITLE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
(select count(1) from ai_agent_feedback t where t.user_id=#{ctx.sessioncontext.srfuserid} and t.message_id=t1.`ID` and t.feedback_type='dislike') AS `IS_DISLIKE`,
(select count(1) from ai_agent_feedback t where t.user_id=#{ctx.sessioncontext.srfuserid} and t.message_id=t1.`ID` and t.feedback_type='like') AS `IS_LIKE`,
t1.`NAME`,
t1.`SENDER_TYPE`,
t1.`SEQUENCE`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_AGENT_MESSAGE` t1 
LEFT JOIN `AI_AGENT_CONVERSATION` t11 ON t1.`CONVERSATION_ID` = t11.`ID` 


```

</el-dialog>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
                MYSQL5 : false
        
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>