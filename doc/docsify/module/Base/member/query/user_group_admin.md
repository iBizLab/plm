## 团队管理员(user_group_admin) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[userid](#)
  * `USER_ID(登录名)`



### 查询条件

(`ROLE_ID(角色)` EQ `'admin'` AND `OWNER_TYPE(所属数据对象)` EQ `'GROUP'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `MEMBER` t1 

WHERE ( t1.`ROLE_ID` = 'admin'  AND  t1.`OWNER_TYPE` = 'GROUP' )
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