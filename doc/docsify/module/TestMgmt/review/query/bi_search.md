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
  * `CATEGORIES(类别)`
  * `CATEGORIES_NAME(类别)`
  * `SUBMITTED_AT(提交时间)`
  * `COMPLETED_AT(完成时间)`
  * `UPDATE_TIME(更新时间)`
  * `CREATE_TIME(建立时间)`
  * `CREATE_MAN(建立人)`
  * `ATTENTIONS_IMP(关注人)`
  * `SUBMITTER_NAME(提交人)`
  * `NAME(名称)`
  * `SUBMITTER_ID(提交人标识)`
  * `SHOW_IDENTIFIER(编号)`
  * `IDENTIFIER(编号)`
  * `UPDATE_MAN(更新人)`
  * `LIBRARY_NAME(测试库名称)`
  * `LIBRARY_ID(测试库标识)`
  * `GUIDELINE_ID(流程准则标识)`
  * `STATE(评审状态)`
  * `TYPE(评审类型)`
  * `ID(标识)`
  * `LIBRARY_IS_DELETED(测试库是否删除)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 


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