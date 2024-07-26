## BI查询(bi_search) <!-- {docsify-ignore-all} -->



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

* `指定属性组`
*  **属性组：**[BI查询属性组](#)
  * `CREATE_TIME(建立时间)`
  * `UPDATE_TIME(更新时间)`
  * `START_AT(开始时间)`
  * `END_AT(结束时间)`
  * `CREATE_MAN(建立人)`
  * `ASSIGNEE_ID(负责人标识)`
  * `UPDATE_MAN(更新人)`
  * `NAME(名称)`
  * `ASSIGNEE_NAME(负责人)`
  * `COMPLETED_WORK_ITEMS(已完成工作项数)`
  * `PAST_DAYS(迭代已过天数)`
  * `ALL_WORK_ITEMS(全部工作项数)`
  * `SCHEDULE(进度)`
  * `CATEGORIES(类别)`
  * `PROJECT_NAME(项目名称)`
  * `PROJECT_ID(项目标识)`
  * `STATUS(状态)`
  * `ID(标识)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 


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