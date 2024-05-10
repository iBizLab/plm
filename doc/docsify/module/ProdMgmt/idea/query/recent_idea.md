## 最近浏览(recent_idea) <!-- {docsify-ignore-all} -->

最近浏览的且未关联当前主体且非归档非删除的数据

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

(`IS_ARCHIVED(是否已归档)` EQ `'0'` AND `IS_DELETED(是否已删除)` EQ `'0'` AND `exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )` AND `NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   )`)





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
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
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

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   ) )
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