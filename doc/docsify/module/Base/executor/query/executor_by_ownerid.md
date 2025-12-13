## 通过主数据标识查询通知对象(executor_by_ownerid) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[用户标识](#)
  * `ID(标识)`
  * `USER_ID(执行人标识)`



### 查询条件

(`USER_ID(执行人标识)` NOTEQ `用户上下文.srfpersonid` AND `OWNER_ID(所属数据标识)` EQ `网页请求上下文.id`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `EXECUTOR` t1 

WHERE ( t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` = #{ctx.webcontext.id} )
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