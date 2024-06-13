## 最新回复(recent) <!-- {docsify-ignore-all} -->



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
> `CONTENT(回复内容)`



### 查询条件

(`CREATE_TIME(建立时间)` LTANDEQ `'30'` AND `exists(select 1 from `discuss_post` t2, `member` t3 where t1.post_id = t2.id and t2.topic_id = t3.owner_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})` AND `exists(select 1 from discuss_post t2, discuss_topic t3 where t2.topic_id = t3.id 
 and t1.post_id = t2.id and t3.id = #{ctx.webcontext.discuss_topic})`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 

WHERE ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) <= 30  AND  exists(select 1 from `discuss_post` t2, `member` t3 where t1.post_id = t2.id and t2.topic_id = t3.owner_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})  AND  exists(select 1 from discuss_post t2, discuss_topic t3 where t2.topic_id = t3.id 
 and t1.post_id = t2.id and t3.id = #{ctx.webcontext.discuss_topic}) )
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