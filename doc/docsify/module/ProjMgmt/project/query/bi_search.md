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
  * `IS_ARCHIVED(是否已归档)`
  * `IS_DELETED(是否已删除)`
  * `UPDATE_TIME(更新时间)`
  * `CREATE_TIME(建立时间)`
  * `START_AT(开始时间)`
  * `END_AT(结束时间)`
  * `ASSIGNEE_NAME(负责人)`
  * `ASSIGNEE_ID(负责人标识)`
  * `SCOPE_ID(所属对象)`
  * `NAME(项目名称)`
  * `CREATE_MAN(建立人)`
  * `IDENTIFIER(项目标识)`
  * `UPDATE_MAN(更新人)`
  * `COMPLETED_WORK_ITEMS(已完成工作项数)`
  * `ALL_WORK_ITEMS(全部工作项数)`
  * `SCHEDULE(进度)`
  * `VISIBILITY(可见范围)`
  * `SCOPE_TYPE(所属)`
  * `TYPE(类型)`
  * `STATE(项目状态)`
  * `ID(标识)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND PROJECT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND PROJECT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 


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