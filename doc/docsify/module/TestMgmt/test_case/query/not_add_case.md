## 未添加过的用例(not_add_case) <!-- {docsify-ignore-all} -->



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

(`not exists(select 1 from run t2 
where 
t1.ID= t2.CASE_ID 
and
t2.PLAN_ID = #{ctx.webcontext.test_plan})
` AND `IS_DELETED(是否已删除)` EQ `'0'` AND (`SUITES(模块路径)` LIKE `网页请求上下文.suite_id` OR `SUITE_ID(用例模块标识)` EQ `网页请求上下文.suite_id`))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( not exists(select 1 from run t2 
where 
t1.ID= t2.CASE_ID 
and
t2.PLAN_ID = #{ctx.webcontext.test_plan})  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> ) )
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