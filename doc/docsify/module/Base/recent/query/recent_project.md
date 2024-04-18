## 最近访问项目(recent_project) <!-- {docsify-ignore-all} -->



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

(`UPDATE_MAN(更新人)` EQ `用户上下文.srfpersonid` AND `OWNER_TYPE(所属数据对象)` EQ `'project'` AND (`OWNER_SUBTYPE(所属对象子类型)` EQ `'scrum'` OR `OWNER_SUBTYPE(所属对象子类型)` EQ `'kanban'` OR `OWNER_SUBTYPE(所属对象子类型)` EQ `'waterfall'`))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_TYPE` = 'project'  AND  ( t1.`OWNER_SUBTYPE` = 'scrum'  OR  t1.`OWNER_SUBTYPE` = 'kanban'  OR  t1.`OWNER_SUBTYPE` = 'waterfall' ) )
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