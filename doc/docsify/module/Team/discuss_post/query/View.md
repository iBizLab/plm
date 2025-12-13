## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
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
> `CONTENT(讨论内容)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
(SELECT COUNT( att.ID ) AS comment_count FROM discuss_post tc LEFT JOIN `attention` att ON tc.ID = att.OWNER_ID WHERE tc.ID = t1.`ID`) AS `ATTENTION_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM discuss_post tc LEFT JOIN `comment` com ON tc.ID = com.PRINCIPAL_ID WHERE tc.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 


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