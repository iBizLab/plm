## 高级搜索(advanced_search) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[高级搜索](#)
  * `PRODUCT_ID(产品标识)`
  * `ID(标识)`
  * `SHOW_IDENTIFIER(编号)`
  * `TITLE(标题)`
  * `STATE(状态)`
  * `PRODUCT_NAME(所属产品)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND `exists(select 1 from product t2, product_member t3 where t1.product_id = t2.id and t2.id = t3.product_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ID`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`TITLE`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from product t2, product_member t3 where t1.product_id = t2.id and t2.id = t3.product_id and t3.user_id = #{ctx.sessioncontext.srfpersonid}) )
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