## 通过主数据标识查询通知对象(attention_by_ownerid) <!-- {docsify-ignore-all} -->



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
  * `USER_ID(关注人)`



### 查询条件

(`OWNER_ID(所属数据标识)` EQ `网页请求上下文.id` AND `OWNER_ID(所属数据标识)` EQ `网页请求上下文.principal_id` AND (`TYPE(关注类型)` EQ `'30'` OR `TYPE(关注类型)` EQ `'40'`) AND `USER_ID(关注人)` NOTEQ `用户上下文.srfpersonid`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.id}  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose>  AND  ( t1.`TYPE` = '30'  OR  t1.`TYPE` = '40' )  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
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