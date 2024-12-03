## 工作项迭代变更记录(change) <!-- {docsify-ignore-all} -->



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






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t11.`IS_DELETED`,
t1.`NAME`,
t1.`SPRINT_ID`,
t21.`NAME` AS `SPRINT_NAME`,
t1.`SPRINT_STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t11.`COMPLETED_AT` AS `WORK_ITEM_COMPLETED_AT`,
t1.`WORK_ITEM_ID`,
t11.`PRIORITY` AS `WORK_ITEM_PRIORITY`,
t11.`TITLE` AS `WORK_ITEM_TITLE`
FROM `SPRINT_ALTERATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`WORK_ITEM_ID` = t11.`ID` 
LEFT JOIN `SPRINT` t21 ON t1.`SPRINT_ID` = t21.`ID` 


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