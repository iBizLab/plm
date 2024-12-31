## 未分配部门(unassigned_dept) <!-- {docsify-ignore-all} -->



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

(`DEPARTMENT_ID(部门标识)` ISNULL)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DEPARTMENT_ID`,
t1.`DISPLAY_NAME`,
t1.`EMAIL`,
t1.`EMPLOYEE_NUMBER`,
t1.`ID`,
t1.`JOB_ID`,
t1.`MOBILE`,
t1.`NAME`,
t1.`ORGANIZATION_ID`,
t1.`PASSWORD`,
t1.`STATUS`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `` t1 

WHERE ( t1.`DEPARTMENT_ID` IS NULL )
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