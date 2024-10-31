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
> `CONTENT(回复内容)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_NUM`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 


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