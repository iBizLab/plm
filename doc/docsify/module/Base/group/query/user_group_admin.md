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

* `默认（全部查询列）`




### 查询连接
* **MEMBER存在1:N（EXISTS (SELECT)）DERCUSTOM_MEMBER_GROUP_OWNER_ID**<br>
连接关系：[DERCUSTOM_MEMBER_GROUP_OWNER_ID](der/DERCUSTOM_MEMBER_GROUP_OWNER_ID)<br>
连接实体：[团队](module/Base/group)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfpersonid` AND `OWNER_TYPE(所属数据对象)` EQ `'GROUP'` AND `ROLE_ID(角色)` EQ `'admin'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`OWNER_ID`  AND  t21.`OWNER_TYPE` = 'GROUP'  AND  t21.`OWNER_SUBTYPE` = 'GROUP'  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`OWNER_TYPE` = 'GROUP'  AND  t21.`ROLE_ID` = 'admin' ) )
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