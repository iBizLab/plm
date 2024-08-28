## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->

默认查询；全部数据

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

* `全部数据`

> [!ATTENTION|label:存在长文本属性]
>
> `DESCRIPTION(描述)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='CUSTOMER') AS `RELATION_TOTAL_CUSTOMER`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 


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