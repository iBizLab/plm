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
* **LIBRARY相关N:1（INNER JOIN）DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID**<br>
连接关系：[DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID](der/DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID)<br>
连接实体：[测试库](module/TestMgmt/library)<br>
    * **LIBRARY_MEMBER存在1:N（EXISTS (SELECT)）DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID**<br>
连接关系：[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)<br>
连接实体：[测试库](module/TestMgmt/library)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfpersonid`)<br>




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
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
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

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t31 
 WHERE 
 t21.`ID` = t31.`LIBRARY_ID`  AND  ( t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
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