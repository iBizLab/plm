## BI查询(bi_search) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[BI查询属性组](#)
  * `CREATE_TIME(建立时间)`
  * `UPDATE_TIME(更新时间)`
  * `REGISTER_DATE(工作日期)`
  * `IDENTIFIER(编号)`
  * `PRINCIPAL_TYPE(工时主体类型)`
  * `OWNER_TYPE(所属数据对象)`
  * `UPDATE_MAN(更新人)`
  * `NAME(事项)`
  * `PRINCIPAL_ID(工时主体标识)`
  * `SHOW_IDENTIFIER(编号)`
  * `RECENT_PARENT(访问父类)`
  * `CREATE_MAN(建立人)`
  * `DURATION(时长)`
  * `TYPE_NAME(名称)`
  * `WORK_ITEM(工作项)`
  * `TEST_CASE(用例)`
  * `IDEA(需求)`
  * `TYPE_ID(类别)`
  * `ID(标识)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DURATION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RECENT_PARENT`,
t1.`REGISTER_DATE`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE_ID`,
t11.`NAME` AS `TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD` t1 
LEFT JOIN `WORKLOAD_TYPE` t11 ON t1.`TYPE_ID` = t11.`ID` 


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