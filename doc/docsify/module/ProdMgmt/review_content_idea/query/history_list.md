## 评审历史列表(history_list) <!-- {docsify-ignore-all} -->



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

(`PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CHANGE_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`CUR_VERSION_ID`,
t1.`FINAL_STAGE_RESULTS`,
t1.`ID`,
t1.`NAME`,
t11.`OWNER_TYPE`,
t11.`PARENT_VERSION_ID`,
t11.`PRINCIPAL_ID`,
t11.`PRINCIPAL_TYPE`,
t11.`TARGET_ID`,
t11.`TARGET_TYPE`,
t11.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW_CONTENT_EXTEND` t1 
LEFT JOIN `RELATION` t11 ON t1.`ID` = t11.`ID` 

WHERE ( t11.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
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