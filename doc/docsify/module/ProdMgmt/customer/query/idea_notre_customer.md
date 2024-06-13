## 需求未关联的客户(idea_notre_customer) <!-- {docsify-ignore-all} -->



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

(`IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **RELATION不存在1:N（NOT EXISTS (SELECT)）DERCUSTOM_RELATION_CUSTOMER**<br>
连接关系：[DERCUSTOM_RELATION_TARGET_CUSTOMER](der/DERCUSTOM_RELATION_TARGET_CUSTOMER)<br>
连接实体：[客户](module/ProdMgmt/customer)<br>
连接条件：(`TARGET_TYPE(关联目标类型)` EQ `'customer'` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'idea'` AND `PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id`)<br>




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
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`TARGET_TYPE` = 'customer'  AND  t21.`PRINCIPAL_TYPE` = 'idea'  AND  t21.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0 )
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