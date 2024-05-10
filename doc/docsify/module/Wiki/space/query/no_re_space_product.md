## 未关联的空间（产品）(no_re_space_product) <!-- {docsify-ignore-all} -->



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

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_ARCHIVED(是否已归档)` EQ `'0'`)



### 查询连接
* **RELATION不存在1:N（NOT EXISTS (SELECT)）DERCUSTOM_RELATION_SPACE**<br>
连接关系：[DERCUSTOM_RELATION_TARGET_SPACE](der/DERCUSTOM_RELATION_TARGET_SPACE)<br>
连接实体：[空间](module/Wiki/space)<br>
连接条件：(`PRINCIPAL_TYPE(关联主体类型)` EQ `数据上下文.principal_type` AND `TARGET_TYPE(关联目标类型)` EQ `数据上下文.target_type` AND `PRINCIPAL_ID(关联主体标识)` EQ `数据上下文.principal_id`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_TYPE` = #{ctx.datacontext.principal_type}  AND  t21.`TARGET_TYPE` = #{ctx.datacontext.target_type}  AND  t21.`PRINCIPAL_ID` = #{ctx.datacontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
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