## 已归档(archived) <!-- {docsify-ignore-all} -->



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

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_ARCHIVED(是否已归档)` EQ `'1'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 1 )
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