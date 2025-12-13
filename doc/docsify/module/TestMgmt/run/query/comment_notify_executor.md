## 评论通知执行人(comment_notify_executor) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[执行人](#)
  * `EXECUTOR_ID(执行人标识)`
  * `EXECUTOR_NAME(执行人)`
  * `ID(标识)`



### 查询条件

(`exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.executor_id )`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`
FROM `RUN` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.executor_id ) )
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