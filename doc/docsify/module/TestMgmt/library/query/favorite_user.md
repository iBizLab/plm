## 查询星标（管理用户）(favorite_user) <!-- {docsify-ignore-all} -->



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

(`IS_ARCHIVED(是否已归档)` EQ `'0'` AND `IS_DELETED(是否已删除)` EQ `'0'` AND `IS_FAVORITE(是否星标)` EQ `'1'`)



### 查询连接
* **LIBRARY_MEMBER存在1:N（EXISTS (SELECT)）DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID**<br>
连接关系：[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)<br>
连接实体：[测试库](module/TestMgmt/library)<br>
连接条件：(`ROLE_ID(角色)` NOTEQ `'reader'` AND `USER_ID(登录名)` EQ `用户上下文.srfpersonid`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
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