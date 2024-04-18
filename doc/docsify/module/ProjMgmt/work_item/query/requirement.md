## 需求工作项(requirement) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[通常属性组](#)
  * `ID(标识)`
  * `TITLE(标题)`
  * `IDENTIFIER(编号)`
  * `IS_DELETED(是否已删除)`
  * `STATE(状态)`
  * `WORK_ITEM_TYPE_ID(工作项类型)`
  * `ASSIGNEE_ID(负责人)`
  * `ASSIGNEE_NAME(负责人)`
  * `PRIORITY(优先级)`
  * `END_AT(结束时间)`
  * `PID(父标识)`
  * `START_AT(开始时间)`
  * `TOP_ID(顶级工作项标识)`
  * `PROJECT_ID(项目)`
  * `IS_ARCHIVED(是否已归档)`
  * `PTITLE(父工作项)`
  * `REAPPEAR_PROBABILITY(复现概率)`
  * `SEVERITY(严重程度)`
  * `CREATE_TIME(建立时间)`



### 查询条件

(`WORK_ITEM_TYPE_GROUP(工作项类型分组)` EQ `'requirement'` AND `IS_DELETED(是否已删除)` EQ `'0'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`SEVERITY`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t21.`GROUP` = 'requirement'  AND  t1.`IS_DELETED` = 0 )
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