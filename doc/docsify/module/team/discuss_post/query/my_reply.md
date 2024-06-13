## 我回复的(my_reply) <!-- {docsify-ignore-all} -->



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




### 查询连接
* **DISCUSS_REPLY存在1:N（EXISTS (SELECT)）DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID**<br>
连接关系：[DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID](der/DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID)<br>
连接实体：[讨论](module/Team/discuss_post)<br>
连接条件：(`CREATE_MAN(建立人)` EQ `用户上下文.srfpersonid`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `DISCUSS_REPLY` t21 
 WHERE 
 t1.`ID` = t21.`POST_ID`  AND  ( t21.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} ) )
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