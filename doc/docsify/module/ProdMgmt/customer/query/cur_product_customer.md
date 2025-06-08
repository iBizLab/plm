## 当前产品客户(cur_product_customer) <!-- {docsify-ignore-all} -->



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



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND `PRODUCT_ID(产品标识)` EQ `网页请求上下文.n_product_id_eq`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`PRODUCT_ID` = #{ctx.webcontext.n_product_id_eq} )
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