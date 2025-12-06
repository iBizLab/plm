## 只读用户(reader) <!-- {docsify-ignore-all} -->



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




### 查询连接
* **PRODUCT相关N:1（INNER JOIN）DER1N_IDEA_PRODUCT_PRODUCT_ID**<br>
连接关系：[DER1N_IDEA_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_PRODUCT_PRODUCT_ID)<br>
连接实体：[产品](module/ProdMgmt/product)<br>
    * **PRODUCT_MEMBER存在1:N（EXISTS (SELECT)）DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID**<br>
连接关系：[DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID)<br>
连接实体：[产品](module/ProdMgmt/product)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfpersonid`)<br>




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
t1.`FORMAT_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t41 
 WHERE 
 t11.`ID` = t41.`PRODUCT_ID`  AND  ( t41.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
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