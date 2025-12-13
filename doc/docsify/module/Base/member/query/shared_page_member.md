## 共享页面_非空间成员(shared_page_member) <!-- {docsify-ignore-all} -->



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

(`OWNER_ID(所属数据标识)` EQ `网页请求上下文.shared_page` AND `OWNER_TYPE(所属数据对象)` EQ `'PAGE'` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `'SHARED'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`POSITION_ID`,
t11.`NAME` AS `POSITION_NAME`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 
LEFT JOIN `POSITION` t11 ON t1.`POSITION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.shared_page}  AND  t1.`OWNER_TYPE` = 'PAGE'  AND  t1.`OWNER_SUBTYPE` = 'SHARED' )
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