## 我评审的(my_reviewed) <!-- {docsify-ignore-all} -->



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

(`STAGE(阶段)` LIKE `用户上下文.srfpersonid`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( t1.`STAGE` LIKE CONCAT('%',#{ctx.sessioncontext.srfpersonid},'%') )
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