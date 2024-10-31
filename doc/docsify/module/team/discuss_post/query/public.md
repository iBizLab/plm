## 公开(public) <!-- {docsify-ignore-all} -->



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

* `默认（全部查询列）`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **DISCUSS_TOPIC相关N:1（INNER JOIN）DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID**<br>
连接关系：[DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID](der/DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID)<br>
连接实体：[话题](module/Team/discuss_topic)<br>
连接条件：(`VISIBILITY(可见范围)` EQ `'public'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' ) AND ( t1.`IS_DELETED` = 0 )
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