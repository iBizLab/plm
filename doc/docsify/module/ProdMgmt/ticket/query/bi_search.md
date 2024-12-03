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
  * `CREATE_TIME(建立时间)`
  * `SUBMITTED_AT(提交时间)`
  * `UPDATE_TIME(更新时间)`
  * `NAME(名称)`
  * `ESTIMATED_AT(预计时间)`
  * `UPDATE_MAN(更新人)`
  * `CHANNEL(渠道)`
  * `IDENTIFIER(编号)`
  * `TITLE(标题)`
  * `CREATE_MAN(建立人)`
  * `SUBMITTER_NAME(提交人)`
  * `ATTENTIONS_IMP(关注人)`
  * `ASSIGNEE_NAME(负责人)`
  * `CUSTOMER_NAME(客户)`
  * `CUSTOMER_ID(客户标识)`
  * `PRODUCT_ID(产品标识)`
  * `ASSIGNEE_ID(负责人标识)`
  * `TYPE(类型)`
  * `SOLUTION(解决方案)`
  * `PRIORITY(优先级)`
  * `STATE(状态)`
  * `ID(标识)`
  * `PRODUCT_NAME(所属产品)`
  * `SUBMITTER_ID(提交人标识)`
  * `TAGS(标签)`
  * `PRODUCT_IS_DELETED(产品是否删除)`






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
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SOLUTION`,
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