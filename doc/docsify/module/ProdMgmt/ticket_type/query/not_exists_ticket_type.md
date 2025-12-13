## 不存在的产品工单类型(not_exists_ticket_type) <!-- {docsify-ignore-all} -->



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
* **PRODUCT_TICKET_TYPE不存在1:N（NOT EXISTS (SELECT)）DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID**<br>
连接关系：[DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID](der/DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID)<br>
连接实体：[工单类型](module/ProdMgmt/ticket_type)<br>
连接条件：(`PRODUCT_ID(产品标识)` EQ `网页请求上下文.product`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET_TYPE` t1 

WHERE NOT(EXISTS(SELECT * FROM `PRODUCT_TICKET_TYPE` t11 
 WHERE 
 t1.`ID` = t11.`TICKET_TYPE_ID`  AND  ( t11.`PRODUCT_ID` = #{ctx.webcontext.product} ) ))
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