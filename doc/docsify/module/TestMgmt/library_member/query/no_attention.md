## 未关注用户(测试用例)(no_attention) <!-- {docsify-ignore-all} -->



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

(`( USER_ID NOT IN (SELECT user_id from attention t2 where t2.OWNER_ID = #{ctx.webcontext.test_case} ))`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( ( USER_ID NOT IN (SELECT user_id from attention t2 where t2.OWNER_ID = #{ctx.webcontext.test_case} )) )
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