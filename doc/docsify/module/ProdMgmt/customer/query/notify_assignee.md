## 客户通知负责人(notify_assignee) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[负责人](#)
  * `ID(标识)`
  * `ASSIGNEE_ID(负责人标识)`
  * `ASSIGNEE_NAME(负责人)`



### 查询条件

(`ID(标识)` EQ `网页请求上下文.id` AND `ASSIGNEE_ID(负责人标识)` NOTEQ `用户上下文.srfpersonid`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `CUSTOMER` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`ASSIGNEE_ID` <> #{ctx.sessioncontext.srfpersonid} )
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