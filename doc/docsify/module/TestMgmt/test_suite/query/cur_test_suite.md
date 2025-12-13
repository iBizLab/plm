## 当前测试库用例模块(cur_test_suite) <!-- {docsify-ignore-all} -->



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

(`LIBRARY_ID(测试库标识)` EQ `数据上下文.library`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`LIBRARY_ID` = #{ctx.datacontext.library} )
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