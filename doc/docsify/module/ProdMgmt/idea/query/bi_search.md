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
  * `IS_DELETED(是否已删除)`
  * `REAL_AT_FROM(实际开始时间)`
  * `REAL_AT_TO(实际结束时间)`
  * `UPDATE_TIME(更新时间)`
  * `PLAN_AT_TO(计划结束时间)`
  * `CREATE_TIME(建立时间)`
  * `PLAN_AT_FROM(计划开始时间)`
  * `NAME(名称)`
  * `PLAN_AT(计划时间)`
  * `REAL_AT(实际时间)`
  * `UPDATE_MAN(更新人)`
  * `CREATE_MAN(建立人)`
  * `ATTENTIONS_IMP(关注人)`
  * `SHOW_IDENTIFIER(编号)`
  * `IDENTIFIER(编号)`
  * `CUR_VERSION_NAME(当前版本名称)`
  * `CHOOSE_VERSION_ID(选择版本标识)`
  * `TITLE(标题)`
  * `SUITE(模块)`
  * `REMAINING_WORKLOAD(剩余工时)`
  * `RELATION_TOTAL_IDEA(关联产品需求数)`
  * `ACTUAL_WORKLOAD(实际工时)`
  * `RELATION_TOTAL_TICKET(关联工单数)`
  * `RELATION_TOTAL_CUSTOMER(关联客户数)`
  * `RELATION_TOTAL_TEST_CASE(关联测试用例数)`
  * `ESTIMATED_WORKLOAD(预估工时)`
  * `WORKLOAD_SCHEDULE(工时进度)`
  * `PROGRESS(进度)`
  * `RELATION_TOTAL_WORK_ITEM(关联工作项数)`
  * `PRODUCT_NAME(所属产品)`
  * `ASSIGNEE_NAME(负责人)`
  * `CATEGORY_NAME(名称)`
  * `PRODUCT_ID(产品)`
  * `ASSIGNEE_ID(负责人)`
  * `CATEGORY_ID(类别标识)`
  * `IDEA_FROM(需求来源)`
  * `STATE(状态)`
  * `PRIORITY(优先级)`
  * `IDEA_TYPE(需求类型)`
  * `ID(标识)`
  * `SECTION_NAME(子产品名称)`
  * `SECTION_ID(子产品标识)`
  * `PRODUCT_IS_DELETED(产品是否删除)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t31.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t31.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_TO`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='CUSTOMER') AS `RELATION_TOTAL_CUSTOMER`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t11.`SECTION_ID`,
t21.`NAME` AS `SECTION_NAME`,
concat(t31.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 
LEFT JOIN `SECTION` t21 ON t11.`SECTION_ID` = t21.`ID` 
LEFT JOIN `PRODUCT` t31 ON t1.`PRODUCT_ID` = t31.`ID` 


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