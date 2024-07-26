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
  * `CATEGORIES_NAME(类别)`
  * `CREATE_TIME(建立时间)`
  * `UPDATE_TIME(更新时间)`
  * `START_AT(计划开始)`
  * `END_AT(计划结束)`
  * `ASSIGNEE_NAME(负责人)`
  * `UPDATE_MAN(更新人)`
  * `CREATE_MAN(建立人)`
  * `ASSIGNEE_ID(负责人标识)`
  * `NAME(计划名称)`
  * `CATEGORIES(类别)`
  * `LIBRARY_IDENTIFIER(测试库名称)`
  * `PROJECT_TYPE(项目类型)`
  * `PROJECT_NAME(关联项目)`
  * `SPRINT_NAME(关联迭代)`
  * `RELEASE_NAME(名称)`
  * `LIBRARY_NAME(所属测试库)`
  * `PROJECT_ID(关联项目)`
  * `LIBRARY_ID(测试库标识)`
  * `RELEASE_ID(项目发布标识)`
  * `SPRINT_ID(关联迭代)`
  * `TYPE(测试分类)`
  * `STATUS(状态)`
  * `ID(标识)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 


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